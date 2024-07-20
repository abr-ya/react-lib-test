import { IActsListResponse, IDestructionActListItem } from "api/contracts";
import { defaultList } from "entities/list/model";
import { getFormattedDateWithTimezone } from "lib/helpers/dateHelper";

import { IActListData, ISelect, ISelectRaw } from "./interfaces";

export const normalizeSelectData = (data: ISelectRaw[]): ISelect[] =>
  data.map(({ code, name }) => ({
    label: name,
    value: code,
  }));

const prepareDate = (date: number | undefined) => (!date ? "" : getFormattedDateWithTimezone(date));

export const normalizeActsListResponse = (response: IActsListResponse): IActListData => {
  const pageable = response?.pageable || defaultList.pageable;

  const pageNumber = response?.pageable?.pageNumber + 1;
  const validPageNumber = isNaN(pageNumber) ? defaultList.pageable.pageNumber : pageNumber;
  // для ссылок по guid в таблице + обработка дат
  const content = response?.content?.map((el: IDestructionActListItem) => ({
    date1create: prepareDate(el?.createdTime),
    date2approve: prepareDate(el?.approveTime),
    date3close: prepareDate(el?.executionTime),
    link: { id: el.guid, number: el.number },
    ...el,
  }));
  const { totalElements, totalPages } = response;

  return {
    //...response, // не тянуть лишнее, прокидывать явно, но для отладки может пригодится
    content,
    pageable: {
      ...pageable,
      pageNumber: validPageNumber,
    },
    totalElements,
    totalPages,
  };
};
