import cx from "classnames";

import styles from "../calendar.style";
import { RightArrow } from "../images/rightArrow";
import { LeftArrow } from "../images/leftArrow";
import { EDirectionMyCalendar, EModeMyCalendar, ICalendarHeaderParams } from "../types";
import { Body3 } from "src/componentsTest/typography";

export const CalendarHeader = ({
  mode,
  onShiftPeriod,
  setMode,
  headerDate,
  saveHandler,
}: ICalendarHeaderParams): JSX.Element => (
  <div className={cx([styles.calendarHeader])} data-component="calendar__header">
    <span
      onClick={(): void => {
        onShiftPeriod(EDirectionMyCalendar.Left);
      }}
      role="presentation"
    >
      {LeftArrow}
    </span>
    {mode === EModeMyCalendar.Days && (
      <div
        role="presentation"
        onClick={(): void => {
          setMode(EModeMyCalendar.Months);
        }}
      >
        <Body3 as="span" weight="medium" onClick={saveHandler}>
          {headerDate.getFullYear()}
        </Body3>
      </div>
    )}
    {mode === EModeMyCalendar.Months && (
      <div role="presentation">
        <Body3 as="span" weight="medium">
          {headerDate.getFullYear()}
        </Body3>
      </div>
    )}
    <span
      onClick={(): void => {
        onShiftPeriod(EDirectionMyCalendar.Right);
      }}
      role="presentation"
    >
      {RightArrow}
    </span>
  </div>
);
