type ParamValue = null | undefined | string | number | boolean | string[] | number[] | (string | number)[];

export type SearchParams = undefined | Record<string, ParamValue> | null;
type RequiredSearchParams = Exclude<SearchParams, null | undefined>;

const getFilteredSearchParams = (searchParams: RequiredSearchParams) => {
  return Object.keys(searchParams).reduce((acc, param) => {
    const valueIsEmpty = searchParams[param] === undefined || searchParams[param] === "";

    if (valueIsEmpty) {
      return acc;
    }

    return { ...acc, [param]: searchParams[param] };
  }, {});
};

export const getSearchParams = (searchParams?: SearchParams) => {
  if (searchParams === undefined || searchParams === null) {
    return "";
  }

  const filteredSearchParams = getFilteredSearchParams(searchParams);
  const result = new URLSearchParams(filteredSearchParams).toString();

  return result;
};
