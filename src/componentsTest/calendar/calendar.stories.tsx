import React, { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Calendar } from "./calendar";

export default {
  title: "Calendar",
  component: Calendar,
} as Meta<typeof Calendar>;

export const Default: StoryObj = {
  name: "Default",
  render: (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return <Calendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />;
  },
};

export const DefaultSelectedValue: StoryObj = {
  name: "Calendar with default value",
  render: (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2023, 10, 4));

    return <Calendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />;
  },
};
