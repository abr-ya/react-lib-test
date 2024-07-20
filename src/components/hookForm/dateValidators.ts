import { isValid } from "date-fns";

import { getUnix } from "lib/helpers/dateHelper";

import { DATEERRORS } from "./constants";
import { parseDateFromStr } from "./helpers";

export const dateValidator = (date: string | null | undefined, required = false) => {
  if (!date && required) return DATEERRORS.EMPTYDATE;
  if (!date) return true;

  const unixDate = getUnix(date);
  const unixMaxDate = new Date().getTime(); // todo в параметры?
  const unixMinDate = new Date(1970, 0, 1).getTime(); // todo в параметры?

  if (date && !isValid(unixDate)) return DATEERRORS.VALIDDATE;
  if (date && isValid(unixDate) && unixDate < unixMinDate) return DATEERRORS.MINDATE;
  if (date && isValid(unixDate) && unixDate > unixMaxDate) return DATEERRORS.MAXDATE;

  return true;
};

// новый валидатор периода - использовать после (вместе с) валидации дат!
export const periodValidator = (value: string, value2: string, isFrom: boolean, maxDays = 0): string | boolean => {
  if (dateValidator(value) && dateValidator(value2)) {
    const firstDate = parseDateFromStr(value);
    const secondDate = parseDateFromStr(value2);
    // не запускаем валидацию пока нет двух дат!
    if (!firstDate || !secondDate) return true;

    if (maxDays) {
      const periodMax = (maxDays - 1) * 24 * 60 * 60 * 1000; // период в днях ==> unix
      const periodUnix = Math.abs(Number(firstDate) - Number(secondDate));
      if (periodUnix > periodMax) return DATEERRORS.PERIOD_LONG(maxDays);
    }

    if (isFrom) {
      if (firstDate > secondDate) return DATEERRORS.PERIOD_INVALID;
    } else {
      if (firstDate < secondDate) return DATEERRORS.PERIOD_INVALID;
    }
  }

  return true;
};
