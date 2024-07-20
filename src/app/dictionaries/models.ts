export interface IDictionaryItem {
  label: string;
  value: string;
}

export interface IDictionary<DataType> {
  data: DataType;
  error: string | null;
  isFetching: boolean;
}

export const defaultDictionary = {
  data: [],
  error: null,
  isFetching: false,
};

export type DictNormalizeType<T> = (dict: T[]) => IDictionaryItem[];
