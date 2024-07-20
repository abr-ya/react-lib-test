import { ICodeName } from "api/contracts";
import { IDictionary } from "entities/dictionaries/models";

export const dictHasData = (dict: IDictionary<any[]>) => Array.isArray(dict?.data) && !!dict?.data.length;

export const codeName2Combo = (dict: IDictionary<ICodeName[]>) =>
  dict.data.map(({ code, name }) => ({ title: name, value: code }));

export const codeName2LabelValue = (dict: IDictionary<ICodeName[]>) =>
  dict.data.map(({ code, name }) => ({ label: name, value: code }));
