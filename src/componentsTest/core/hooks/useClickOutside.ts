import { RefObject, useEffect } from "react";

interface ClickOutsideParams {
  buttonSelectRef: RefObject<HTMLButtonElement>;
  optionsRef: RefObject<HTMLDivElement>;
  isShowOptions: boolean;
  setIsShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useClickOutside = ({
  isShowOptions,
  setIsShowOptions,
  buttonSelectRef,
  optionsRef,
}: ClickOutsideParams): void => {
  useEffect(() => {
    const checkClickOutside = (event: MouseEvent): void => {
      if (
        isShowOptions &&
        buttonSelectRef.current &&
        !buttonSelectRef.current.contains(event.target as Node) &&
        !optionsRef.current?.contains(event.target as Node)
      ) {
        setIsShowOptions(false);
      }
    };
    const checkTabOutside = (event: KeyboardEvent): void => {
      if (
        event.key === "Tab" &&
        isShowOptions &&
        !buttonSelectRef.current?.contains(document.activeElement) &&
        !optionsRef.current?.contains(document.activeElement)
      ) {
        setIsShowOptions(false);
      }
    };

    document.addEventListener("mousedown", checkClickOutside);
    document.addEventListener("keyup", checkTabOutside);

    return (): void => {
      document.removeEventListener("mousedown", checkClickOutside);
      document.removeEventListener("keyup", checkTabOutside);
    };
  }, [buttonSelectRef, optionsRef, isShowOptions, setIsShowOptions]);
};
