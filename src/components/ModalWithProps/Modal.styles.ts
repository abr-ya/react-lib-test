import styled from "styled-components/macro";
import { space } from "styled-system";
import { Box } from "..";

export const ModalContainer = styled.div<any>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000050;
`;

export const ModalWrapper = styled.div<any>`
  ${space}

  position: relative;
  box-sizing: border-box;
  min-width: 645px;
  max-width: 70vw;
  background-color: ${(props) => props.theme.colors.white[1000]};
  border-radius: ${(props) => props.theme.radii[3]}px;
  box-shadow: ${(props) => props.theme.shadows[4]};
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.grey[1000]};
  border-radius: ${(props) => props.theme.radii[6]};
  cursor: pointer;
`;

export const ModalContent = styled(Box)<any>`
  ${space}
`;

export const ModalSeparator = styled(Box)`
  height: 1px;
  margin-right: 0;
  margin-left: 0;
`;

ModalSeparator.defaultProps = {
  bg: "grey.300",
  mt: 5,
};
