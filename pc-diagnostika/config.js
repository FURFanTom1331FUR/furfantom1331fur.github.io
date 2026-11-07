/* Диагностика ПК — единственное место, где меняются ссылки.
   DOWNLOAD_URL — все кнопки «Скачать».
   BOOSTY_URL — все кнопки Boosty, если для плана не задан свой адрес.
   PLAN_URLS — свой адрес тарифа. null или пустая строка = BOOSTY_URL.
   Ключи планов: "1m", "3m", "1y", "steps", "contact".
   METRIKA_ID — тот же номер, что в счётчике в <head> (113981254). */
var PCD = {
  DOWNLOAD_URL: 'https://github.com/FURFanTom1331FUR/furfantom1331fur.github.io/releases/latest',
  BOOSTY_URL: 'https://boosty.to/13fantom31',
  PLAN_URLS: {
    '1m': 'https://boosty.to/13fantom31/posts/b53260d2-27d4-4e16-a18f-bee5f7d0b236',
    '3m': 'https://boosty.to/13fantom31/posts/2e93b976-3b2d-4f5e-bed9-30a4d12b5433',
    '1y': 'https://boosty.to/13fantom31/posts/10ad45c6-9703-46d5-bc99-0a200fdf54a2',
    steps: null,
    contact: null
  },
  METRIKA_ID: 113981254
};
