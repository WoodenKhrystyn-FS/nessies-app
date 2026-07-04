import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your GA4 Measurement ID
};

export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
