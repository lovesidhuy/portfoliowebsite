import { useEffect } from 'react';
import { ENGAGEMENT_TIMEOUT, SCROLL_MARKS } from '../analytics/config';
import { bindAnalyticsDelegation } from '../analytics/delegation';
import {
  trackEngagementTime,
  trackError,
  trackFormSubmit,
  trackScrollDepth,
  trackSectionView,
} from '../analytics/events';

function createScrollHandler() {
  let ticking = false;

  return (scrollMarks) => {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.round((window.scrollY / docHeight) * 100);
        SCROLL_MARKS.forEach((mark) => {
          if (percent >= mark && !scrollMarks.has(mark)) {
            scrollMarks.add(mark);
            trackScrollDepth(mark);
          }
        });
      }
      ticking = false;
    });
  };
}

function trackEngagement() {
  const startTime = Date.now();
  let engaged = false;

  const markEngaged = () => {
    if (!engaged) {
      engaged = true;
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      if (elapsed >= ENGAGEMENT_TIMEOUT / 1000) {
        trackEngagementTime(elapsed);
      }
    }
  };

  const events = ['scroll', 'click', 'keydown', 'mousemove', 'touchstart'];
  events.forEach((event) => window.addEventListener(event, markEngaged, { passive: true, once: true }));

  return () => {
    events.forEach((event) => window.removeEventListener(event, markEngaged));
  };
}

function trackFormSubmissions() {
  const forms = document.querySelectorAll('form');
  const handlers = [];

  forms.forEach((form) => {
    const handler = () => {
      const formName = form.getAttribute('data-analytics-form') || 'resume_request';
      trackFormSubmit(formName);
    };
    form.addEventListener('submit', handler);
    handlers.push({ form, handler });
  });

  return () => {
    handlers.forEach(({ form, handler }) => form.removeEventListener('submit', handler));
  };
}

function trackErrors() {
  const handleError = (event) => {
    trackError('window_error', event.message || 'Unknown error');
  };

  const handleUnhandledRejection = (event) => {
    trackError('unhandled_rejection', event.reason?.message || 'Unknown rejection');
  };

  window.addEventListener('error', handleError);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);

  return () => {
    window.removeEventListener('error', handleError);
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
  };
}

export function useAnalytics() {
  useEffect(() => bindAnalyticsDelegation(), []);

  useEffect(() => {
    const scrollMarks = new Set();
    const onScroll = createScrollHandler();
    const handleScroll = () => onScroll(scrollMarks);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-analytics-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.4) return;

          const name = entry.target.getAttribute('data-analytics-section');
          if (name) trackSectionView(name);
        });
      },
      { threshold: [0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => trackEngagement(), []);

  useEffect(() => trackFormSubmissions(), []);

  useEffect(() => trackErrors(), []);
}