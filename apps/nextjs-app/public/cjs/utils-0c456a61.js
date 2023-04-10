'use strict';

const index = require('./index-e13107cb.js');
const date = require('./date-afe27f67.js');
const locale = require('./locale-85368e13.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
/**
 * CLDR cache.
 * Exported for testing purposes.
 *
 * @private
 */
const translationCache = {};
/**
 * CLDR request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
/**
 * Fetch calendar data for a given locale from list of supported languages
 *
 * @param lang
 * @public
 */
async function getLocaleData(lang) {
  const locale$1 = locale.getSupportedLocale(lang);
  if (translationCache[locale$1]) {
    return translationCache[locale$1];
  }
  if (!requestCache[locale$1]) {
    requestCache[locale$1] = fetch(index.getAssetPath(`./assets/date-picker/nls/${locale$1}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`Translations for "${locale$1}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale$1];
  translationCache[locale$1] = data;
  return data;
}
/**
 *  Maps value to valueAsDate
 *
 * @param value
 */
function getValueAsDateRange(value) {
  return value.map((v, index) => date.dateFromISO(v, index === 1));
}

exports.getLocaleData = getLocaleData;
exports.getValueAsDateRange = getValueAsDateRange;

//# sourceMappingURL=utils-0c456a61.js.map