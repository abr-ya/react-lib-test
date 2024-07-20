// @ts-nocheck

import React, { forwardRef } from "react";
import cx from "classnames";
import { IMaskInput } from "react-imask";

import styles from "./imaskedInput.style";
import { IMaskedInputProps } from "./types";

export const IMaskedInput = forwardRef<HTMLDivElement, IMaskedInputProps>(
  (
    { required = false, label = "", className = "", inputSize = "md", inputProps = {}, error = "", description = "" },
    ref,
  ) => (
    <div className={className} data-component="imaskedInput">
      {label && (
        <div
          data-component="imaskedInput__label"
          className={cx({
            [styles.label]: true,
            [styles.labelLg]: inputSize === "lg",
          })}
        >
          {label}
          {required && (
            <span
              className={cx({
                [styles.required]: required,
              })}
            >
              {"*"}
            </span>
          )}
        </div>
      )}
      <IMaskInput
        inputRef={ref}
        data-component="imaskedInput__input"
        className={cx({
          [styles.base]: true,
          [styles.error]: !!error,
          [styles.sizeLg]: inputSize === "lg",
          [styles.sizeMd]: inputSize === "md",
          [styles.sizeSm]: inputSize === "sm",
        })}
        {...(inputProps as Record<string, unknown>)}
      />
      <span
        data-component="imaskedInput__description"
        className={cx({
          [styles.description]: true,
          [styles.errorDescription]: !!error,
          [styles.descriptionSizeLg]: inputSize === "lg",
          [styles.descriptionSizeMd]: inputSize === "md",
          [styles.descriptionSizeSm]: inputSize === "sm",
        })}
      >
        {error || description}
      </span>
    </div>
  ),
);
