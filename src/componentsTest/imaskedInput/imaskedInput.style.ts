import { css } from "@emotion/css";

import {
  colorGreen10,
  colorGray3,
  colorGray4,
  colorGray6,
  colorGray7,
  colorGray9,
  colorRed10,
  colorBackgroundBGLight,
} from "../tokens";

const commonTextStyles = css`
  font-family: "SBSansText";
  font-weight: 400;
  letter-spacing: -0.3px;
`;

const styles = {
  base: css`
    ${commonTextStyles};
    border-radius: 8px;
    padding: 16px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid ${colorGray3};
    width: 100%;

    &:hover {
      border: 2px solid ${colorGray4};
      padding: 15px;
    }

    &:disabled {
      color: ${colorGray6};
      background-color: ${colorBackgroundBGLight};
      border: 1px solid ${colorGray3};
      pointer-events: none;
    }

    &:read-only {
      border-style: dashed;

      &:hover,
      &:focus {
        border: 1px dashed ${colorGray3};
      }
    }

    &:required {
      /* Для дальнейшей кастомизации */
    }

    &:focus {
      border: 2px solid ${colorGreen10};
      padding: 15px;
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }

    &::placeholder {
      color: ${colorGray7};
    }
  `,
  sizeLg: css`
    height: 56px;
    padding: 16px;
    font-size: 16px;
    line-height: 24px;
  `,
  sizeMd: css`
    height: 46px;
    padding: 12px 16px;
    font-size: 14px;
    line-height: 22px;
  `,
  sizeSm: css`
    height: 40px;
    padding: 9px 16px;
    font-size: 14px;
    line-height: 22px;
  `,
  error: css`
    border: 2px solid ${colorRed10};

    &:hover:not(:read-only),
    &:focus:not(:read-only) {
      border: 2px solid ${colorRed10};
      padding: 16px;
    }
  `,
  description: css`
    ${commonTextStyles};
    display: block;
    height: 16px;
    margin-top: 8px;
    color: ${colorGray9};
  `,
  errorDescription: css`
    height: 16px;
    color: ${colorRed10};
  `,
  descriptionSizeLg: css`
    font-size: 14px;
    line-height: 22px;
  `,
  descriptionSizeMd: css`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  `,
  descriptionSizeSm: css`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  `,
  label: css`
    font-family: "SBSansUI";
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
    margin-bottom: 8px;
  `,
  labelLg: css`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.3px;
  `,
  required: css`
    color: ${colorRed10};
  `,
};

export default styles;
