// Modular Analytics Integrations

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-MOCKID1234"; // Replace with actual Google Analytics ID
const CLARITY_PROJECT_ID = "mockclarityid"; // Replace with actual Clarity project ID

/**
 * Initializes Google Analytics 4
 */
export const initGA = (): void => {
  if (typeof window === "undefined" || window.gtag) return;

  // Create script element for GA4
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // Page views are tracked manually via React Router
  });

  console.log("GA4 Initialized");
};

/**
 * Initializes Microsoft Clarity
 */
export const initClarity = (): void => {
  if (typeof window === "undefined" || window.clarity) return;

  (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
    c[a] = c[a] || function () {
      // eslint-disable-next-line prefer-rest-params
      (c[a].q = c[a].q || []).push(arguments);
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);

  console.log("Microsoft Clarity Initialized");
};

/**
 * Tracks a page view event
 */
export const trackPageView = (url: string): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
};

/**
 * Tracks a custom event
 */
export const trackCustomEvent = (action: string, category: string, label: string, value?: number): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
