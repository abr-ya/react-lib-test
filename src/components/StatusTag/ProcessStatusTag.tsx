import React from "react";

import { ProcessStatusLabels, ProcessStatusType } from "constants/processStatus";

import { StyledProcessStatus } from "./StatusTag.styles";

interface IProcessStatusTag {
  status: ProcessStatusType;
  text?: string;
}

const ProcessStatusTag = ({ status, text }: IProcessStatusTag) => (
  <StyledProcessStatus status={status}>{text || ProcessStatusLabels[status]}</StyledProcessStatus>
);

export default ProcessStatusTag;
