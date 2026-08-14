import { useEffect, useState } from 'react';
import { activeFestiveOffer, type FestiveStatus } from '@/lib/festive';

/** Inside the last hour the countdown shows seconds, so it has to tick per second. */
const LAST_HOUR = 3_600_000;

/**
 * The live festive offer, or null once it has expired — every festive surface
 * hangs off this, so the offer vanishes site-wide the moment it lapses, with no
 * deploy and no reload.
 *
 * Two details worth keeping:
 *
 * 1. The value is recomputed once on mount, not just in the lazy initialiser.
 *    That covers a page restored from the bfcache or served by the service
 *    worker (see public/sw.js), where the mounted tree can be older than the
 *    deadline.
 * 2. The tick rate follows urgency — once per second inside the last hour, once
 *    every 30s before that. A page left open overnight therefore crosses the
 *    deadline and hides itself without a reload.
 */
export const useFestiveOffer = (): FestiveStatus | null => {
  const [status, setStatus] = useState<FestiveStatus | null>(() => activeFestiveOffer());

  const urgent = !!status && status.msLeft < LAST_HOUR;

  useEffect(() => {
    setStatus(activeFestiveOffer());
    const id = setInterval(() => setStatus(activeFestiveOffer()), urgent ? 1000 : 30_000);
    return () => clearInterval(id);
  }, [urgent]);

  return status;
};
