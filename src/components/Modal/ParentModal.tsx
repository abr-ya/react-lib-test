import React, { ReactNode } from "react";
import { Body2, Headline3 } from "@cars/design-system";

import { Box } from "..";

import { StyledModal, ModalHead, ModalBody, StyledCloseButton } from "./modal.styles";
import "assets/modal.css";

interface IParentModal {
  children: ReactNode;
  isShown: boolean;
  modalMessage?: string;
  modalTitle: string;
  onCancel: () => void;
  onOk?: () => void;
  width?: string;
}

const ParentModal = ({ children, isShown, modalMessage, modalTitle, onCancel, width }: IParentModal) => {
  if (!isShown) return null;

  const handleCloseModal = () => {
    onCancel();
  };

  StyledModal.setAppElement("#app");

  return (
    <StyledModal
      isOpen={isShown}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
      className="content"
      width={width}
    >
      <ModalHead>
        <Box position="relative" onClick={handleCloseModal}>
          <StyledCloseButton />
        </Box>
        <Box textAlign="center">
          <Headline3>{modalTitle}</Headline3>
        </Box>
      </ModalHead>
      <ModalBody>
        {modalMessage && <Body2>{modalMessage}</Body2>}
        {children}
      </ModalBody>
    </StyledModal>
  );
};

export default ParentModal;
