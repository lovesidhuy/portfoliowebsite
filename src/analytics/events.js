import { trackEvent } from './track';

export function trackResumeDownload(url, location = 'unknown') {
  trackEvent('resume_download', {
    link_url: url,
    content_type: 'application/pdf',
    cta_location: location,
  });
}

export function trackOutboundClick(linkType, url) {
  trackEvent('outbound_click', {
    link_type: linkType,
    link_url: url,
  });
}

export function trackNavClick(sectionName) {
  trackEvent('nav_click', {
    section_name: sectionName,
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

export function trackFormSubmit(formName = 'resume_request') {
  trackEvent('form_submit', {
    form_name: formName,
  });
}

export function trackFormSuccess(formName = 'resume_request') {
  trackEvent('form_success', {
    form_name: formName,
  });
}

export function trackEngagementTime(seconds) {
  trackEvent('engagement_time', {
    engagement_seconds: seconds,
  });
}

export function trackError(errorType, errorMessage) {
  trackEvent('error_occurred', {
    error_type: errorType,
    error_message: errorMessage,
  });
}

export function trackPageView(pagePath, pageTitle) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

export function trackCopyEmail() {
  trackEvent('copy_email', {}, { once: 'copy_email' });
}

export function trackCertView(certIndex) {
  trackEvent('cert_view', {
    cert_index: certIndex,
  });
}