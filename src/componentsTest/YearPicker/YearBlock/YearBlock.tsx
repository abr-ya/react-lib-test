import { forwardRef, memo, useEffect, useState } from "react";
import cx from "classnames";

import styles from "./calendar.style";
import { EDirectionMyCalendar, EModeMyCalendar, ICalendarParams } from "./types";
import { CalendarHeader } from "./components/calendar-header";

const YearBlock = memo(
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

    const onShiftPeriod = (direction: EDirectionMyCalendar): void => {
      console.log("onShiftPeriod", direction);

      if (direction === EDirectionMyCalendar.Left) {
        setHeaderDate(new Date(headerDate.getFullYear() - 1, headerDate.getMonth()));
        return;
      }

      if (direction === EDirectionMyCalendar.Right) {
        setHeaderDate(new Date(headerDate.getFullYear() + 1, headerDate.getMonth()));
        return;
      }
    };

    const yearSelect = () => {
      console.log("yearSelect", headerDate);
      setSelectedDate(headerDate);
    };

    return (
      <div className={cx({ [styles.calendar]: true, [className]: !!className })} ref={ref} data-component="calendar">
        <CalendarHeader
          mode={mode}
          onShiftPeriod={onShiftPeriod}
          setMode={setMode}
          headerDate={headerDate}
          saveHandler={yearSelect}
        />
      </div>
    );
  }),
);

export default YearBlock;
