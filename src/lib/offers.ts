import pedicureImg from '@/assets/services/pedicure.png';
import manicureImg from '@/assets/services/manicure.png';
import hairColourImg from '@/assets/services/haircolour.png';
import rootTouchUpImg from '@/assets/service-coloring.jpg';
import facialImg from '@/assets/services/o3_facial.png';
import massageImg from '@/assets/services/massage.png';
import hairSpaImg from '@/assets/services/hair_spa.png';
import haircutImg from '@/assets/services/Advance_Haircut.png';

export const OFFER_TEL = '+919004832184';

export type OfferPair = {
  /** The service the guest pays for. */
  pay: string;
  payImg: string;
  /** The service they get free. */
  get: string;
  getImg: string;
  /** Optional qualifier under the free service, e.g. "30 minutes". */
  sub?: string;
};

export type Offer = {
  id: string;
  name: string;
  tagline: string;
  /** Weekday numbers as returned by Date#getDay (0 = Sunday). */
  days: number[];
  dayLabel: string;
  startHour: number;
  endHour: number;
  pairs: OfferPair[];
  terms: string[];
};

export type OfferStatus = {
  live: boolean;
  /** "Live right now" / "Monday, 12 PM" — tightest form. */
  short: string;
  /** "Live right now — 2 hr 15 min left today" — offer page. */
  long: string;
  /** "Next: Monday, 12 PM" — bar and card. */
  next: string;
};

/* Every offer surface maps over this array, so a second offer needs data only —
   no new components. */
export const OFFERS: Offer[] = [
  {
    id: 'happy-hour',
    name: 'Happy Hour',
    tagline: 'Pay for one. The second is on us.',
    days: [1, 2, 3, 4],
    dayLabel: 'Monday – Thursday',
    startHour: 12,
    endHour: 17,
    pairs: [
      { pay: 'Pedicure', payImg: pedicureImg, get: 'Manicure', getImg: manicureImg },
      { pay: 'Global Hair Colour', payImg: hairColourImg, get: '1 Root Touch-up', getImg: rootTouchUpImg },
      { pay: 'Facial', payImg: facialImg, get: 'Full Back Detox Massage', sub: '30 minutes', getImg: massageImg },
      { pay: 'Hair Spa', payImg: hairSpaImg, get: 'Hair Cut', getImg: haircutImg },
    ],
    terms: [
      'Valid Monday to Thursday, 12 PM – 5 PM only.',
      'By prior appointment — call ahead so we can block your slot.',
      'The free service is taken in the same visit.',
      'Not combinable with other running offers.',
    ],
  },
];

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** 12 → "12 PM", 17 → "5 PM" */
export const fmtH = (h: number) => `${h % 12 === 0 ? 12 : h % 12} ${h < 12 ? 'AM' : 'PM'}`;

/** Where "now" sits relative to the offer window. Pure — call it on a timer. */
export const offerStatus = (o: Offer, now: Date = new Date()): OfferStatus => {
  const d = now.getDay();
  const h = now.getHours();
  const m = now.getMinutes();

  if (o.days.includes(d) && h >= o.startHour && h < o.endHour) {
    const mins = o.endHour * 60 - (h * 60 + m);
    const left = (
      mins >= 60
        ? `${Math.floor(mins / 60)} hr ${mins % 60 ? `${mins % 60} min` : ''}`
        : `${mins} min`
    ).trim();
    return {
      live: true,
      short: 'Live right now',
      long: `Live right now — ${left} left today`,
      next: `Live now · ${left} left`,
    };
  }

  if (o.days.includes(d) && h < o.startHour) {
    return {
      live: false,
      short: `Today, ${fmtH(o.startHour)}`,
      long: `Starts today at ${fmtH(o.startHour)}`,
      next: `Today, ${fmtH(o.startHour)}`,
    };
  }

  let n = d;
  for (let i = 1; i <= 7; i++) {
    const c = (d + i) % 7;
    if (o.days.includes(c)) {
      n = c;
      break;
    }
  }
  const label = (n - d + 7) % 7 === 1 ? 'Tomorrow' : DAY_NAMES[n];
  return {
    live: false,
    short: `${label}, ${fmtH(o.startHour)}`,
    long: `Next ${o.name}: ${label} at ${fmtH(o.startHour)}`,
    next: `Next: ${label}, ${fmtH(o.startHour)}`,
  };
};

export const offerWa = (o: Offer) =>
  `https://wa.me/919004832184?text=${encodeURIComponent(
    `Hi Moon Studios! I'd like to book the ${o.name} offer (${o.dayLabel}, ${fmtH(o.startHour)}–${fmtH(o.endHour)}). Which slots are open?`,
  )}`;
