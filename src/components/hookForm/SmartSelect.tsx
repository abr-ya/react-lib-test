import React, { PropsWithChildren } from "react";
import { Controller, Control, FieldValues, ValidationRule } from "react-hook-form";
import { MenuPlacement } from "react-select";

import { ICustomSelectValue, Select } from "components/index";

interface ISmartSelect<Form extends FieldValues, SelectFieldsType> {
  control: Control<Form, unknown>;
  isMulti?: boolean;
  label?: string;
  maxMenuHeight?: number;
  menuPlacement?: MenuPlacement;
  name: keyof SelectFieldsType;
  options: ICustomSelectValue[];
  placeholder?: string;
  required?: string | ValidationRule<boolean> | undefined;
  width?: number;
}

const SmartSelect = <Form extends FieldValues = any, SelectFieldsType = any>({
  control,
  isMulti = false,
  label,
  maxMenuHeight,
  menuPlacement = "bottom",
  name,
  options,
  placeholder,
  required,
  width,
}: PropsWithChildren<ISmartSelect<Form, SelectFieldsType>>): JSX.Element => (
  <Controller
    // @ts-ignore todo разобраться!
    name={name}
    control={control}
    render={({ field }) => (
      <Select
        isMulti={isMulti}
        label={label}
        menuPlacement={menuPlacement}
        options={options}
        onChange={field.onChange}
        placeholder={placeholder}
        value={field.value}
        maxMenuHeight={maxMenuHeight}
        width={width}
      />
    )}
    rules={{ required }}
  />
);

export default SmartSelect;
