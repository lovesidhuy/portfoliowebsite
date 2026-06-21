export const MEASUREMENT_ID = 'G-N5FJTNS3SC';

export const SITE_VERSION = import.meta.env.VITE_SITE_VERSION || 'dev';

export const SITE_TYPE = 'main_portfolio';

export const ANALYTICS_ENABLED =
  import.meta.env.PROD && import.meta.env.VITE_DISABLE_ANALYTICS !== 'true';

export const SCROLL_MARKS = [25, 50, 75, 100];

export const DEDUPE_PREFIX = 'portfolio_analytics_';
