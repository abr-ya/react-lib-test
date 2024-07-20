import { css } from "@emotion/css";

import {
  colorButtonsPrimaryNormal,
  colorButtonsSecondaryClick,
  colorButtonsTransparentHover,
  colorGray1,
  colorGray6,
  colorGreen10,
  colorWhite,
} from "../tokens";

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
  calendarWeekNames: css`
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
    user-select: none;
    & span {
      display: flex;
      width: 36px;
      height: 32px;
      justify-content: center;
      align-items: center;
      color: ${colorGray6};
    }
  `,
  calendarDays: css`
    display: flex;
    flex-wrap: wrap;
  `,
  calendarDay: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      background-color: ${colorButtonsTransparentHover};
    }
    &:active {
      background-color: ${colorButtonsSecondaryClick};
    }
  `,
  calendarTodayDay: css`
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background-color: ${colorButtonsPrimaryNormal};
  `,
  calendarPaddingTodayDay: css`
    padding-top: 4px;
  `,

  calendarSelectedItem: css`
    background-color: ${colorGreen10};
    color: white;
    &:hover {
      background-color: ${colorGreen10};
    }
  `,
  calendarAdditionalDay: css`
    color: #ccc;
  `,
  calendarPickItemsContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
  calendarPickItem: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 36;
    padding: 7px;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      background-color: ${colorButtonsTransparentHover};
    }
    &:active {
      background-color: ${colorButtonsSecondaryClick};
    }
  `,
  calendarCurrentMonth: css`
    background-color: ${colorButtonsPrimaryNormal};
    color: white;
    &:hover {
      background-color: ${colorButtonsPrimaryNormal};
    }
  `,
};

export default styles;
