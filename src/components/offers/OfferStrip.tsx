import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useOfferStatus } from '@/hooks/useOfferStatus';
import { OFFERS, OFFER_TEL, fmtH } from '@/lib/offers';
import { trackOfferCall, trackOfferNav } from './offerTracking';

type OfferStripProps = {
  /** One-line nudge tuned to where the strip sits. Falls back to a generic line. */
  label?: string;
};

/**
 * A lightweight nudge for decision points that shouldn't repeat the full card.
 * Dark green on mobile, light card on desktop — same split as OfferBanner.
 */
const OfferStrip = ({ label }: OfferStripProps) => {
  const navigate = useNavigate();
  const offer = OFFERS[0];
  const status = useOfferStatus(offer);

  return (
    <div
      className={cn(
        'ostrip',
        'md:max-w-[1200px] md:my-[22px] md:mx-auto md:rounded-2xl',
        'md:bg-none md:bg-card md:shadow-soft md:[border-color:hsl(var(--offer-gold)/0.45)]',
      )}
    >
      <button
        type="button"
        className="ostrip-body md:flex-row md:items-center md:gap-3.5 md:py-4 md:px-5 md:text-foreground"
        onClick={() => {
          trackOfferNav('offer_strip');
          navigate('/offers');
        }}
      >
        <span
          className={cn(
            'ostrip-tag',
            status.live && 'ostrip-tag-live',
            status.live && 'md:[background:#16a34a] md:text-white',
          )}
        >
          {status.live ? 'Live now' : offer.name}
        </span>
        <span className="ostrip-txt md:flex-1 md:text-sm md:text-muted-foreground">
          {label ??
            `Pay for one service, get the second free — ${offer.dayLabel}, ${fmtH(offer.startHour)}–${fmtH(offer.endHour)}.`}
        </span>
        <span className="ostrip-go md:text-primary">
          See offer
          <span className="ostrip-go-ic">
            <Icon name="chevron" />
          </span>
        </span>
      </button>
      <a
        className={cn(
          'ostrip-call',
          'md:w-[118px] md:flex-row md:gap-[7px] md:text-[13px]',
          'md:[background:hsl(var(--offer-bg))] md:[color:hsl(var(--offer-gold))]',
        )}
        href={`tel:${OFFER_TEL}`}
        aria-label="Call Moon Studios about the Happy Hour offer"
        onClick={() => trackOfferCall('offer_strip')}
      >
        <span className="ostrip-call-ic">
          <Icon name="phone" />
        </span>
        Call
      </a>
    </div>
  );
};

export default OfferStrip;
