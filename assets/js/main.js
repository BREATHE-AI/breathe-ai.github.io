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
})();
