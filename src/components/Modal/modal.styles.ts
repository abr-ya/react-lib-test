import Modal from "react-modal";
import styled from "styled-components";
import { Box } from "..";

export const StyledModal = styled(Modal)<{ width?: string }>`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: ${({ width }) => (width ? width : "700px")};
  min-height: 300px;
`;

export const StyledCloseButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  top: 0;
  right: -6px;
  background-color: #f2f3f6;

  ::before {
    content: "+";
    color: #000;
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 24px;
    line-height: 1;
    left: 5px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: #808080;
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
  }

  :hover::after {
    transform: scale(1);
  }

  :hover::before {
    transform: scale(0.8) rotate(45deg);
    color: #fff;
  }
`;

export const ModalHead = styled(Box)`
  padding: 24px 32px 16px;
`;

export const ModalBody = styled(Box)`
  flex: 1 1 120px;
  padding: 16px 32px;
  border-top: 1px solid #f2f3f6;
  border-bottom: 1px solid #f2f3f6;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #262626;

  & strong {
    color: red;
    font-weight: 600;
  }
`;

export const ModalFooter = styled(Box)`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
`;

export const CurrentIndex = styled(Box)`
  font-weight: 600;
  color: #000;
  margin-bottom: 24px;
`;

interface IStyledInput {
  haserror?: boolean;
}

export const StyledInput = styled.input<IStyledInput>`
  height: 40px;
  width: calc(100% - 24px);
  padding: 0 12px;
  font-family: inherit;
  border: 1px solid rgb(224 224 224);
  border-color: ${({ haserror }) => (haserror ? "rgb(254,91,59)" : "rgb(224, 224, 224)")};
  border-radius: 6px;

  &:focus {
    outline: none;
  }
`;

export const HideInput = styled.input`
  height: 1px;
  width: 1px;
  position: absolute;
  top: -100px;
`;

export const ErrorMessage = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: rgb(254 91 59);
`;
