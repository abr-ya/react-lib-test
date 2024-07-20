import { PERCENT_ERROR } from "./constants";

export const actNumberValidator = (actNumber: string) => {
  if (!actNumber) return true;

  const percentIndex = actNumber.indexOf("%");

  if (percentIndex === -1) return true;

  return percentIndex === actNumber.length - 1 ? true : PERCENT_ERROR;
};
