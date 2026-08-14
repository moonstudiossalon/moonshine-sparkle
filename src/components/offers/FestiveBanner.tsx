import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useFestiveOffer } from '@/hooks/useFestiveOffer';
import { OFFER_TEL } from '@/lib/offers';
import { trackOfferCall, trackOfferNav } from './offerTracking';

/**
 * Homepage promo card for whichever festive offer is running. Renders nothing
 * once the window closes, so the homepage silently returns to its normal shape.
 *
 * Visually it borrows the offer surfaces' deep green base — which doubles as the
 * green of the tricolour — and adds a saffron accent plus a thin tricolour rule.
 * That reads as Independence Day without turning the card into a flag, and keeps
 * it recognisably part of the same offer family as the Happy Hour banner below.
 */
const FestiveBanner = () => {
  const navigate = useNavigate();
  const status = useFestiveOffer();

  if (!status) return null;
  const { offer, countdown, finalDay } = status;

  return (
    <section className="fest" aria-labelledby="fest-title">
      <div className="fest-in">
        <div className="fest-flag" aria-hidden="true" />
        <div className="fest-glow" aria-hidden="true" />

        <div className="fest-head">
          <span className={cn('fest-stat', finalDay && 'fest-stat-final')}>
            <span className="fest-dot" aria-hidden="true" />
            {/* aria-live off by design: a countdown that announces every 30s
                would hijack a screen reader mid-page. The text stays readable. */}
            <span className="fest-count">{countdown}</span>
          </span>

          <h2 id="fest-title" className="fest-title">
            {offer.title}
          </h2>
          <p className="fest-tag">{offer.tagline}</p>
        </div>

        <ul className="fest-deals">
          {offer.deals.map((deal) => (
            <li className="fest-deal" key={deal.scope}>
              <span className="fest-val">
                {deal.value}
                <small className="fest-off">OFF</small>
              </span>
              <span className="fest-scope">{deal.scope}</span>
            </li>
          ))}
        </ul>

        <p className="fest-cond">
          <span className="fest-cond-ic" aria-hidden="true">
            <Icon name="info" />
          </span>
          {offer.condition}
        </p>

        <div className="fest-cta">
          <a
            className="ocall fest-call"
            href={`tel:${OFFER_TEL}`}
            onClick={() => trackOfferCall('festive_banner')}
          >
            <span className="ocall-ic">
              <Icon name="phone" />
            </span>
            <span className="ocall-lab">
              Call to Book Your Slot
              <small className="ocall-sub fest-call-sub">By appointment only · 90048 32184</small>
            </span>
          </a>
          <button
            type="button"
            className="osee fest-see"
            onClick={() => {
              trackOfferNav('festive_banner');
              navigate('/offers');
            }}
          >
            See offer details
            <span className="osee-ic">
              <Icon name="chevron" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FestiveBanner;
