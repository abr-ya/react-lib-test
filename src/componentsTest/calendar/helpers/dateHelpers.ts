import { IDayInfo } from "../types";

import { addLeadingZeros } from "./helpers";

export const MONTHS_NAMES = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
] as const;

export const getMonthNumberOfDays = (monthIndex: number, yearNumber: number = new Date().getFullYear()): number =>
  new Date(yearNumber, monthIndex + 1, 0).getDate();

export const checkDateIsEqual = (date1: Date, date2: Date): boolean =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export const checkIsToday = (date: Date): boolean => {
  const today = new Date();

  return checkDateIsEqual(today, date);
};

export const createMonth = (monthIndex: number, yearNumber: number = new Date().getFullYear()): Array<IDayInfo> => {
  const monthDaysArray: Array<IDayInfo> = [];
  const numberDays = getMonthNumberOfDays(monthIndex, yearNumber);

  for (let i = 1; i <= numberDays; i += 1) {
    monthDaysArray.push({
      day: i,
      monthIndex,
      year: yearNumber,
    });
  }

  return monthDaysArray;
};

export const getMonthsNames = (monthIndex: number): (typeof MONTHS_NAMES)[number] => MONTHS_NAMES[monthIndex];

export const getStringFormatDate = (date: Date | null): string =>
  date ? `${addLeadingZeros(date.getDate(), 2)}.${addLeadingZeros(date.getMonth() + 1, 2)}.${date.getFullYear()}` : "";
