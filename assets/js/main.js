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
      const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
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

  // Publication filters
  const publicationList = document.querySelector('[data-pub-list]');
  const filterButtons = document.querySelectorAll('.filter-button[data-filter]');
  if (publicationList && filterButtons.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const filter = button.getAttribute('data-filter') || 'all';
        filterButtons.forEach(function (item) {
          item.classList.toggle('is-active', item === button);
        });
        publicationList.querySelectorAll('.pub-item, .publication-item').forEach(function (item) {
          const tags = (item.getAttribute('data-tags') || '').split(/\s+/);
          item.hidden = filter !== 'all' && tags.indexOf(filter) === -1;
        });
      });
    });
  }

  // Logo variant switcher. Works on localhost and GitHub Pages:
  // ?logo=a, ?logo=b, ?logo=c
  const logoMap = {
    a: 'assets/logo/breathe_infinity_mark_realistic.svg',
    b: 'assets/logo/breathe_infinity_mark_realistic.svg',
    c: 'assets/logo/breathe_infinity_mark_realistic.svg'
  };
  const params = new URLSearchParams(window.location.search);
  const requestedLogo = (params.get('logo') || '').toLowerCase();
  const logoVariant = Object.prototype.hasOwnProperty.call(logoMap, requestedLogo) ? requestedLogo : '';
  if (logoVariant) document.documentElement.setAttribute('data-logo-variant', logoVariant);

  document.querySelectorAll('[data-logo-role="mark"], [data-logo-role="footer-mark"]').forEach(function (node) {
    const src = node.getAttribute('data-logo-' + logoVariant) || logoMap[logoVariant] || node.getAttribute('data-logo-default');
    if (src) node.setAttribute('src', src);
  });

  const favicon = document.querySelector('[data-logo-role="favicon"]');
  if (favicon && logoVariant) favicon.setAttribute('href', logoMap[logoVariant]);

  if (logoVariant) {
    document.querySelectorAll('a[href]').forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;
      if (!/\.html($|[?#])/.test(href) && href !== './' && href !== '/') return;
      const url = new URL(href, window.location.href);
      if (url.searchParams.has('logo')) return;
      url.searchParams.set('logo', logoVariant);
      link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    });
  }

})();
