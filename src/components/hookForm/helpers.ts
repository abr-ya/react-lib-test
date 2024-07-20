// todo проверить, собрать сюда всё общее для форм
export const isFormDataEmpty = (obj: { [key: string]: any }): boolean =>
  Object.values(obj).every(
    (value) =>
      value === "" ||
      (value?.trim && value?.trim() === "") ||
      (Array.isArray(value) && value.length === 0) ||
      value === false ||
      value === undefined ||
      value === null,
  );

export const parseDateFromStr = (value: string): Date | null => {
  if (!value) return null;

  // eslint-disable-next-line prettier/prettier
  const date = new Date(value.split('.').reverse().join('-'));
  if (date.toString() === "Invalid Date") return null;

  return date;
};
