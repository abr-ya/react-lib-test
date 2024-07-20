// todo универсальное вынести в общее!!!
import { IFormData } from "../interfaces";

export const getEnumValues = <E extends { [key: string]: string }>(enumeration: E): Array<string> =>
  Object.values(enumeration);

export const getTodayDate = (): string =>
  `${String(new Date().getDate()).padStart(2, "0")}.${String(new Date().getMonth() + 1).padStart(
    2,
    "0",
  )}.${new Date().getFullYear()}`;

export const clearSubmitData = <T extends IFormData>(data: T): Partial<T> =>
  Object.entries(data).reduce<Partial<T>>((clearedData, [key, value]) => {
    if (
      value !== null &&
      value !== void 0 &&
      value !== "" &&
      value !== false &&
      !(Array.isArray(value) && value.length === 0)
    ) {
      clearedData[key as keyof T] = value as T[keyof T];
    }

    return clearedData;
  }, {} as Partial<T>);

export const getTagsName = (formData?: string | Array<string>, selectData?: Array<any>): Array<string> => {
  if (!formData || (Array.isArray(formData) && formData.length === 0) || !selectData) return [];
  const codes = Array.isArray(formData) ? formData : [formData];
  const res = selectData.filter((item) => codes.includes(item.code)).map((item) => item.name);

  return res;
};
