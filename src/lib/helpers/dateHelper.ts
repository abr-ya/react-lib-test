import { format, getTime, parse, isValid, getYear } from "date-fns";

export const SECONDS_PER_MINUTE = 60;
export const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * 60;
export const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;

export const DateFormat = {
  Default: "dd.MM.yyyy",
  Full: "dd.MM.yyyy HH:mm",
  /* eslint-disable */
  ISO: "yyyy-MM-dd'T'HH:mm:ss.SSS",
};

export const getFormattedDate = (
  unixDate?: number | null,
  dateFormat: string = DateFormat.Default,
) => {
  if (unixDate === null || unixDate === undefined) {
    return '';
  }

  const formatedDate = format(new Date(unixDate * 1000), dateFormat);

  return formatedDate;
};

export const getFormattedDateWithTimezone = (
  unixDate: number | null,
  dateFormat: string = DateFormat.Full,
  debug?: boolean,
) => {
  if (unixDate === null || unixDate === undefined) {
    return '';
  }

  const date = new Date(unixDate * 1000);
  if (debug) console.log(date.getTime(), date.getTimezoneOffset() * 60000);
  const localDate = date.getTime(); // old: - date.getTimezoneOffset() * 60000;

  if (debug) console.log(date.getTime());
  const formatedDate = format(new Date(localDate), dateFormat); // не надо вычитать - коснтруктор все делает правильно

  return formatedDate;
};

// старый вариант дд.мм.гггг ==> unix для бэка
export const getGMTTime = (value: string): number => {
  const date = convertValueToDate(value);

  return (date.getTime() - date.getTimezoneOffset() * 60000) / 1000;
};

// преобразует "нормальную" дату в unix для бэка
export const getGMTTimeFromDate = (date: Date): number => (date.getTime() - date.getTimezoneOffset() * 60000) / 1000;

export const getFormattedDateFromDate = (
  date: any,
  dateFormat: string = DateFormat.Default,
) => {
  if (isValid(date)) {
    return format(date, dateFormat);
  }
  return '';
};

export const getDateFromString = (
  stringDate: string,
  dateFormat: string = DateFormat.Default,
) => {
  if (!stringDate) {
    return null;
  }

  const date = parse(stringDate, dateFormat, new Date());
  if (isValid(date)) {
    return date;
  }
  return null;
};

export const getUnix = (
  sDate: string,
  format: string = DateFormat.Default,
): number => (sDate ? getTime(parse(sDate, format, new Date())) : Date.now());

export const getUnixFromDate = (sDate: string | undefined, format: string = DateFormat.Default) => {
  return sDate ? getTime(parse(sDate, format, new Date())) / 1000 : undefined;
}

export const getUnixFromFullDate = (sDate?: string): number | null =>
  sDate
    ? Math.round(getTime(parse(sDate, DateFormat.Full, new Date())) / 1000)
    : null;

export const getISO = (
  sDate: string,
  inputDateFormat: string = DateFormat.Default,
): string =>
  sDate ? `${format(getUnix(sDate, inputDateFormat), DateFormat.ISO)}Z` : '';

export const getShortISO = (
  sDate?: string,
  inputDateFormat: string = DateFormat.Default,
): string =>
  sDate ? `${format(getUnix(sDate, inputDateFormat), DateFormat.ISO)}`.slice(0, 10) : '';

export const getDateFromISO = (
  sDate?: string | null,
): string =>
  sDate ? sDate.split('-').reverse().join('.') : '';

export const splitDateValue = (value: string): { [key: string]: number } => {
  const year = Number(value.split('.')[2]);
  const month = Number(value.split('.')[1]) - 1;
  const day = Number(value.split('.')[0]);

  return { day: day, month: month, year: year };
};

export const convertValueToDate = (value: string): Date => {
  const date = splitDateValue(value);

  return new Date(date.year, date.month, date.day);
};

export const getCurrentDate = () => {
  const date = new Date();

  return format(new Date(date.getTime()), DateFormat.Default);
};

export const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  return format(new Date(date.getTime()), DateFormat.Default);
};

export const getYearAgo = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  return format(new Date(date.getTime()), DateFormat.Default);
};

export const getMonthLater = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  return format(new Date(date.getTime()), DateFormat.Default);
};

export const getFewDaysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);

  return format(new Date(date.getTime()), DateFormat.Default);
};

export const getFewDaysLater = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return format(new Date(date.getTime()), DateFormat.Default);
};

export const isValidDate = (date: string) => {
  if (!date) {
    return false;
  }
  const unixDate = getUnix(date);
  if ((date && !isValid(unixDate)) || unixDate < 0) {
    return false;
  }

  const { day, month, year } = splitDateValue(date);
  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day === 0 ||
    month < 0 ||
    month > 11 ||
    year === 0
  ) {
    return false;
  }

  return true;
};

export const convertSecondsToDays = (value: number) => {
  return Math.floor(value / 86400);
};

export const getNext10Years = () => {
  const next = getYear(new Date()) + 1;
  const last = getYear(new Date()) + 10;

  return [`01.01.${next}`, `31.12.${last}`];
}
