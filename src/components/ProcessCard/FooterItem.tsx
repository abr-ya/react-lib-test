import React, { FC } from "react";
import { Typography } from "@cars/design-system";

import { Flex } from "..";

import { FooterItemTitle } from "./ProcessCard.styles";

interface IFooterItem {
  comment: string;
  title: string;
  value: number;
}

const FooterItem: FC<IFooterItem> = ({ comment, title, value }) => (
  <Flex flexDirection="column">
    <Flex justifyContent="space-between">
      <FooterItemTitle>{title}</FooterItemTitle>
      <FooterItemTitle>{value}</FooterItemTitle>
    </Flex>
    <Typography variant="caption1" textColor="#909090">
      {comment}
    </Typography>
  </Flex>
);

export default FooterItem;
