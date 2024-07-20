import { IDestructionActListItem, IPageable } from "api/contracts"; // TStatus

export interface ISelectRaw {
  code: string;
  name: string;
}

export interface ISelect {
  label: string;
  value: string;
}

export interface ISelectGen<T> {
  label: string;
  value: T;
}

// form part starts
export interface ISearchFormDataDates {
  date1from: string;
  date1to: string;
  date2from: string;
  date2to: string;
  date3from: string;
  date3to: string;
}

// todo привести в порядок после подного перехода на новый поиск!
export interface ISearchFormData extends ISearchFormDataDates {
  category: string[];
  input1: string;
  input2: string;
  status: string[];
}

// table part start
export interface IDestructionActTableItem
  extends Omit<IDestructionActListItem, "createdTime" | "approveTime" | "executionTime"> {
  date1create: string;
  date2approve: string;
  date3close: string;
  link: { id: string; number: string };
}

// todo: уточнить интерфейсы, в т.ч. что возвращаем! ===> IActsListResponse + IActListData == проверить!)
export interface IActListData {
  content: IDestructionActTableItem[];
  pageable: IPageable;
  totalElements: number;
  totalPages: number;
}
