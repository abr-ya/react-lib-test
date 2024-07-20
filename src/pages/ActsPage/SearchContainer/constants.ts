import { IFormData } from "./interfaces";

// modal part
export const CLOSE_MODAL_TIMEOUT_MS = 300;
export const MODAL_TOP_OFFSET = 74;
export const MODAL_BOTTOM_RESERVE = 25;
export const MODAL_FALLBACK_HEIGHT = 550;

// todo => to errors!
export const EMPTY_FIELD_ERROR_MSG = "Заполните поле";
export const INVALID_PERIOD_ERROR = "Введите корректный диапазон дат";

// main part
export const TEST_MODE = false;

export const MAXDAYS = 365;

export const ERRORS = {
  EMPTYALLHEADER: "Ошибка",
  EMPTYALLTEXT: "Заполните хотя бы один критерий поиска",
  EMPTYSELECT: "Выберите площадку",
  TOO_SHORT_NUM: "Минимальная длина поиска (без учета символа %) - 5 символов",
};

export const LABELS = {
  CATEGORY: "Категория",
  DATE1: "Дата создания",
  DATE2: "Дата утверждения",
  DATE3: "Дата закрытия",
  DATE_FROM: "c",
  DATE_TO: "по",
  INPUT1: "Системный номер",
  INPUT2: "Номер акта",
  STATUS: "Статус",
};

export const PLACEHOLDERS = {
  CATEGORY: "Выберите категорию документа",
  DATE: "Введите дату в формате ДД.ММ.ГГГГ",
  INPUT1: "Введите системный номер",
  INPUT2: "Введите номер акта",
  STATUS: "Выберите статус акта",
};

export const TOOLTIPS = {
  INPUT1: "Допускается использование символа % вместо 1 или нескольких символов в конце идентификатора акта",
};

export const EMPTYFORM: IFormData = {
  category: [],
  date1from: "",
  date1to: "",
  date2from: "",
  date2to: "",
  date3from: "",
  date3to: "",
  input1: "",
  input2: "",
  status: [],
};
