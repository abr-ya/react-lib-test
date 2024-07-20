import styled from "@emotion/styled/macro";
import { TStatus } from "api/contracts";
import {
  ActStatusColors,
  ActTextColors,
  DocStatusColors,
  ProcessStatusColors,
  ProcessTextColors,
} from "constants/statusColors";
import { ProcessStatusType } from "constants/processStatus";

import { TAPIStatus } from "./DocStatusTag";

const BaseTag = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  color: #4c4c4c;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0.2px;
  padding: 4px 8px;
  border-radius: 6px;
`;

export const StyledStatus = styled(BaseTag)<{ status: TStatus }>`
  background-color: ${({ status }) => ActStatusColors[status]};
  color: ${({ status }) => ActTextColors[status]};
`;

export const Tag = styled(BaseTag)<{ color: string }>`
  background-color: ${({ color }) => color};
  width: fit-content;
  margin-right: 12px;
`;

export const StyledDocStatus = styled(BaseTag)<{ status: TAPIStatus }>`
  background-color: ${({ status }) => DocStatusColors[status]};
`;

export const StyledProcessStatus = styled(BaseTag)<{ status: ProcessStatusType }>`
  background-color: ${({ status }) => ProcessStatusColors[status]};
  color: ${({ status }) => ProcessTextColors[status]};
`;
