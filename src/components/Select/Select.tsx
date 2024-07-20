import React, { FC, JSX } from "react";
import Select, { MenuPlacement, MultiValue, SingleValue } from "react-select";

import { ErrorMessage, Label } from "..";

import { SelectWrapper } from "./Select.styled";
import { ICustomSelectValue } from "./interfaces";

interface ICustomSelect {
  defaultMenuIsOpen?: boolean;
  errorText?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  label?: string;
  maxMenuHeight?: number;
  menuPlacement?: MenuPlacement;
  onChange: (value: MultiValue<ICustomSelectValue> | SingleValue<ICustomSelectValue>) => void;
  optionRender?: (option: ICustomSelectValue) => JSX.Element;
  options: ICustomSelectValue[];
  placeholder?: string;
  value?: MultiValue<ICustomSelectValue> | SingleValue<ICustomSelectValue>;
  width?: number;
}

const CustomSelect: FC<ICustomSelect> = ({
  defaultMenuIsOpen = false,
  errorText,
  isMulti = false,
  isSearchable = true,
  label,
  maxMenuHeight = 300,
  menuPlacement = "auto",
  onChange,
  optionRender,
  options,
  placeholder = "",
  value = null,
  width,
}) => {
  return (
    <SelectWrapper width={width}>
      {label && <Label>{label}</Label>}
      <Select
        isMulti={isMulti}
        placeholder={placeholder}
        isClearable
        isSearchable={isSearchable}
        options={options}
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
        className={!!errorText ? "select-error" : "select"}
        classNamePrefix="select"
        menuPlacement={menuPlacement}
        maxMenuHeight={maxMenuHeight}
        defaultMenuIsOpen={defaultMenuIsOpen}
        formatOptionLabel={optionRender ? (option: ICustomSelectValue) => optionRender(option) : undefined}
      />
      {!!errorText && <ErrorMessage text={errorText} />}
    </SelectWrapper>
  );
};

export default CustomSelect;
