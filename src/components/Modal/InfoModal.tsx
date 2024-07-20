import React from "react";
import { Headline3 } from "@cars/design-system";

import { Box, ButtonGreen } from "..";

import { StyledModal, ModalHead, ModalBody, ModalFooter, StyledCloseButton } from "./modal.styles";
import "assets/modal.css";

interface IInfoModal {
  closeModal: () => void;
  isShown: boolean;
  modalMessage: string;
  modalTitle: string;
}

const InfoModal = ({ closeModal, isShown, modalMessage, modalTitle }: IInfoModal) => {
  if (!isShown) return null;

  const handleCloseModal = () => {
    closeModal();
  };

  StyledModal.setAppElement("#app");

  return (
    <StyledModal
      isOpen={isShown}
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      overlayClassName="overlay"
      className="content"
    >
      <ModalHead>
        <Box position="relative" onClick={handleCloseModal}>
          <StyledCloseButton />
        </Box>
        <Box textAlign="center">
          <Headline3>{modalTitle}</Headline3>
        </Box>
      </ModalHead>
      <ModalBody>{modalMessage}</ModalBody>
      <ModalFooter>
        <ButtonGreen onClick={handleCloseModal}>Закрыть</ButtonGreen>
      </ModalFooter>
    </StyledModal>
  );
};

export default InfoModal;
