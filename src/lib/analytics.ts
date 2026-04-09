const GA_MEASUREMENT_ID = "G-YHS0ML3TRK";
const TRAFFIC_SOURCE_STORAGE_KEY = "moonstudios.ga4.traffic_source";
const TRAFFIC_SOURCE_EVENT_KEY = "moonstudios.ga4.traffic_source_tracked";

type GtagValue = string | number | boolean | undefined | null;

export type AnalyticsParams = Record<string, GtagValue>;

type TrafficSource = {
  source_platform: string;
  source_channel: string;
  source_medium: string;
  source_type: string;
  source_detail: string;
  referrer_host: string;
  landing_page: string;
  landing_path: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  click_id?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const AI_REFERRERS = [
  "chatgpt.com",
  "chat.openai.com",
  "gemini.google.com",
  "perplexity.ai",
  "claude.ai",
  "copilot.microsoft.com",
  "poe.com",
  "you.com",
];

const SOCIAL_REFERRERS: Record<string, string> = {
  "instagram.com": "instagram",
  "l.instagram.com": "instagram",
  "facebook.com": "facebook",
  "m.facebook.com": "facebook",
  "lm.facebook.com": "facebook",
  "youtube.com": "youtube",
  "m.youtube.com": "youtube",
  "youtu.be": "youtube",
  "linkedin.com": "linkedin",
  "x.com": "x",
  "twitter.com": "x",
};

const SEARCH_REFERRERS: Record<string, string> = {
  "google.com": "google",
  "bing.com": "bing",
  "search.yahoo.com": "yahoo",
  "duckduckgo.com": "duckduckgo",
};

const CLICK_ID_PARAM_PRIORITY = ["gclid", "fbclid", "msclkid"] as const;

const isBrowser = typeof window !== "undefined";

const normalizeHost = (value: string) => value.replace(/^www\./, "").toLowerCase();

const findMatchedHost = (host: string, candidates: string[]) =>
  candidates.find((candidate) => host === candidate || host.endsWith(`.${candidate}`));

const getStoredTrafficSource = (): TrafficSource | null => {
  if (!isBrowser) return null;

  const stored = window.sessionStorage.getItem(TRAFFIC_SOURCE_STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as TrafficSource;
  } catch {
    return null;
  }
};

const storeTrafficSource = (trafficSource: TrafficSource) => {
  if (!isBrowser) return;
  window.sessionStorage.setItem(TRAFFIC_SOURCE_STORAGE_KEY, JSON.stringify(trafficSource));
};

const getClickId = (searchParams: URLSearchParams) => {
  const matchedKey = CLICK_ID_PARAM_PRIORITY.find((key) => searchParams.get(key));
  return matchedKey ? searchParams.get(matchedKey) ?? undefined : undefined;
};

const inferSourceFromReferrer = (referrerHost: string) => {
  const aiMatch = findMatchedHost(referrerHost, AI_REFERRERS);
  if (aiMatch) {
    return {
      source_platform: aiMatch.split(".")[0],
      source_channel: "ai",
      source_medium: "referral",
      source_type: "ai_referral",
      source_detail: aiMatch,
    };
  }

  for (const [domain, platform] of Object.entries(SOCIAL_REFERRERS)) {
    if (referrerHost === domain || referrerHost.endsWith(`.${domain}`)) {
      return {
        source_platform: platform,
        source_channel: "social",
        source_medium: "referral",
        source_type: "social_referral",
        source_detail: domain,
      };
    }
  }

  for (const [domain, platform] of Object.entries(SEARCH_REFERRERS)) {
    if (referrerHost === domain || referrerHost.endsWith(`.${domain}`)) {
      return {
        source_platform: platform,
        source_channel: "search",
        source_medium: "organic",
        source_type: "search_referral",
        source_detail: domain,
      };
    }
  }

  return {
    source_platform: referrerHost || "direct",
    source_channel: referrerHost ? "referral" : "direct",
    source_medium: referrerHost ? "referral" : "(none)",
    source_type: referrerHost ? "website_referral" : "direct",
    source_detail: referrerHost || "direct",
  };
};

export const detectTrafficSource = (): TrafficSource => {
  const currentUrl = new URL(window.location.href);
  const referrerHost = document.referrer ? normalizeHost(new URL(document.referrer).hostname) : "";
  const searchParams = currentUrl.searchParams;
  const utmSource = searchParams.get("utm_source") ?? undefined;
  const utmMedium = searchParams.get("utm_medium") ?? undefined;
  const utmCampaign = searchParams.get("utm_campaign") ?? undefined;
  const utmContent = searchParams.get("utm_content") ?? undefined;
  const utmTerm = searchParams.get("utm_term") ?? undefined;
  const clickId = getClickId(searchParams);

  if (utmSource || utmMedium) {
    const normalizedSource = normalizeHost(utmSource ?? "campaign");
    const medium = (utmMedium ?? "campaign").toLowerCase();
    const sourceMatch =
      findMatchedHost(normalizedSource, AI_REFERRERS) ??
      Object.keys(SOCIAL_REFERRERS).find((domain) => normalizedSource === domain || normalizedSource.endsWith(`.${domain}`)) ??
      Object.keys(SEARCH_REFERRERS).find((domain) => normalizedSource === domain || normalizedSource.endsWith(`.${domain}`));

    let sourceChannel = "campaign";
    let sourceType = "campaign";

    if (sourceMatch && AI_REFERRERS.includes(sourceMatch)) {
      sourceChannel = "ai";
      sourceType = "ai_campaign";
    } else if (medium.includes("social") || sourceMatch && sourceMatch in SOCIAL_REFERRERS) {
      sourceChannel = "social";
      sourceType = medium.includes("paid") ? "paid_social" : "social_campaign";
    } else if (medium.includes("search") || sourceMatch && sourceMatch in SEARCH_REFERRERS) {
      sourceChannel = "search";
      sourceType = medium.includes("paid") || clickId ? "paid_search" : "search_campaign";
    } else if (medium.includes("email")) {
      sourceChannel = "email";
      sourceType = "email_campaign";
    }

    return {
      source_platform: normalizedSource,
      source_channel: sourceChannel,
      source_medium: medium,
      source_type: sourceType,
      source_detail: normalizedSource,
      referrer_host: referrerHost,
      landing_page: currentUrl.href,
      landing_path: `${currentUrl.pathname}${currentUrl.search}`,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      utm_term: utmTerm,
      click_id: clickId,
    };
  }

  if (clickId) {
    return {
      source_platform: clickId === searchParams.get("fbclid") ? "facebook" : "google",
      source_channel: clickId === searchParams.get("fbclid") ? "social" : "search",
      source_medium: "paid",
      source_type: clickId === searchParams.get("fbclid") ? "paid_social" : "paid_search",
      source_detail: clickId,
      referrer_host: referrerHost,
      landing_page: currentUrl.href,
      landing_path: `${currentUrl.pathname}${currentUrl.search}`,
      click_id: clickId,
    };
  }

  return {
    ...inferSourceFromReferrer(referrerHost),
    referrer_host: referrerHost,
    landing_page: currentUrl.href,
    landing_path: `${currentUrl.pathname}${currentUrl.search}`,
  };
};

export const getTrafficSource = () => {
  if (!isBrowser) return null;

  const stored = getStoredTrafficSource();
  if (stored) return stored;

  const detected = detectTrafficSource();
  storeTrafficSource(detected);
  return detected;
};

const sanitizeParams = (params: AnalyticsParams = {}) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );

const getDefaultEventContext = (): AnalyticsParams => {
  const trafficSource = getTrafficSource();
  return sanitizeParams({
    page_path: window.location.pathname,
    page_title: document.title,
    ...trafficSource,
  });
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (!isBrowser || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, sanitizeParams({
    ...getDefaultEventContext(),
    ...params,
    debug_mode: import.meta.env.DEV || undefined,
  }));
};

export const initializeTrafficSourceTracking = () => {
  if (!isBrowser) return;

  const trafficSource = getTrafficSource();
  if (!trafficSource) return;

  if (!window.sessionStorage.getItem(TRAFFIC_SOURCE_EVENT_KEY)) {
    trackEvent("session_source_detected", trafficSource);
    window.sessionStorage.setItem(TRAFFIC_SOURCE_EVENT_KEY, "true");
  }
};

export const trackPageView = (params: {
  page_location: string;
  page_path: string;
  page_title: string;
  page_referrer?: string;
}) => {
  if (!isBrowser || typeof window.gtag !== "function") return;

  const trafficSource = getTrafficSource();

  window.gtag("event", "page_view", sanitizeParams({
    ...params,
    ...trafficSource,
    debug_mode: import.meta.env.DEV || undefined,
  }));
};

export const getAnalyticsPageTitle = (pathname: string) => {
  const titles: Record<string, string> = {
    "/": "Moon Studios | Home",
    "/services": "Moon Studios | Services",
    "/nanoplastia-andheri-east": "Nanoplastia Hair Treatment in Andheri East | Moon Studios",
    "/balayage-salon-andheri": "Balayage Salon in Andheri East | Moon Studios",
    "/family-salon-marol-mumbai": "Family Salon in Marol Mumbai | Moon Studios",
  };

  return titles[pathname] ?? document.title;
};

export const getMeasurementId = () => GA_MEASUREMENT_ID;
