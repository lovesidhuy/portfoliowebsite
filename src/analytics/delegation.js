import { trackNavClick, trackOutboundClick, trackResumeDownload } from './events';

function resolveTarget(event) {
  return event.target.closest('[data-analytics]');
}

export function handleAnalyticsClick(event) {
  const element = resolveTarget(event);
  if (!element) return;

  const type = element.dataset.analytics;
  const label = element.dataset.analyticsLabel || '';
  const location = element.dataset.analyticsLocation || 'unknown';
  const href = element.getAttribute('href') || '';

  switch (type) {
    case 'resume':
      trackResumeDownload(href, location);
      break;
    case 'outbound':
      trackOutboundClick(label, href);
      break;
    case 'nav':
      trackNavClick(label);
      break;
    default:
      break;
  }
}

export function bindAnalyticsDelegation(root = document) {
  root.addEventListener('click', handleAnalyticsClick);
  return () => root.removeEventListener('click', handleAnalyticsClick);
}
