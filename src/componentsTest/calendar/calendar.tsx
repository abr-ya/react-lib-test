import React, { forwardRef, memo, useEffect, useMemo, useState } from "react";
import cx from "classnames";

import styles from "./calendar.style";
import { EDirectionMyCalendar, EModeMyCalendar, ICalendarParams } from "./types";
import { createMonth } from "./helpers";
import { CalendarDays, CalendarHeader, CalendarMonth } from "./components";

export const Calendar = memo(
  forwardRef<HTMLDivElement, ICalendarParams>(({ setSelectedDate, selectedDate, className = "" }, ref) => {
    const [mode, setMode] = useState(EModeMyCalendar.Days);
    const [headerDate, setHeaderDate] = useState(new Date());

    useEffect(() => {
      if (
        selectedDate &&
        (selectedDate.getMonth() !== headerDate.getMonth() || selectedDate.getFullYear() !== headerDate.getFullYear())
      ) {
        setHeaderDate(selectedDate);
      }
    }, [selectedDate]);

    const choiceMonthDays = useMemo(() => createMonth(headerDate.getMonth(), headerDate.getFullYear()), [headerDate]);
    const prevMonthDays = useMemo(() => createMonth(headerDate.getMonth() - 1, headerDate.getFullYear()), [headerDate]);
    const nextMonthDays = useMemo(() => createMonth(headerDate.getMonth() + 1, headerDate.getFullYear()), [headerDate]);

    const firstDayInMonth = new Date(
      choiceMonthDays[0].year,
      choiceMonthDays[0].monthIndex,
      choiceMonthDays[0].day,
    ).getDay();
    const numberPrevDays = firstDayInMonth ? firstDayInMonth - 1 : 6;
    const prevMonthDaysLimit = numberPrevDays === 0 ? [] : prevMonthDays;

    const calendarDays = [
      ...prevMonthDaysLimit.slice(-numberPrevDays),
      ...choiceMonthDays,
      ...nextMonthDays.slice(0, 42 - numberPrevDays - choiceMonthDays.length),
    ];

    const onShiftPeriod = (direction: EDirectionMyCalendar): void => {
      if (mode === EModeMyCalendar.Months && direction === EDirectionMyCalendar.Left) {
        setHeaderDate(new Date(headerDate.getFullYear() - 1, headerDate.getMonth()));
        return;
      }

      if (mode === EModeMyCalendar.Months && direction === EDirectionMyCalendar.Right) {
        setHeaderDate(new Date(headerDate.getFullYear() + 1, headerDate.getMonth()));
        return;
      }

      if (mode === EModeMyCalendar.Days) {
        const showMonthIndex =
          direction === EDirectionMyCalendar.Left ? headerDate.getMonth() - 1 : headerDate.getMonth() + 1;
        if (showMonthIndex === -1) {
          const showYear = headerDate.getFullYear() - 1;
          setHeaderDate(new Date(showYear - 1, 11));
        }

        if (showMonthIndex === 12) {
          const showYear = headerDate.getFullYear() + 1;
          setHeaderDate(new Date(showYear, 0));
        }

        setHeaderDate(new Date(headerDate.getFullYear(), showMonthIndex));
      }
    };

    return (
      <div
        className={cx({
          [styles.calendar]: true,
          [className]: !!className,
        })}
        ref={ref}
        data-component="calendar"
      >
        <CalendarHeader mode={mode} onShiftPeriod={onShiftPeriod} setMode={setMode} headerDate={headerDate} />
        <div>
          {mode === EModeMyCalendar.Days && (
            <CalendarDays
              calendarDays={calendarDays}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              headerDate={headerDate}
            />
          )}

          {mode === EModeMyCalendar.Months && (
            <CalendarMonth setMode={setMode} setHeaderDate={setHeaderDate} headerDate={headerDate} />
          )}
        </div>
      </div>
    );
  }),
);
