import React, { FC } from "react";
import AsyncSelect from "react-select/async";
import { MultiValue, SingleValue } from "react-select";
import { AxiosResponse } from "axios";

import { ErrorMessage, Label } from "..";

import { SelectWrapper } from "./Select.styled";
import { ICustomSelectValue } from "./interfaces";

interface ISelectWithSearch<T, DictItemT> {
  errorText?: string;
  isMulti?: boolean;
  label?: string;
  mapFunc?: (el: T) => ICustomSelectValue;
  minForSearch?: number;
  noOptsEmpty?: string;
  noOptsResult?: string;
  onChange: (value: MultiValue<ICustomSelectValue> | SingleValue<ICustomSelectValue>) => void;
  placeholder?: string;
  searchKey: string;
  searchPath: string;
  searchRequest: (path: string, key: string, value: string) => Promise<AxiosResponse<DictItemT[]>>;
  testMode?: boolean;
  value?: MultiValue<ICustomSelectValue> | SingleValue<ICustomSelectValue>;
  width?: number;
}

const SelectWithSearch: FC<ISelectWithSearch<any, any>> = ({
  minForSearch = 1,
  errorText,
  isMulti = false,
  label,
  noOptsEmpty = `Введите ${minForSearch} или более символов для поиска`,
  noOptsResult = "Не найдены варианты по данному запросу",
  onChange,
  placeholder = "",
  searchKey,
  searchPath,
  searchRequest,
  testMode,
  value,
  width,
  mapFunc = (el) => ({ label: el.name, value: el.code }),
}) => {
  const searchOptions = (inputValue: string) => {
    if (inputValue.length < minForSearch) return new Promise<[]>((resolve) => resolve([]));

    return searchRequest(searchPath, searchKey, inputValue).then((res) => {
      if (testMode) console.log("search response", res);
      const options = Array.isArray(res.data) ? res.data.map(mapFunc) : [];
      if (testMode) console.log("search options", options);

      return options;
    });
  };

  return (
    <SelectWrapper width={width}>
      {label && <Label>{label}</Label>}
      <AsyncSelect
        isMulti={isMulti}
        placeholder={placeholder}
        cacheOptions
        loadOptions={searchOptions}
        noOptionsMessage={({ inputValue }) => (inputValue.length < minForSearch ? noOptsEmpty : noOptsResult)}
        isClearable
        value={value}
        onChange={onChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            primary: "#10bf6a",
            primary25: "#10bf6a20",
          },
        })}
        // eslint-disable-next-line no-extra-boolean-cast
        className={!!errorText ? "form-select-error" : "form-select"}
      />
      {!!errorText && <ErrorMessage text={errorText} />}
    </SelectWrapper>
  );
};

export default SelectWithSearch;
