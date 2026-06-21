(function () {
  var SITE = { site_version: '2026-06-20', site_type: 'legacy_portfolio' };

  function track(name, params) {
    if (typeof gtag === 'function') {
      gtag('event', name, Object.assign({}, SITE, params || {}));
    }
  }

  function trackResume(location) {
    track('resume_download', {
      link_url: '../ls_resume.pdf',
      link_text: 'resume_download',
      content_type: 'application/pdf',
      cta_location: location
    });
    track('file_download', {
      link_url: '../ls_resume.pdf',
      link_text: 'resume_download',
      content_type: 'application/pdf',
      cta_location: location
    });
  }

  function trackOutbound(label, url) {
    track('outbound_click', {
      link_type: label,
      link_url: url,
      event_category: 'outbound',
      event_label: label
    });
  }

  function trackNav(section) {
    track('nav_click', { section: section, event_category: 'navigation', event_label: section });
  }

  function trackScrollDepth(percent) {
    track('scroll_depth', {
      percent_scrolled: percent,
      event_category: 'engagement',
      event_label: percent + '%'
    });
  }

  function trackSection(name) {
    track('section_view', {
      section_name: name,
      event_category: 'engagement',
      event_label: name
    });
  }

  window.portfolioAnalytics = {
    trackResume: trackResume,
    trackOutbound: trackOutbound,
    trackNav: trackNav
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-track-resume]').forEach(function (el) {
      el.addEventListener('click', function () {
        trackResume(el.getAttribute('data-track-resume') || 'legacy');
      });
    });

    document.querySelectorAll('[data-track-outbound]').forEach(function (el) {
      el.addEventListener('click', function () {
        trackOutbound(el.getAttribute('data-track-outbound'), el.href || '');
      });
    });

    document.querySelectorAll('[data-track-nav]').forEach(function (el) {
      el.addEventListener('click', function () {
        trackNav(el.getAttribute('data-track-nav'));
      });
    });

    var scrollMarks = {};
    window.addEventListener(
      'scroll',
      function () {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        var percent = Math.round((window.scrollY / docHeight) * 100);
        [25, 50, 75, 100].forEach(function (mark) {
          if (percent >= mark && !scrollMarks[mark]) {
            scrollMarks[mark] = true;
            trackScrollDepth(mark);
          }
        });
      },
      { passive: true }
    );

    var seen = {};
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting || entry.intersectionRatio < 0.4) return;
            var name = entry.target.getAttribute('data-analytics-section');
            if (!name || seen[name]) return;
            seen[name] = true;
            trackSection(name);
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
