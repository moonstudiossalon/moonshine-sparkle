import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { useOfferStatus } from '@/hooks/useOfferStatus';
import { OFFERS, OFFER_TEL, fmtH } from '@/lib/offers';
import { trackOfferCall, trackOfferNav } from './offerTracking';

/**
 * Always-visible reminder that the offer exists, with an instant Call action.
 * Sits directly under the site header on every page.
 */
const OfferBar = () => {
  const navigate = useNavigate();
  const offer = OFFERS[0];
  const status = useOfferStatus(offer);

  return (
    <div className="obar">
      <button
        type="button"
        className="obar-main"
        onClick={() => {
          trackOfferNav('offer_bar');
          navigate('/offers');
        }}
      >
        <span className={cn('obar-dot', status.live && 'obar-dot-live')} aria-hidden="true" />
        <span className="obar-txt">
          <b className="obar-name">{offer.name}</b>
          <span className="obar-sub">
            {status.live
              ? `Free 2nd service · till ${fmtH(offer.endHour)}`
              : 'Free 2nd service · Mon–Thu 12–5'}
          </span>
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
        aria-label="Call Moon Studios about the Happy Hour offer"
        onClick={() => trackOfferCall('offer_bar')}
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
