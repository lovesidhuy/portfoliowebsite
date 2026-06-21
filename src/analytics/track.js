import { ANALYTICS_ENABLED, DEDUPE_PREFIX, SITE_TYPE, SITE_VERSION } from './config';

const BASE_CONTEXT = {
  site_type: SITE_TYPE,
  site_version: SITE_VERSION
};

export function shouldTrackOnce(key) {
  if (typeof window === 'undefined' || !window.sessionStorage) return true;

  const storageKey = `${DEDUPE_PREFIX}${key}`;
  if (window.sessionStorage.getItem(storageKey)) return false;

  window.sessionStorage.setItem(storageKey, '1');
  return true;
}

export function trackEvent(name, params = {}, options = {}) {
  if (!ANALYTICS_ENABLED) return;
  if (typeof window.gtag !== 'function') return;

  if (options.once && !shouldTrackOnce(options.once)) return;

  window.gtag('event', name, {
    ...BASE_CONTEXT,
    ...params
  });
}
