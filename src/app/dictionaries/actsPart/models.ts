export interface IActDictItem {
  code: string;
  name: string;
}

export type ActDictionary<DataType> = {
  data: DataType;
  error: string | null;
  isFetching: boolean;
};

export type ActsDictionarySlice = {
  category: ActDictionary<IActDictItem[]>;
  status: ActDictionary<IActDictItem[]>;
};

const defaultDictionary = {
  data: [],
  error: null,
  isFetching: false,
};

export const defaultActsDictionary: ActsDictionarySlice = {
  category: defaultDictionary,
  status: defaultDictionary,
};
