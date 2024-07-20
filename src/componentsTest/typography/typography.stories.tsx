import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import {
  Body1,
  Body2,
  Body3,
  Caption1,
  Caption2,
  H1Size30Semibold,
  H2Size24Semibold,
  H3Size20Semibold,
  H4Size18Semibold,
} from "./typography";

export default {
  title: "Typography",
  component: H1Size30Semibold,
  argTypes: {
    children: {
      control: "text",
    },
  },
} as Meta<typeof H1Size30Semibold>;

export const H1Size30SemiboldStory: StoryObj<typeof H1Size30Semibold> = {
  name: "H1/30/Semibold",
  render: (): JSX.Element => <H1Size30Semibold>{"H1/30/Semibold"}</H1Size30Semibold>,
};

export const H2Size24SemiboldStory: StoryObj<typeof H2Size24Semibold> = {
  name: "H2/24/Semibold",
  render: (): JSX.Element => <H2Size24Semibold>{"H2/24/Semibold"}</H2Size24Semibold>,
};

export const H3Size20SemiboldStory: StoryObj<typeof H3Size20Semibold> = {
  name: "H3/20/Semibold",
  render: (): JSX.Element => <H3Size20Semibold>{"H3/20/Semibold"}</H3Size20Semibold>,
};

export const H4Size18SemiboldStory: StoryObj<typeof H4Size18Semibold> = {
  name: "H4/18/Semibold",
  render: (): JSX.Element => <H4Size18Semibold>{"H4/18/Semibold"}</H4Size18Semibold>,
};

export const Body1SemiboldStory: StoryObj<typeof Body1> = {
  name: "Body 1/18/Semibold",
  render: (): JSX.Element => <Body1 weight="semibold">{"Body 1/18/Semibold"}</Body1>,
};

export const Body1RegularStory: StoryObj<typeof Body1> = {
  name: "Body 1/18/Regular",
  render: (): JSX.Element => <Body1>{"Body 1/18/Regular"}</Body1>,
};

export const Body2SemiboldStory: StoryObj<typeof Body2> = {
  name: "Body 2/16/Semibold",
  render: (): JSX.Element => <Body2 weight="semibold">{"Body 2/16/Semibold"}</Body2>,
};

export const Body2RegularStory: StoryObj<typeof Body2> = {
  name: "Body 2/16/Regular",
  render: (): JSX.Element => <Body2>{"Body 2/16/Regular"}</Body2>,
};

export const Body3SemiboldStory: StoryObj<typeof Body3> = {
  name: "Body 3/14/Semibold",
  render: (): JSX.Element => <Body3 weight="semibold">{"Body 3/14/Semibold"}</Body3>,
};

export const Body3MediumStory: StoryObj<typeof Body3> = {
  name: "Body 3/14/Medium",
  render: (): JSX.Element => <Body3 weight="medium">{"Body 3/14/Medium"}</Body3>,
};

export const Body3RegularStory: StoryObj<typeof Body3> = {
  name: "Body 3/14/Regular",
  render: (): JSX.Element => <Body3>{"Body 3/14/Regular"}</Body3>,
};

export const Caption1SemiboldStory: StoryObj<typeof Caption1> = {
  name: "Caption 1/12/Semibold",
  render: (): JSX.Element => <Caption1 weight="semibold">{"Caption 1/12/Semibold"}</Caption1>,
};

export const Caption1RegularStory: StoryObj<typeof Caption1> = {
  name: "Caption 1/12/Regular",
  render: (): JSX.Element => <Caption1 as="span">{"Caption 1/12/Regular"}</Caption1>,
};

export const Caption2SemiboldStory: StoryObj<typeof Caption2> = {
  name: "Caption 2/9/Semibold",
  render: (): JSX.Element => <Caption2>{"Caption 2/9/Semibold"}</Caption2>,
};
