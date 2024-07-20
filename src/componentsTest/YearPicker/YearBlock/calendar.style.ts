import { css } from "@emotion/css";

import { colorGray1, colorWhite } from "../../tokens";

const styles = {
  calendar: css`
    width: 292px;
    padding: 19px;
    box-sizing: border-box;
    border: 1px solid ${colorGray1};
    border-radius: 8px;
    box-shadow:
      0px 8px 16px -4px rgba(0, 0, 0, 0.12),
      0px 0px 1px 0px rgba(0, 0, 0, 0.12);
    background: ${colorWhite};
  `,
  calendarHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
    }
    & span:hover {
      cursor: pointer;
    }
  `,
};

export default styles;
