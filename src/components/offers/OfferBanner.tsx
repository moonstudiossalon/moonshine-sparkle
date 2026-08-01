import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useOfferStatus } from '@/hooks/useOfferStatus';
import { OFFERS, OFFER_TEL, fmtH } from '@/lib/offers';
import { trackOfferCall, trackOfferNav } from './offerTracking';

/**
 * The primary conversion surface — homepage, right under the trust strip.
 *
 * Mobile keeps the dark green/gold promo card. Desktop deliberately tones it
 * down to a light card on the page's own --card surface, so the offer reads as
 * a promo without out-shouting the page. Those desktop overrides are the md:
 * utilities below; the mobile look comes from src/offers.css.
 */
const OfferBanner = () => {
  const navigate = useNavigate();
  const offer = OFFERS[0];
  const status = useOfferStatus(offer);

  return (
    <section
      id="offers"
      className="obann md:px-0 md:pt-[26px] md:pb-1"
    >
      <div
        className={cn(
          'obann-in',
          'md:flex md:items-center md:gap-[30px] md:max-w-[1200px] md:mx-auto',
          'md:px-[26px] md:py-5 md:rounded-[20px] md:bg-none md:bg-card md:text-foreground',
          'md:[border-color:hsl(var(--offer-gold)/0.5)] md:shadow-soft',
        )}
      >
        <div className="obann-glow md:hidden" aria-hidden="true" />

        <div className="obann-head md:flex-[0_1_300px] md:min-w-[240px]">
          <span
            className={cn(
              'ostat obann-stat',
              status.live && 'ostat-live',
              'md:text-[9.5px] md:py-1 md:px-[9px]',
              status.live
                ? 'md:[color:#15803d] md:[background:rgba(34,197,94,0.14)] md:[border-color:rgba(21,128,61,0.35)]'
                : 'md:[color:hsl(var(--offer-bg))] md:[background:hsl(var(--offer-gold)/0.16)] md:[border-color:hsl(var(--offer-gold)/0.5)]',
            )}
          >
            <span
              className={cn(
                'ostat-dot',
                status.live && 'ostat-dot-live',
                status.live ? 'md:[background:#16a34a]' : 'md:[background:hsl(var(--offer-bg))]',
              )}
              aria-hidden="true"
            />
            {status.next}
          </span>

          <h2 className="obann-title md:text-[27px] md:mt-[7px] md:mb-0.5 md:text-foreground">
            {offer.name}
          </h2>
          <p className="obann-tag md:text-[13.5px] md:text-muted-foreground">{offer.tagline}</p>

          <div className="ochips obann-chips md:mt-2.5 md:gap-[7px]">
            <span className="ochip obann-chip md:text-[11.5px] md:py-[5px] md:px-2.5 md:[background:hsl(var(--secondary)/0.6)] md:border-border md:text-muted-foreground">
              <span className="ochip-ic md:[color:hsl(var(--offer-bg))]">
                <Icon name="calendar" />
              </span>
              {offer.dayLabel}
            </span>
            <span className="ochip obann-chip md:text-[11.5px] md:py-[5px] md:px-2.5 md:[background:hsl(var(--secondary)/0.6)] md:border-border md:text-muted-foreground">
              <span className="ochip-ic md:[color:hsl(var(--offer-bg))]">
                <Icon name="clock" />
              </span>
              {fmtH(offer.startHour)} – {fmtH(offer.endHour)}
            </span>
          </div>
        </div>

        <div className="obann-pairs md:flex-1 md:grid-cols-2 md:gap-[7px] md:m-0">
          {offer.pairs.map((pair) => (
            <div
              key={pair.pay}
              className="opill md:py-2 md:px-3 md:[background:hsl(var(--secondary)/0.45)] md:border-border"
            >
              <span className="opill-p md:text-[12.5px] md:text-muted-foreground">{pair.pay}</span>
              <span className="opill-plus md:[color:hsl(var(--offer-bg)/0.55)]">+</span>
              <span className="opill-g md:text-[12.5px] md:text-foreground">{pair.get}</span>
              <span className="opill-free md:text-[8.5px]">FREE</span>
            </div>
          ))}
        </div>

        <div className="obann-cta md:flex-none md:items-stretch md:gap-1 md:m-0">
          <a
            className={cn(
              'ocall obann-call',
              'md:min-h-[48px] md:px-6 md:text-sm md:shadow-soft',
              'md:[background:hsl(var(--offer-bg))] md:[color:hsl(var(--offer-gold))]',
            )}
            href={`tel:${OFFER_TEL}`}
            onClick={() => trackOfferCall('offer_banner')}
          >
            <span className="ocall-ic">
              <Icon name="phone" />
            </span>
            <span className="ocall-lab">
              Call to Book Your Slot
              <small className="ocall-sub obann-call-sub md:opacity-75">
                By appointment only · 90048 32184
              </small>
            </span>
          </a>
          <button
            type="button"
            className="osee obann-see md:min-h-[30px] md:text-[12.5px] md:text-primary"
            onClick={() => {
              trackOfferNav('offer_banner');
              navigate('/offers');
            }}
          >
            See all offers
            <span className="osee-ic">
              <Icon name="chevron" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
