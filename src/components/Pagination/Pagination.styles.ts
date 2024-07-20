import styled from "styled-components/macro";
import { Flex } from "..";

export const PaginationWrapper = styled(Flex)`
  z-index: 100;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  & button {
    border: none;
  }
`;
