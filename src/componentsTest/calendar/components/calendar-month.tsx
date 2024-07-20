import cx from "classnames";

import styles from "../calendar.style";
import { Body3 } from "../../typography";
import { MONTHS_NAMES, capitalizeFirstLetter } from "../helpers";
import { EModeMyCalendar, ICalendarMonthParams } from "../types";

export const CalendarMonth = ({ setMode, setHeaderDate, headerDate }: ICalendarMonthParams): JSX.Element => (
  <div className={cx([styles.calendarPickItemsContainer])} data-component="calendar__month">
    {MONTHS_NAMES.map((monthName, index) => {
      const currentDate = new Date();
      const isCurrentMonth = currentDate.getMonth() === index && headerDate.getFullYear() === currentDate.getFullYear();

      return (
        <div
          role="presentation"
          key={monthName}
          onClick={(): void => {
            setHeaderDate(new Date(headerDate.getFullYear(), index));
            setMode(EModeMyCalendar.Days);
          }}
          className={cx({
            [styles.calendarPickItem]: true,
            [styles.calendarCurrentMonth]: isCurrentMonth,
          })}
        >
          <Body3 as="span">{capitalizeFirstLetter(monthName)}</Body3>
        </div>
      );
    })}
  </div>
);
