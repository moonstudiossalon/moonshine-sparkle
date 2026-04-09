import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  getAnalyticsPageTitle,
  initializeTrafficSourceTracking,
  trackEvent,
  trackPageView,
} from "@/lib/analytics";

const toSnakeCase = (value: string) =>
  value
    .replace(/^[A-Z]/, (match) => match.toLowerCase())
    .replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);

const extractDatasetParams = (element: HTMLElement) => {
  const params: Record<string, string> = {};

  for (const [key, value] of Object.entries(element.dataset)) {
    if (!key.startsWith("analytics") || key === "analyticsEvent") continue;
    const normalizedKey = toSnakeCase(key.replace(/^analytics/, ""));
    if (normalizedKey) {
      params[normalizedKey] = value;
    }
  }

  return params;
};

const getClosestSection = (element: HTMLElement | null) => {
  const section = element?.closest<HTMLElement>("[data-analytics-section]");
  return section?.dataset.analyticsSection;
};

const isExternalUrl = (href: string) => {
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
};

const AnalyticsTracker = () => {
  const location = useLocation();
  const previousPageRef = useRef<string>("");
  const observedSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    initializeTrafficSourceTracking();
  }, []);

  useEffect(() => {
    const currentUrl = `${window.location.origin}${location.pathname}${location.search}`;
    const pageTitle = getAnalyticsPageTitle(location.pathname);
    const pageReferrer = previousPageRef.current || document.referrer || undefined;

    trackPageView({
      page_location: currentUrl,
      page_path: `${location.pathname}${location.search}`,
      page_title: pageTitle,
      page_referrer: pageReferrer,
    });

    previousPageRef.current = currentUrl;
    observedSectionsRef.current.clear();
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const trackedElement = target.closest<HTMLElement>("[data-analytics-event], a[href]");
      if (!trackedElement) return;

      const explicitEvent = trackedElement.dataset.analyticsEvent;
      const closestSection = getClosestSection(trackedElement);

      if (explicitEvent) {
        trackEvent(explicitEvent, {
          ...extractDatasetParams(trackedElement),
          section_name: closestSection,
          link_text: trackedElement.textContent?.trim(),
        });
        return;
      }

      if (trackedElement.tagName !== "A") return;

      const href = trackedElement.getAttribute("href");
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackEvent("phone_call_click", {
          contact_method: "phone",
          destination_url: href,
          section_name: closestSection,
          link_text: trackedElement.textContent?.trim(),
        });
        return;
      }

      if (href.startsWith("https://wa.me/")) {
        trackEvent("booking_start", {
          booking_method: "whatsapp",
          destination_url: href,
          section_name: closestSection,
          link_text: trackedElement.textContent?.trim(),
        });
        return;
      }

      if (!isExternalUrl(href)) return;

      const url = new URL(href, window.location.href);
      trackEvent("outbound_click", {
        destination_url: url.href,
        outbound_domain: url.hostname,
        section_name: closestSection,
        link_text: trackedElement.textContent?.trim(),
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-analytics-section-view='true']")
    );

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const section = entry.target as HTMLElement;
          const sectionName = section.dataset.analyticsSection;
          if (!sectionName || observedSectionsRef.current.has(sectionName)) continue;

          observedSectionsRef.current.add(sectionName);
          trackEvent("section_view", {
            section_name: sectionName,
            section_label: section.dataset.analyticsLabel,
          });
        }
      },
      { threshold: 0.45 }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
