import { a as getAssetPath } from './index-bad092d2.js';
import { c as dateFromISO } from './date-47150d05.js';
import { g as getSupportedLocale } from './locale-46aa06e0.js';

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
  const locale = getSupportedLocale(lang);
  if (translationCache[locale]) {
    return translationCache[locale];
  }
  if (!requestCache[locale]) {
    requestCache[locale] = fetch(getAssetPath(`./assets/date-picker/nls/${locale}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`Translations for "${locale}" not found or invalid, falling back to english`);
      return getLocaleData("en");
    });
  }
  const data = await requestCache[locale];
  translationCache[locale] = data;
  return data;
}
/**
 *  Maps value to valueAsDate
 *
 * @param value
 */
function getValueAsDateRange(value) {
  return value.map((v, index) => dateFromISO(v, index === 1));
}

export { getLocaleData as a, getValueAsDateRange as g };

//# sourceMappingURL=utils-a2b4c9c1.js.map