import { css } from "@emotion/css";

const styles = {
  calendarPosition: css`
    position: absolute;
  `,
  calendarClearIcon: css`
    position: absolute;
    height: 24px;
    bottom: 32px;
    right: 62px;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  `,
  calendarIcon: css`
    position: absolute;
    height: 24px;
    border-left: 1px solid rgba(38, 38, 38, 0.08);
    bottom: 32px;
    right: 0;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    & > svg {
      margin: 0 16px;
    }
  `,
  calendarIconDisabled: css`
    &:hover {
      cursor: default;
    }
  `,
  yearPickerContainer: css`
    position: relative;
    width: 401px;
  `,
  inputDisabled: css`
    & [data-component="imaskedInput__input"] {
      background-color: transparent;
      border: 1px solid #e0e0e0;
    }
  `,
};
export default styles;
