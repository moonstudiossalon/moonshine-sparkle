import { useEffect, useState } from 'react';
import { offerStatus, type Offer, type OfferStatus } from '@/lib/offers';

/**
 * Live/next-occurrence status for an offer, re-checked every 30s so a page left
 * open crosses from "next" to "live" without a refresh.
 *
 * The first value is also recomputed once on mount: react-snap pre-renders the
 * HTML, so the baked-in status would otherwise be stale on hydration.
 */
export const useOfferStatus = (offer: Offer): OfferStatus => {
  const [status, setStatus] = useState<OfferStatus>(() => offerStatus(offer));

  useEffect(() => {
    setStatus(offerStatus(offer));
    const id = setInterval(() => setStatus(offerStatus(offer)), 30000);
    return () => clearInterval(id);
  }, [offer]);

  return status;
};
