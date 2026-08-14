/* ══════════════ Limited-time festive offers ══════════════

   Separate from OFFERS in lib/offers.ts on purpose. Those are *recurring*
   (weekday + hour window) and pair two services. A festive offer is a
   *one-time* flat discount that lives between two absolute instants and then
   has to disappear on its own — nobody should need to ship a commit to take it
   down.

   Deadlines are written as ISO strings with an explicit +05:30 offset, so the
   cut-off is the same wall-clock moment in Mumbai no matter where the visitor's
   device clock is set. Comparing epoch millis keeps that timezone-safe.        */

export type FestiveDeal = {
  /** Big number, e.g. "25%". */
  value: string;
  /** What the discount applies to, e.g. "on all hair services". */
  scope: string;
};

export type FestiveOffer = {
  id: string;
  /** Name used in pills, aria labels and call scripts. */
  name: string;
  /** Tighter name for the sticky bar, which has ~24 characters before it clips. */
  shortName: string;
  /** Full headline for the detail card. */
  title: string;
  tagline: string;
  /** Human window label, e.g. "Till 15 August". */
  windowLabel: string;
  /** ISO 8601 with offset — inclusive start. */
  startsAt: string;
  /** ISO 8601 with offset — the instant the offer stops showing. */
  endsAt: string;
  deals: FestiveDeal[];
  /** Qualifying condition shown under the deals, e.g. "Minimum billing above ₹1000". */
  condition: string;
  terms: string[];
};

export const FESTIVE_OFFERS: FestiveOffer[] = [
  {
    id: 'independence-day-2026',
    name: 'Independence Day Special',
    shortName: 'Independence Day',
    title: 'Independence Day Special',
    tagline: 'Flat off across hair and beauty — for a few days only.',
    windowLabel: 'Till 15 August',
    startsAt: '2026-08-08T00:00:00+05:30',
    endsAt: '2026-08-15T23:59:59.999+05:30',
    deals: [
      { value: '25%', scope: 'on all hair services' },
      { value: '50%', scope: 'on all beauty services' },
    ],
    condition: 'On a minimum billing above ₹1000',
    terms: [
      'Valid till 15 August only.',
      'Applies on a minimum billing above ₹1000.',
      'By prior appointment — call ahead so we can block your slot.',
      'Not combinable with Happy Hour or other running offers.',
    ],
  },
];

export type FestiveStatus = {
  offer: FestiveOffer;
  /** Milliseconds until the offer disappears. Always > 0 while returned. */
  msLeft: number;
  /** "Ends in 2 days" / "Ends in 6h 14m" / "Ends in 42m 09s" — urgency scales down. */
  countdown: string;
  /** True inside the last 24 hours — surfaces switch to the louder treatment. */
  finalDay: boolean;
};

const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

/** Zero-padded so a ticking countdown never changes width mid-second. */
const pad = (n: number) => String(n).padStart(2, '0');

const countdownFor = (ms: number): string => {
  if (ms >= 2 * DAY) return `Ends in ${Math.ceil(ms / DAY)} days`;
  if (ms >= DAY) return 'Ends tomorrow';
  if (ms >= HOUR) return `Ends in ${Math.floor(ms / HOUR)}h ${pad(Math.floor((ms % HOUR) / MIN))}m`;
  if (ms >= MIN) return `Ends in ${Math.floor(ms / MIN)}m ${pad(Math.floor((ms % MIN) / 1000))}s`;
  return 'Ending in seconds';
};

/**
 * The festive offer that is live at `now`, or null. Pure, so it can be called
 * on a timer and tested by passing an explicit date.
 *
 * Returns the *soonest-ending* live offer so that if two ever overlap, the one
 * about to expire gets the airtime.
 */
export const activeFestiveOffer = (now: Date = new Date()): FestiveStatus | null => {
  const t = now.getTime();

  const live = FESTIVE_OFFERS.map((offer) => ({
    offer,
    msLeft: new Date(offer.endsAt).getTime() - t,
    startsIn: new Date(offer.startsAt).getTime() - t,
  }))
    .filter((c) => c.startsIn <= 0 && c.msLeft > 0)
    .sort((a, b) => a.msLeft - b.msLeft)[0];

  if (!live) return null;

  return {
    offer: live.offer,
    msLeft: live.msLeft,
    countdown: countdownFor(live.msLeft),
    finalDay: live.msLeft < DAY,
  };
};

/** "25% off hair services · 50% off beauty services" — for strips, which wrap. */
export const festiveSummary = (offer: FestiveOffer) =>
  offer.deals.map((d) => `${d.value} off ${d.scope.replace(/^on all /, '')}`).join(' · ');

/**
 * "up to 50% off" — for the sticky bar, a single non-wrapping line with roughly
 * 200px to work with on a 360px phone. Both discounts plus a countdown do not
 * fit there, and listing "25% + 50%" reads as if they stack. The bar is a
 * teaser: the full split sits in the banner directly below it and on /offers.
 */
export const festiveSummaryShort = (offer: FestiveOffer) => {
  const top = Math.max(...offer.deals.map((d) => parseFloat(d.value)));
  return `up to ${top}% off`;
};

export const festiveWa = (offer: FestiveOffer) =>
  `https://wa.me/919004832184?text=${encodeURIComponent(
    `Hi Moon Studios! I'd like to book using the ${offer.name} (${festiveSummary(offer)}). Which slots are open before it ends?`,
  )}`;
