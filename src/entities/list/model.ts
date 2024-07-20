export interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface IList {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageable;
  size: number;
  totalElements: number;
  totalPages: number;
}

export type List<T> = IList & {
  content: T;
};

export const defaultList: IList = {
  totalElements: 0,
  totalPages: 0,
  size: 0,
  first: false,
  numberOfElements: 0,
  last: false,
  empty: true,
  pageable: {
    pageSize: 0,
    pageNumber: 0,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  number: 0,
};
