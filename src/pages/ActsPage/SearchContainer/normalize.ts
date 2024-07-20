import { TStatus } from "api/contracts";
import { IActSearchRequestParams } from "api/index";
import { getGMTTime } from "lib/helpers/dateHelper";

import { IFormData } from "./interfaces";

const updateDateFrom = (date: string) => getGMTTime(date);
const updateDateTo = (date: string) => getGMTTime(date) + 86399;

export const normalizeSearchParams = ({
  category,
  date1from,
  date1to,
  date2from,
  date2to,
  date3from,
  date3to,
  input1,
  input2,
  status,
}: IFormData): IActSearchRequestParams => {
  const payload: IActSearchRequestParams = {};

  if (input1) payload.number = input1.trim();
  if (input2) payload.registrationNumber = input2.trim();

  if (status?.length) payload.statusCodes = status.map((el) => el.value as TStatus);
  if (category?.length) payload.documentCategories = category.map((el) => el.value);

  if (date1from && date1to) {
    payload.createdTimeFrom = updateDateFrom(date1from);
    payload.createdTimeTo = updateDateTo(date1to);
  }

  if (date2from && date2to) {
    payload.approveTimeFrom = updateDateFrom(date2from);
    payload.approveTimeTo = updateDateTo(date2to);
  }

  if (date3from && date3to) {
    payload.executionTimeFrom = updateDateFrom(date3from);
    payload.executionTimeTo = updateDateTo(date3to);
  }

  return payload;
};
