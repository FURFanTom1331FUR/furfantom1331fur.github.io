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
    '1m': null,
    '3m': null,
    '1y': null,
    steps: null,
    contact: null
  },
  METRIKA_ID: 113981254
};
