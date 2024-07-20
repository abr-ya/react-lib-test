import { MultiValue } from "react-select";

import { ICustomSelectValue } from "components/index";

interface IFormDataDates {
  date1from: string;
  date1to: string;
  date2from: string;
  date2to: string;
  date3from: string;
  date3to: string;
}

export interface IFormData extends IFormDataDates {
  category: ICustomSelectValue[] | null;
  input1: string;
  input2: string;
  status: ICustomSelectValue[] | null;
}

export type TextFieldsType = Pick<IFormData, "input1" | "input2">;
export type SelectFieldsType = Pick<IFormData, "category" | "status">;
export type DateFieldsType = Omit<IFormData, "input1" | "input2" | "category" | "status" | "xTest">;

export interface IButtonCoordinates {
  right: number;
  top: number;
}

export interface IComboOption {
  title: string;
  value: string;
}

export enum DateType {
  FromDate1 = "date1from",
  ToDate1 = "date1to",
  FromDate2 = "date2from",
  ToDate2 = "date2to",
  FromDate3 = "date3from",
  ToDate3 = "date3to",
}

export type ValidationResult = boolean | string;

export type ValueType = string | ICustomSelectValue | MultiValue<ICustomSelectValue> | boolean;
