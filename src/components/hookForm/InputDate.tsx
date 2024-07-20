import React, { PropsWithChildren } from "react";
import { Controller, Control, Validate, FieldValues, ValidationRule } from "react-hook-form";
import { TextFieldMasked } from "@cars/design-system";

interface IInputDate<IFormData extends FieldValues, DateFieldsType> {
  autoFocus?: boolean;
  control: Control<IFormData, unknown>;
  label?: string;
  mask?: string;
  maxLength?: number;
  name: keyof DateFieldsType;
  onBlur?: () => void | undefined;
  onFocus?: () => void | undefined;
  placeholder?: string;
  required?: string | ValidationRule<boolean> | undefined;
  setter?: (key: keyof IFormData, value: any) => void; // todo добавить типы?
  validate?: Validate<string, IFormData> | Record<string, Validate<string, IFormData>>;
  value?: string;
}

const InputDate = <Form extends FieldValues = any, DateFieldsType = any>({
  autoFocus = false,
  control,
  label,
  mask = "00.00.0000",
  name,
  onBlur = () => undefined,
  onFocus = () => undefined,
  placeholder,
  required,
  setter,
  validate,
  value,
}: PropsWithChildren<IInputDate<Form, DateFieldsType>>): JSX.Element => (
  <Controller
    // @ts-ignore todo разобраться!
    name={name}
    control={control}
    render={({ field, fieldState }): JSX.Element => (
      <TextFieldMasked
        value={value || field.value}
        label={label}
        placeholder={placeholder}
        error={fieldState.invalid ? fieldState.error?.message : ""}
        maskOptions={{ lazy: true, mask }}
        onChange={(e): void => {
          // hello from React Hook Forms and IMask
          if (!e) return;
          if (setter) setter(name as string, e.target.value);
          else field.onChange(e);
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        size="sm"
        autoFocus={autoFocus}
        style={{ fontSize: "12px" }}
      />
    )}
    rules={{ required, validate }}
  />
);

export default InputDate;
