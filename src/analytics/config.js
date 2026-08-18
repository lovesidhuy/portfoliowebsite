export const MEASUREMENT_ID = 'G-N5FJTNS3SC';

export const SITE_VERSION = import.meta.env.VITE_SITE_VERSION || 'dev';

export const SITE_TYPE = 'main_portfolio';

export const ANALYTICS_ENABLED =
  import.meta.env.PROD && import.meta.env.VITE_DISABLE_ANALYTICS !== 'true';

export const SCROLL_MARKS = [25, 50, 75, 100];

export const DEDUPE_PREFIX = 'portfolio_analytics_';

export const ENGAGEMENT_TIMEOUT = 30000; // 30s

export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 min

export const TRACKING_OPTIONS = {
  anonymize_ip: true,
  allow_google_signals: false,
  cookie_flags: 'SameSite=None;Secure',
  cookie_expires: 63072000, // 2 years
  linker: {
    domains: ['lovesidhuy.github.io', 'github.com', 'linkedin.com'],
  },
};