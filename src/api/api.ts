import { AxiosResponse } from "axios";
import axios from "./axios";
import { getSearchParams } from "lib/helpers/searchParamsHelper";

import { IActSearchRequestParams, ICodeName, IDestructionAct } from "./contracts";

// dictionaries
export const getStatuses = (): Promise<AxiosResponse<ICodeName[]>> =>
  axios.request({
    method: "GET",
    url: "/api/dictionaries/destruction-act-status",
  });

export const getCategories = (): Promise<AxiosResponse<ICodeName[]>> =>
  axios.request({
    method: "GET",
    url: "/api/dictionaries/document-category",
  });

// actsSearch
export const findActs = (params: IActSearchRequestParams): Promise<AxiosResponse<IDestructionAct>> => {
  const page = params?.page === undefined ? 0 : params.page - 1;
  const searchParams = {
    ...params,
    page,
  };
  const sQueryString = getSearchParams(searchParams);
  const SORT = "sort=createdTime,asc";

  return axios.request({
    method: "GET",
    url: `/api/destruction-acts/page?${sQueryString}&${SORT}`,
  });
};
// actsSearch
