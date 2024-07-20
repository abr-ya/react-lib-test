import React, { PropsWithChildren } from "react";
import { Controller, Control, Validate, FieldValues, ValidationRule } from "react-hook-form";
import { TextField } from "@cars/design-system";

interface IInput<Form extends FieldValues, TextFieldsType> {
  autoFocus?: boolean;
  control: Control<Form, unknown>;
  label?: string;
  maxLength?: number;
  name: keyof TextFieldsType;
  placeholder?: string;
  required?: string | ValidationRule<boolean> | undefined;
  validate?: Validate<string, Form> | Record<string, Validate<string, Form>>;
}

const Input = <Form extends FieldValues = any, TextFieldsType = any>({
  autoFocus = false,
  control,
  label,
  maxLength,
  name,
  placeholder,
  required,
  validate,
}: PropsWithChildren<IInput<Form, TextFieldsType>>): JSX.Element => (
  <Controller
    // @ts-ignore todo разобраться!
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <TextField
        value={field.value}
        onChange={field.onChange}
        label={label}
        placeholder={placeholder}
        error={fieldState.invalid ? fieldState.error?.message : ""}
        maxLength={maxLength}
        autoFocus={autoFocus}
        size="sm"
        margin="none"
      />
    )}
    rules={{ required, validate }}
  />
);

export default Input;
