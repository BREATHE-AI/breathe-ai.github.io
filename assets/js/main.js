/* main.js — shared nav logic, runs on every page */

(function () {
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
        publicationList.querySelectorAll('.publication-item').forEach(function (item) {
          const tags = (item.getAttribute('data-tags') || '').split(/\s+/);
          item.hidden = filter !== 'all' && tags.indexOf(filter) === -1;
        });
      });
    });
  }

  // Logo variant switcher. Works on localhost and GitHub Pages:
  // ?logo=a, ?logo=b, ?logo=c
  const logoMap = {
    a: 'assets/logo/logo-a.svg',
    b: 'assets/logo/logo-b.svg',
    c: 'assets/logo/logo-c.svg'
  };
  const params = new URLSearchParams(window.location.search);
  const requestedLogo = (params.get('logo') || '').toLowerCase();
  const logoVariant = Object.prototype.hasOwnProperty.call(logoMap, requestedLogo) ? requestedLogo : 'c';
  document.documentElement.setAttribute('data-logo-variant', logoVariant);

  document.querySelectorAll('[data-logo-role="mark"]').forEach(function (node) {
    const src = node.getAttribute('data-logo-' + logoVariant) || logoMap[logoVariant] || node.getAttribute('data-logo-default');
    if (src) node.setAttribute('src', src);
  });

  const favicon = document.querySelector('[data-logo-role="favicon"]');
  if (favicon) favicon.setAttribute('href', logoMap[logoVariant]);

  document.querySelectorAll('a[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http')) return;
    if (!/\.html($|[?#])/.test(href) && href !== './' && href !== '/') return;
    const url = new URL(href, window.location.href);
    if (url.searchParams.has('logo')) return;
    url.searchParams.set('logo', logoVariant);
    link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
  });

})();
