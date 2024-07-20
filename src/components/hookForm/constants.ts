export const DATEERRORS = {
  EMPTYDATE: "Заполните поле",
  MAXDATE: "Введите дату не позже текущей",
  MINDATE: "Укажите дату позднее 01.01.1970",
  PERIOD_INVALID: "Введите корректный диапазон дат",
  PERIOD_LONG: (DAYS: number | string) => `Укажите период не более ${DAYS} дней`,
  TODATE: "Введите корректный диапазон дат",
  VALIDDATE: "Введите дату в формате ДД.ММ.ГГГГ",
};

export const PERCENT_ERROR = "Символ % допускается только в конце строки";
