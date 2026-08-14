import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useOfferStatus } from '@/hooks/useOfferStatus';
import { useFestiveOffer } from '@/hooks/useFestiveOffer';
import { festiveSummaryShort } from '@/lib/festive';
import { OFFERS, OFFER_TEL, fmtH } from '@/lib/offers';
import { trackOfferCall, trackOfferNav } from './offerTracking';

/**
 * Always-visible reminder that the offer exists, with an instant Call action.
 * Sits directly under the site header on every page.
 *
 * There is only ever one bar. While a festive offer is running it takes the
 * slot — it expires, Happy Hour does not — and the bar reverts on its own the
 * moment the festive window closes.
 */
const OfferBar = () => {
  const navigate = useNavigate();
  const offer = OFFERS[0];
  const status = useOfferStatus(offer);
  const festive = useFestiveOffer();

  const name = festive ? festive.offer.shortName : offer.name;
  const sub = festive
    ? `${festive.countdown} · ${festiveSummaryShort(festive.offer)}`
    : status.live
      ? `Free 2nd service · till ${fmtH(offer.endHour)}`
      : 'Free 2nd service · Mon–Thu 12–5';

  return (
    <div className={cn('obar', festive && 'obar-fest')}>
      <button
        type="button"
        className="obar-main"
        onClick={() => {
          trackOfferNav(festive ? 'festive_bar' : 'offer_bar');
          navigate('/offers');
        }}
      >
        <span
          className={cn('obar-dot', !festive && status.live && 'obar-dot-live')}
          aria-hidden="true"
        />
        <span className="obar-txt">
          <b className="obar-name">{name}</b>
          <span className="obar-sub">{sub}</span>
        </span>
        <span className="obar-go">
          <span className="obar-go-t">Details</span>
          <span className="obar-go-ic">
            <Icon name="chevron" />
          </span>
        </span>
      </button>
      <a
        className="obar-call"
        href={`tel:${OFFER_TEL}`}
        aria-label={`Call Moon Studios about the ${name} offer`}
        onClick={() => trackOfferCall(festive ? 'festive_bar' : 'offer_bar')}
      >
        <span className="obar-call-ic">
          <Icon name="phone" />
        </span>
        Call
      </a>
    </div>
  );
};

export default OfferBar;
