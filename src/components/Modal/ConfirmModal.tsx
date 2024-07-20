import React, { KeyboardEvent } from "react";
import { Body3, Headline3 } from "@cars/design-system";

import { Box, ButtonGreen, ButtonGrey } from "..";

import { StyledModal, ModalHead, ModalBody, ModalFooter, StyledCloseButton, HideInput } from "./modal.styles";
import "assets/modal.css";

interface IConfirmModal {
  buttonCloseLabel?: string;
  buttonOkLabel?: string;
  closeModal: () => void;
  isShown: boolean;
  modalMessage: string;
  modalTitle: string;
  onOk: () => void;
}

const ConfirmModal = ({
  buttonCloseLabel,
  buttonOkLabel,
  closeModal,
  isShown,
  modalMessage,
  modalTitle,
  onOk,
}: IConfirmModal) => {
  if (!isShown) return null;

  const handleCloseModal = () => {
    closeModal();
  };

  StyledModal.setAppElement("#app");

  const keyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onOk();
  };

  const createWithHTML = () => ({ __html: modalMessage });

  return (
    <StyledModal isOpen={isShown} shouldCloseOnOverlayClick={true} overlayClassName="overlay" className="content">
      <ModalHead>
        <Box position="relative" onClick={handleCloseModal}>
          <StyledCloseButton />
        </Box>
        <Box textAlign="center">
          <Headline3>{modalTitle}</Headline3>
        </Box>
      </ModalHead>
      <ModalBody>
        {/* @ts-ignore */}
        <Body3 dangerouslySetInnerHTML={createWithHTML()}></Body3>
      </ModalBody>
      <ModalFooter>
        <ButtonGreen onClick={onOk}>{buttonOkLabel || "OK"}</ButtonGreen>
        <ButtonGrey onClick={handleCloseModal} ml={2}>
          {buttonCloseLabel || "cancel"}
        </ButtonGrey>
      </ModalFooter>
      <HideInput onKeyPress={keyPressHandler} type="text" name="hide" autoFocus />
    </StyledModal>
  );
};

export default ConfirmModal;
