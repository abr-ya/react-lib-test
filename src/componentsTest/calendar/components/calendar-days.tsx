import React from "react";
import cx from "classnames";

import styles from "../calendar.style";
import { ICalendarDaysParams } from "../types";
import { Body3, Caption1 } from "../../typography";
import { checkDateIsEqual, checkIsToday } from "../helpers";

const weekDaysNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const CalendarDays = ({
  calendarDays,
  setSelectedDate,
  selectedDate,
  headerDate,
}: ICalendarDaysParams): JSX.Element => (
  <>
    <div className={cx([styles.calendarWeekNames])} data-component="calendar__weekNames">
      {weekDaysNames.map((weekDaysName) => (
        <Caption1 key={weekDaysName} as="span">
          {weekDaysName}
        </Caption1>
      ))}
    </div>
    <div className={cx([styles.calendarDays])} data-component="calendar__days">
      {calendarDays.map((day) => {
        const currentDate = new Date(day.year, day.monthIndex, day.day);
        const isToday = checkIsToday(currentDate);
        const isSelectedDay = selectedDate && checkDateIsEqual(currentDate, selectedDate);
        const isAdditionalDay = currentDate.getMonth() !== headerDate.getMonth();

        return (
          <div
            role="presentation"
            key={`${day.day}-${day.monthIndex}`}
            onClick={(): void => {
              setSelectedDate(new Date(day.year, day.monthIndex, day.day));
            }}
            className={cx({
              [styles.calendarDay]: true,
              [styles.calendarPaddingTodayDay]: isToday,
              [styles.calendarAdditionalDay]: isAdditionalDay,
              [styles.calendarSelectedItem]: isSelectedDay,
            })}
          >
            <Body3 as="span">{day.day}</Body3>
            {isToday && <div className={cx([styles.calendarTodayDay])} />}
          </div>
        );
      })}
    </div>
  </>
);
