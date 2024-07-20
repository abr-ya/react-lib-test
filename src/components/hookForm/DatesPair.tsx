import React, { PropsWithChildren } from "react";
import { Control, FieldValues } from "react-hook-form";

import { InputDate } from "components/index";

import { dateValidator, periodValidator } from "./dateValidators";
import { DateFieldsText, DateFieldsWrapper } from "./form.styled";

// todo: продумать, можно ли вынести в общие компоненты используя дженерики и валидатор как свойство?
interface IDatesPair<IFormData extends FieldValues, DateFieldsType> {
  control: Control<IFormData, any>;
  label: string;
  maxDays?: number;
  name1: keyof DateFieldsType;
  name2: keyof DateFieldsType;
  placeholder: string;
  setter?: (key: keyof IFormData, value: any) => void; // todo добавить типы, желательно через женерик!
}

const DatesPair = <FormInterface extends FieldValues = any, DateFieldsType = any>({
  control,
  label,
  maxDays = 0,
  name1,
  name2,
  placeholder,
  setter,
}: PropsWithChildren<IDatesPair<FormInterface, DateFieldsType>>): JSX.Element => {
  return (
    <DateFieldsWrapper>
      <DateFieldsText>с</DateFieldsText>
      <InputDate<FormInterface, DateFieldsType>
        name={name1}
        control={control}
        label={label}
        placeholder={placeholder}
        validate={{
          date: (value, formValues) => dateValidator(value, !!formValues[name2 as string]),
          period: (value, formValues) => periodValidator(value, formValues[name2 as string], true, maxDays),
        }}
        setter={setter}
      />
      <DateFieldsText>по</DateFieldsText>
      <InputDate<FormInterface, DateFieldsType>
        name={name2}
        control={control}
        label={label}
        placeholder={placeholder}
        validate={{
          date: (value, formValues) => dateValidator(value, !!formValues[name1 as string]),
          period: (value, formValues) => periodValidator(value, formValues[name1 as string], false, maxDays),
        }}
        setter={setter}
      />
    </DateFieldsWrapper>
  );
};

export default DatesPair;
