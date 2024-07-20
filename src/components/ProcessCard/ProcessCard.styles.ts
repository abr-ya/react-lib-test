import styled from "styled-components/macro";
import { Flex } from "..";
import { ProcessStatusType } from "constants/processStatus";
import { ProcessStatusColors, ProcessTextColors } from "constants/statusColors";

export const StyledCard = styled(Flex)`
  width: 400px;
  flex-direction: column;
  margin: 16px;
  padding: 16px;
  gap: 32px;
  border: 1px solid rgba(38, 38, 38, 0.08);
  border-radius: 12px;
`;

export const Progress = styled(Flex)<{ status: ProcessStatusType; progress: string }>`
  background-color: ${() => ProcessStatusColors.not_applicable};
  width: 100%;
  height: 4px;
  border-radius: 3px;

  &:after {
    content: "";
    background-color: ${({ status }) => ProcessTextColors[status]};
    width: ${({ progress }) => progress};
    border-radius: 3px;
  }
`;

export const FooterItemTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #262626;
`;
