import { i as isValidNumber, g as getSupportedLocale, b as getSupportedNumberingSystem } from './locale-6fffb6ae.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */
const maxTenthForMinuteAndSecond = 5;
function createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds = true) {
  try {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
      numberingSystem: getSupportedNumberingSystem(numberingSystem)
    };
    if (includeSeconds) {
      options.second = "2-digit";
    }
    return new Intl.DateTimeFormat(getSupportedLocale(locale), options);
  }
  catch (error) {
    throw new Error(`Invalid locale supplied while attempting to create a DateTime formatter: ${locale}`);
  }
}
function formatTimePart(number) {
  const numberAsString = number.toString();
  return number >= 0 && number <= 9 ? numberAsString.padStart(2, "0") : numberAsString;
}
function formatTimeString(value) {
  if (!isValidTime(value)) {
    return null;
  }
  const [hourString, minuteString, secondString] = value.split(":");
  const hour = formatTimePart(parseInt(hourString));
  const minute = formatTimePart(parseInt(minuteString));
  if (secondString) {
    const second = formatTimePart(parseInt(secondString));
    return `${hour}:${minute}:${second}`;
  }
  return `${hour}:${minute}`;
}
function getLocaleHourCycle(locale, numberingSystem) {
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart("meridiem", parts) ? "12" : "24";
}
function getLocalizedTimePart(part, parts) {
  if (!part || !parts) {
    return null;
  }
  if (part === "hourSuffix") {
    const hourIndex = parts.indexOf(parts.find(({ type }) => type === "hour"));
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const hourSuffix = parts[hourIndex + 1];
    return hourSuffix && hourSuffix.type === "literal" && minuteIndex - hourIndex === 2
      ? hourSuffix.value?.trim() || null
      : null;
  }
  if (part === "minuteSuffix") {
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const minuteSuffix = parts[minuteIndex + 1];
    return minuteSuffix && minuteSuffix.type === "literal" && secondIndex - minuteIndex === 2
      ? minuteSuffix.value?.trim() || null
      : null;
  }
  if (part === "secondSuffix") {
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const secondSuffix = parts[secondIndex + 1];
    return secondSuffix && secondSuffix.type === "literal" ? secondSuffix.value?.trim() || null : null;
  }
  return parts.find(({ type }) => (part == "meridiem" ? type === "dayPeriod" : type === part))?.value || null;
}
function getMeridiem(hour) {
  if (!isValidNumber(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  return hourAsNumber >= 0 && hourAsNumber <= 11 ? "AM" : "PM";
}
function isValidTime(value) {
  if (!value || value.startsWith(":") || value.endsWith(":")) {
    return false;
  }
  const splitValue = value.split(":");
  const validLength = splitValue.length > 1 && splitValue.length < 4;
  if (!validLength) {
    return false;
  }
  const [hour, minute, second] = splitValue;
  const hourAsNumber = parseInt(splitValue[0]);
  const minuteAsNumber = parseInt(splitValue[1]);
  const secondAsNumber = parseInt(splitValue[2]);
  const hourValid = isValidNumber(hour) && hourAsNumber >= 0 && hourAsNumber < 24;
  const minuteValid = isValidNumber(minute) && minuteAsNumber >= 0 && minuteAsNumber < 60;
  const secondValid = isValidNumber(second) && secondAsNumber >= 0 && secondAsNumber < 60;
  if ((hourValid && minuteValid && !second) || (hourValid && minuteValid && secondValid)) {
    return true;
  }
}
function isValidTimePart(value, part) {
  if (part === "meridiem") {
    return value === "AM" || value === "PM";
  }
  if (!isValidNumber(value)) {
    return false;
  }
  const valueAsNumber = Number(value);
  return part === "hour" ? valueAsNumber >= 0 && valueAsNumber < 24 : valueAsNumber >= 0 && valueAsNumber < 60;
}
function localizeTimePart({ value, part, locale, numberingSystem }) {
  if (!isValidTimePart(value, part)) {
    return;
  }
  const valueAsNumber = parseInt(value);
  const date = new Date(Date.UTC(0, 0, 0, part === "hour" ? valueAsNumber : part === "meridiem" ? (value === "AM" ? 0 : 12) : 0, part === "minute" ? valueAsNumber : 0, part === "second" ? valueAsNumber : 0));
  if (!date) {
    return;
  }
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(date);
  return getLocalizedTimePart(part, parts);
}
function localizeTimeString({ value, locale, numberingSystem, includeSeconds = true }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds);
  return formatter?.format(dateFromTimeString) || null;
}
function localizeTimeStringToParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return {
      localizedHour: getLocalizedTimePart("hour", parts),
      localizedHourSuffix: getLocalizedTimePart("hourSuffix", parts),
      localizedMinute: getLocalizedTimePart("minute", parts),
      localizedMinuteSuffix: getLocalizedTimePart("minuteSuffix", parts),
      localizedSecond: getLocalizedTimePart("second", parts),
      localizedSecondSuffix: getLocalizedTimePart("secondSuffix", parts),
      localizedMeridiem: getLocalizedTimePart("meridiem", parts)
    };
  }
  return null;
}
function getTimeParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return parts;
  }
  return null;
}
function parseTimeString(value) {
  if (isValidTime(value)) {
    const [hour, minute, second] = value.split(":");
    return {
      hour,
      minute,
      second
    };
  }
  return {
    hour: null,
    minute: null,
    second: null
  };
}

export { localizeTimeStringToParts as a, getTimeParts as b, formatTimePart as c, localizeTimePart as d, getLocaleHourCycle as e, formatTimeString as f, getMeridiem as g, isValidTime as i, localizeTimeString as l, maxTenthForMinuteAndSecond as m, parseTimeString as p };

//# sourceMappingURL=time-55d4d2da.js.map