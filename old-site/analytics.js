(function () {
  var DEDUPE_PREFIX = 'portfolio_analytics_';
  var SCROLL_MARKS = [25, 50, 75, 100];
  var config = window.PORTFOLIO_ANALYTICS || { site_version: 'unknown' };

  var isProd =
    window.location.hostname === 'lovesidhuy.github.io' ||
    (window.location.hostname.endsWith('.github.io') &&
      !window.location.hostname.includes('localhost'));

  var SITE = {
    site_type: 'legacy_portfolio',
    site_version: config.site_version
  };

  function shouldTrackOnce(key) {
    try {
      var storageKey = DEDUPE_PREFIX + key;
      if (window.sessionStorage.getItem(storageKey)) return false;
      window.sessionStorage.setItem(storageKey, '1');
      return true;
    } catch (error) {
      return true;
    }
  }

  function track(name, params, onceKey) {
    if (!isProd || typeof gtag !== 'function') return;
    if (onceKey && !shouldTrackOnce(onceKey)) return;
    gtag('event', name, Object.assign({}, SITE, params || {}));
  }

  function trackResume(location, url) {
    track('resume_download', {
      link_url: url,
      content_type: 'application/pdf',
      cta_location: location
    });
  }

  function trackOutbound(linkType, url) {
    track('outbound_click', {
      link_type: linkType,
      link_url: url
    });
  }

  function trackNav(section) {
    track('nav_click', { section: section });
  }

  function trackScrollDepth(percent) {
    track('scroll_depth', { percent_scrolled: percent }, 'scroll_' + percent);
  }

  function trackSection(name) {
    track('section_view', { section_name: name }, 'section_' + name);
  }

  function handleClick(event) {
    var element = event.target.closest('[data-analytics]');
    if (!element) return;

    var type = element.getAttribute('data-analytics');
    var label = element.getAttribute('data-analytics-label') || '';
    var location = element.getAttribute('data-analytics-location') || 'unknown';
    var href = element.getAttribute('href') || '';

    if (type === 'resume') trackResume(location, href);
    if (type === 'outbound') trackOutbound(label, href);
    if (type === 'nav') trackNav(label);
  }

  document.addEventListener('click', handleClick);

  document.addEventListener('DOMContentLoaded', function () {
    var scrollMarks = {};
    var ticking = false;

    window.addEventListener(
      'scroll',
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
          var docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            var percent = Math.round((window.scrollY / docHeight) * 100);
            SCROLL_MARKS.forEach(function (mark) {
              if (percent >= mark && !scrollMarks[mark]) {
                scrollMarks[mark] = true;
                trackScrollDepth(mark);
              }
            });
          }
          ticking = false;
        });
      },
      { passive: true }
    );

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || entry.intersectionRatio < 0.4) return;
            var name = entry.target.getAttribute('data-analytics-section');
            if (name) trackSection(name);
          });
        },
        { threshold: [0.4] }
      );

      document.querySelectorAll('[data-analytics-section]').forEach(function (section) {
        observer.observe(section);
      });
    }
  });
})();
