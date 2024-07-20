import React from "react";

import { TStatus } from "api/contracts";
import { StatusLabels } from "constants/actStatus";

import { StyledStatus } from "./StatusTag.styles";

interface IStatusTag {
  status: TStatus;
  text?: string;
}

const ActStatusTag = ({ status, text }: IStatusTag) => {
  return <StyledStatus status={status}>{text || StatusLabels[status]}</StyledStatus>;
};

export default ActStatusTag;
