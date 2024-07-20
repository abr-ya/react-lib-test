import { IActSearchRequestParams } from "api/contracts";
import { findActs } from "api/index";

export const findActsReguest = async (params: IActSearchRequestParams) => {
  const { data, status } = await findActs(params);

  return { data, status };
};
