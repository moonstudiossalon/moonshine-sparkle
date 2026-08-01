import { toast } from 'sonner';
import { trackEvent } from '@/lib/analytics';
import { OFFER_TEL } from '@/lib/offers';

export type OfferSection = 'offer_bar' | 'offer_banner' | 'offer_strip' | 'offer_page';

/**
 * Fires before the browser follows the `tel:` href — the anchor is never
 * intercepted, so the call still places itself natively.
 */
export const trackOfferCall = (section: OfferSection) => {
  trackEvent('phone_call_click', {
    section_name: section,
    contact_method: 'phone',
    cta_label: 'Happy Hour Call',
    destination_url: `tel:${OFFER_TEL}`,
  });
  toast('Mention "Happy Hour" when you call');
};

export const trackOfferNav = (section: Exclude<OfferSection, 'offer_page'>) => {
  trackEvent('nav_click', {
    section_name: section,
    nav_label: 'Happy Hour',
    destination: '/offers',
  });
};

export const trackOfferWhatsApp = () => {
  trackEvent('booking_start', {
    section_name: 'offer_page',
    booking_method: 'whatsapp',
    booking_type: 'offer',
    cta_label: 'Happy Hour WhatsApp',
  });
};
