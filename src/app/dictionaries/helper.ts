import { ICodeName } from "src/api/contracts";
import { IDictionary } from "../dictionaries/models";

export const dictHasData = (dict: IDictionary<any[]>) => Array.isArray(dict?.data) && !!dict?.data.length;

export const codeName2Combo = (dict: IDictionary<ICodeName[]>) =>
  dict.data.map(({ code, name }) => ({ title: name, value: code }));
