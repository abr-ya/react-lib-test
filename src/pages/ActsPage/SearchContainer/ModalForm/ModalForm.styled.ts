import styled from "@emotion/styled/macro";

import { MODAL_FALLBACK_HEIGHT } from "../constants";

export const ModalFormWrapper = styled.div`
  @keyframes scale {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const ContentWrapper = styled.div<{
  maxHeightPx: number;
}>`
  padding: 24px;

  /* max-height: ${(props): string => String(props.maxHeightPx || MODAL_FALLBACK_HEIGHT)}px; */
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    /* stylelint-disable-next-line color-function-notation */
    background-color: rgba(0, 0, 0, 30%);
    border-radius: 3px;

    &:hover {
      /* stylelint-disable-next-line color-function-notation */
      background-color: rgba(0, 0, 0, 50%);
    }
  }

  ::-webkit-scrollbar-button {
    height: 70px;
  }
`;

export const FormHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f2f3f6;
  cursor: pointer;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  &:nth-child(3),
  &:nth-child(2) {
    padding-bottom: 24px;
  }
`;

export const FormControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const DateFieldsWrapper = styled.div`
  display: flex;
  gap: 10px;

  & > div {
    flex: 1 1 100%;
  }

  & > :last-child {
    label {
      visibility: hidden;
    }
  }

  & > div:first-of-type {
    label {
      position: relative;
      top: 0;
      left: -18px;
    }
  }
`;

export const DateFieldsText = styled.span`
  align-self: center;
  flex: 0 0 fit-content;
  font-size: 12px;
`;

export const TTWrapper = styled.div`
  display: block;
  width: 100%;

  & > div {
    width: 100%;
  }
`;
