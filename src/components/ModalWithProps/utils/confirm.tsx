import React from "react";

import { ButtonGreen, ButtonGrey, Flex } from "components/index";

import { template } from "./template";

export interface IModalConfirmFuncProps {
  cancelText?: string;
  message: string;
  okText?: string;
  onClose?(): void;
  onOk?(): void;
  theme?: any;
  title: string;
}

export const modalConfirm = (props: IModalConfirmFuncProps) => {
  const onClose = () => {
    props.onClose && props.onClose();

    templateModal.destroy();
  };
  const onOk = () => {
    props.onOk && props.onOk();

    templateModal.destroy();
  };
  const footer = (
    <Flex justifyContent="flex-end">
      <ButtonGreen onClick={onOk}>{props.okText || "Подтвердить"}</ButtonGreen>
      <ButtonGrey ml={6} onClick={onClose}>
        {props.cancelText || "Закрыть"}
      </ButtonGrey>
    </Flex>
  );
  const templateModal = template({
    ...props,
    footer,
  });

  return templateModal;
};
