/* main.js — shared nav logic, runs on every page */

(function () {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeStorageKey = 'breathe-theme';
  const root = document.documentElement;

  function getStoredTheme() {
    try {
      const value = localStorage.getItem(themeStorageKey);
      return value === 'dark' || value === 'light' ? value : '';
    } catch (error) {
      return '';
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      // Storage can be blocked in private browsing; the current page still updates.
    }
  }

  function setTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) storeTheme(theme);

    if (themeToggle) {
      const isDark = theme === 'dark';
      const label = isDark ? themeToggle.dataset.themeLabelLight : themeToggle.dataset.themeLabelDark;
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.setAttribute('aria-label', label);
      themeToggle.setAttribute('title', label);
    }
  }

  const initialTheme = getStoredTheme() || 'light';
  setTheme(initialTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme, true);
    });
  }

  // News scroll reveal
  const revealItems = Array.prototype.slice.call(document.querySelectorAll('.news-item--reveal'));
  if (revealItems.length) {
    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = (index * 90) + 'ms';
    });

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

      revealItems.forEach(function (item) {
        revealObserver.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add('is-visible');
      });
    }
  }

  // Active nav link by filename
  const file = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav .nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === file || (file === '' && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

})();
