import { useEffect } from 'react';
import { SCROLL_MARKS } from '../analytics/config';
import { bindAnalyticsDelegation } from '../analytics/delegation';
import { trackScrollDepth, trackSectionView } from '../analytics/events';

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
}
