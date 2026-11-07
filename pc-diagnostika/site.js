/* Кнопки скачивания и Boosty, цели Метрики, тема. */
(function () {
  var cfg = window.PCD;
  if (!cfg) return;

  function goal(name, params) {
    try {
      if (window.ym) {
        if (params) window.ym(cfg.METRIKA_ID, 'reachGoal', name, params);
        else window.ym(cfg.METRIKA_ID, 'reachGoal', name);
      }
    } catch (e) {}
  }

  function boostyUrl(plan) {
    var map = cfg.PLAN_URLS || {};
    var custom = map[plan];
    if (typeof custom === 'string' && /^https?:\/\//i.test(custom)) return custom;
    return cfg.BOOSTY_URL;
  }

  document.querySelectorAll('[data-download]').forEach(function (a) {
    a.href = cfg.DOWNLOAD_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  document.querySelectorAll('[data-boosty]').forEach(function (a) {
    var plan = a.getAttribute('data-plan') || 'contact';
    a.href = boostyUrl(plan);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  document.querySelectorAll('[data-promo]').forEach(function (a) {
    a.href = cfg.BOOSTY_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  document.addEventListener('click', function (e) {
    var node = e.target && e.target.closest ? e.target : null;
    if (!node) return;
    if (node.closest('[data-download]')) {
      goal('pcd_download');
      return;
    }
    if (node.closest('[data-promo]')) {
      goal('pcd_promo_info');
      return;
    }
    var buy = node.closest('[data-boosty]');
    if (buy) goal('pcd_buy_click', { plan: buy.getAttribute('data-plan') || 'contact' });
  });

  var themeBtn = document.getElementById('theme');
  function syncThemeButton() {
    if (!themeBtn) return;
    var dark = document.documentElement.dataset.theme === 'dark';
    themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('pcd.theme', next); } catch (err) {}
      syncThemeButton();
    });
  }
  syncThemeButton();

  document.querySelectorAll('.nav-drop-panel a').forEach(function (a) {
    a.addEventListener('click', function () {
      var menu = a.closest('details');
      if (menu) menu.open = false;
    });
  });
})();
