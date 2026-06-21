import { trackEvent } from './track';

export function trackResumeDownload(url, location = 'unknown') {
  trackEvent('resume_download', {
    link_url: url,
    content_type: 'application/pdf',
    cta_location: location
  });
}

export function trackOutboundClick(linkType, url) {
  trackEvent('outbound_click', {
    link_type: linkType,
    link_url: url
  });
}

export function trackNavClick(sectionName) {
  trackEvent('nav_click', {
    section_name: sectionName
  });
}

export function trackMobileNavOpen() {
  trackEvent('mobile_nav_open', {}, { once: 'mobile_nav_open' });
}

export function trackScrollDepth(percent) {
  trackEvent(
    'scroll_depth',
    { percent_scrolled: percent },
    { once: `scroll_${percent}` }
  );
}

export function trackSectionView(sectionName) {
  trackEvent(
    'section_view',
    { section_name: sectionName },
    { once: `section_${sectionName}` }
  );
}
