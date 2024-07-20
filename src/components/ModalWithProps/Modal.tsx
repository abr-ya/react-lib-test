import { useRef, useCallback, ReactNode, FC, useEffect } from "react";
import { Headline3, Headline4 } from "@cars/design-system";

import { Icons } from "components/icons/icons";

import { Box, SvgIcon } from "..";

import { ModalWrapper, ModalContainer, ModalContent, ModalClose, ModalSeparator } from "./Modal.styles";

export interface IModalProps {
  afterClose?: () => void; // callback for modal after closed
  afterOpen?: () => void; // callback for modal after open
  children: ReactNode | string; // The content of the button.
  onAfterClose?: () => void; // callback for modal closed
  onClose?: () => void; // callback when modal closed
  shouledCloseOnEsc?: boolean; // If `true`, press Esc will be close modal.
  showSeparator?: boolean; // Нужно ли показывать сепаратор после заголовка
  subTitle?: ReactNode | string; // Текст подзаголовка
  title?: string; // The header text
  withCloseIcon?: boolean; //  if `true`, modal will be render with close icon
}

export const Modal: FC<IModalProps> = ({
  afterClose,
  afterOpen,
  children,
  onClose,
  shouledCloseOnEsc = true,
  showSeparator,
  subTitle,
  title,
  withCloseIcon = false,
  ...other
}) => {
  const modal = useRef<HTMLElement>(null!);
  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        27: () => {
          e.preventDefault();
          if (onClose) onClose();
          window.removeEventListener("keyup", handleKeyUp, false);
        },
      };

      // @ts-ignore
      if (keys[e.keyCode]) keys[e.keyCode]();
    },
    [onClose],
  );

  useEffect(() => {
    if (shouledCloseOnEsc) {
      window.addEventListener("keyup", handleKeyUp, false);
    }

    return () => {
      if (shouledCloseOnEsc) {
        window.removeEventListener("keyup", handleKeyUp, false);
      }
    };
  }, [handleKeyUp]);

  return (
    <ModalContainer afterOpen={afterOpen} afterClose={afterClose} shouledCloseOnEsc={shouledCloseOnEsc} {...other}>
      <ModalWrapper ref={modal}>
        <Box>
          {withCloseIcon && (
            <ModalClose onClick={onClose}>
              <SvgIcon>
                <path d={Icons.closePopup} />
              </SvgIcon>
            </ModalClose>
          )}
          <Box px={7} pt={7}>
            <Box textAlign="center">
              <Headline3>{title}</Headline3>
            </Box>
            {subTitle && <Headline4>{subTitle}</Headline4>}
          </Box>
          {showSeparator && <ModalSeparator />}
        </Box>
        <ModalContent px={7} pb={7} mt={7}>
          {children}
        </ModalContent>
      </ModalWrapper>
    </ModalContainer>
  );
};
