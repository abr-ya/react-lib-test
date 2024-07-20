import { render } from "react-dom";

import { Box, Flex } from "components/index";

import { Modal } from "../Modal";

export interface IModalOpenFuncProps {
  theme?: any;
  title: string;
  message: string;
  onClose?(): void;
  footer: any;
}

export const template = (props: IModalOpenFuncProps) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const onClose = () => {
    props.onClose && props.onClose();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  const renderModal = () => {
    render(
      <Modal title={props.title} onClose={onClose}>
        <Box>
          <Box lineHeight={1.5} mb={5}>
            {props.message}
          </Box>
          <Flex justifyContent="flex-end">{props.footer}</Flex>
        </Box>
      </Modal>,
      div,
    );
  };

  renderModal();

  return {
    destroy: () => {
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    },
  };
};
