import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

import { usePortalPosition, useClickOutside } from "../core/hooks";
import { getStringFormatDate } from "../calendar/helpers";
import { IMaskedInput } from "../imaskedInput";

import { IYearPickerParams } from "./types";
import styles from "./yearPicker.style";
import { CalendarIcon } from "./images/calendarIcon";
import { CalendarClearIcon } from "./images/calendarClearIcon";
import YearBlock from "./YearBlock/YearBlock";

export const YearPicker = forwardRef<HTMLDivElement, IYearPickerParams>(
  ({ value, onChange, position = "BottomRight", error, label, className = "", description, disabled = false }, ref) => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [isInputFocus, setIsInputFocus] = useState(false);

    usePortalPosition({
      position,
      wrapperRef: inputRef,
      portalRef: calendarRef,
      isOpen: isInputFocus,
      setOpen: setIsInputFocus,
    });
    useClickOutside({
      buttonSelectRef: inputRef as React.RefObject<HTMLButtonElement>,
      isShowOptions: isInputFocus,
      optionsRef: calendarRef,
      setIsShowOptions: setIsInputFocus,
    });

    const selectedDate = useMemo(() => {
      if (value && new RegExp(/[0-9]{2}.[0-9]{2}.[0-9]{4}/).exec(value)) {
        const NewSD = new Date(value.split(".").reverse().join("-"));
        console.log("NewSD ", NewSD);

        return NewSD;
      }

      return null;
    }, [value]);

    const handleCalendarSelected = useCallback((convertValue: Date | null) => {
      console.log(convertValue);
      const stringValue = getStringFormatDate(convertValue);
      setIsInputFocus(false);
      console.log(stringValue);
      onChange(stringValue.split(".")[2]);
    }, []);

    const isShowClearIcon = (): boolean => {
      const checkValue = value || "";
      return !(new RegExp(/_{2}._{2}._{4}/).test(checkValue) || checkValue === "");
    };

    return (
      <div
        ref={ref}
        className={cx({ [styles.yearPickerContainer]: true, [className]: !!className })}
        data-component="dataPicker"
      >
        {isShowClearIcon() && (
          <div
            role="presentation"
            className={styles.calendarClearIcon}
            onClick={(): void => {
              onChange(null);
            }}
          >
            {CalendarClearIcon}
          </div>
        )}

        <div
          role="presentation"
          className={cx({ [styles.calendarIcon]: true, [styles.calendarIconDisabled]: disabled })}
          onClick={(): void => {
            if (!disabled) {
              setIsInputFocus(true);
            }
          }}
        >
          {CalendarIcon}
        </div>
        <IMaskedInput
          error={error}
          ref={inputRef}
          inputSize="sm"
          label={label}
          inputProps={{
            placeholder: "Введите год",
            lazy: false,
            mask: "0000",
            autofix: true,
            onAccept: (e: string): void => {
              onChange(e);
            },
            value: value || "",
            onFocus: (): void => {
              setIsInputFocus(true);
            },
            disabled,
          }}
          className={cx({ [styles.inputDisabled]: disabled })}
          description={description}
        />
        {isInputFocus &&
          createPortal(
            <YearBlock
              setSelectedDate={handleCalendarSelected}
              selectedDate={selectedDate}
              ref={calendarRef}
              className={styles.calendarPosition}
            />,
            document.body,
          )}
      </div>
    );
  },
);
