import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { DatePicker } from "./datePicker";

export default {
  title: "DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

export const ConsoleFn: StoryObj = {
  name: "DatePicker",
  render: (): JSX.Element => {
    const [value, onChange] = useState<string | null>(null);

    return (
      <DatePicker value={value} onChange={onChange} label="Дата" description="Введите дату в формате ДД.ММ.ГГГГ" />
    );
  },
};

export const ConsoleFn1: StoryObj = {
  name: "DatePickerDisabled",
  render: (): JSX.Element => {
    const [value, onChange] = useState<string | null>(null);

    return (
      <DatePicker
        value={value}
        onChange={onChange}
        label="Дата"
        description="Введите дату в формате ДД.ММ.ГГГГ"
        disabled
      />
    );
  },
};

export const ConsoleFn2: StoryObj = {
  name: "DoubleDatePicker",
  render: (): JSX.Element => {
    const [firstValue, setFirstValue] = useState<string | null>(null);
    const [secondValue, setSecondValue] = useState<string | null>(null);

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <DatePicker
          value={firstValue}
          onChange={setFirstValue}
          label="Дата"
          description="Введите дату в формате ДД.ММ.ГГГГ"
        />
        <div style={{ margin: "0 12px" }}>—</div>
        <DatePicker
          value={secondValue}
          onChange={setSecondValue}
          label={"\u00A0"}
          description="Введите дату в формате ДД.ММ.ГГГГ"
        />
      </div>
    );
  },
};
