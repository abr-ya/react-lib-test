import { ButtonGreen, Flex } from "components/index";

import { template } from "./template";

export interface IModalOpenFuncProps {
  theme?: any;
  title: string;
  message: string;
  onClose?(): void;
  cancelText?: string;
}

export const modalOpen = (props: IModalOpenFuncProps) => {
  const onClose = () => {
    props.onClose && props.onClose();

    templateModal.destroy();
  };
  // Эта модалка имеет внутри себя простой текст, а из кнопок есть только "Закрыть".
  // Для пользователей важно, чтоб модалка закрывалась как по Esc, так и по Enter.
  // Поэтому пока модалка открыта, то фокус всегда должен стоять на кнопке "Закрыть"
  const onBlur = (ref: React.FocusEvent<HTMLButtonElement>) => {
    ref?.currentTarget?.focus && ref.currentTarget.focus();
  };
  const footer = (
    <Flex justifyContent="flex-end">
      <ButtonGreen onClick={onClose} onBlur={onBlur} autoFocus>
        {props.cancelText || "Закрыть"}
      </ButtonGreen>
    </Flex>
  );
  const templateModal = template({
    ...props,
    footer,
  });

  return templateModal;
};
