import React, { PropsWithChildren, KeyboardEvent } from "react";
import { Controller, Control, Validate, FieldValues, ValidationRule } from "react-hook-form";
import { TextFieldMultiline } from "@cars/design-system";

// todo если пропы TextField и TextFieldMultiline одинаковые, то м.б. стоит сделать компонент с флагом?
interface ITextArea<Form extends FieldValues, TextFieldsType> {
  autoFocus?: boolean;
  autosize?: boolean;
  control: Control<Form, unknown>;
  label?: string;
  maxLength?: number;
  name: keyof TextFieldsType;
  placeholder?: string;
  required?: string | ValidationRule<boolean> | undefined;
  validate?: Validate<string, Form> | Record<string, Validate<string, Form>>;
}

const TextArea = <Form extends FieldValues = any, TextFieldsType = any>({
  autoFocus = false,
  autosize = false,
  control,
  label,
  maxLength,
  name,
  placeholder,
  required,
  validate,
}: PropsWithChildren<ITextArea<Form, TextFieldsType>>): JSX.Element => (
  <Controller
    // @ts-ignore todo разобраться!
    name={name}
    control={control}
    render={({ field, fieldState }) => {
      const keyHandler = (event: KeyboardEvent<HTMLElement>) => {
        if (event?.key === "Enter") {
          const newValue = field.value.trim();
          if (!newValue && field.value.length > 5)
            console.log(
              `Смоки, тут не Вьетнам, это — боулинг, не надо отправлять ${field.value.length as string} пробела(ов)!!!`,
            );
          field.onChange(newValue);
        }
      };

      return (
        <TextFieldMultiline
          value={field.value}
          onBlur={() => field.onChange(field.value.trim())}
          onChange={field.onChange}
          onKeyDown={keyHandler}
          label={label}
          placeholder={placeholder}
          error={fieldState.invalid ? fieldState.error?.message : ""}
          maxLength={maxLength}
          autoFocus={autoFocus}
          autosize={autosize}
          size="sm"
          margin="none"
        />
      );
    }}
    rules={{ required, validate }}
  />
);

export default TextArea;
