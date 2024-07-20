export enum EModeMyCalendar {
  Days = "days",
  Months = "months",
}

export enum EDirectionMyCalendar {
  Left = "left",
  Right = "right",
}

export interface IDayInfo {
  year: number;
  monthIndex: number;
  day: number;
}

export interface ICalendarParams {
  setSelectedDate: (value: Date | null) => void;
  selectedDate: Date | null;
  ref?: React.RefObject<HTMLDivElement>;
  className?: string;
}
export interface ICalendarHeaderParams {
  mode: EModeMyCalendar;
  onShiftPeriod: (direction: EDirectionMyCalendar) => void;
  setMode: React.Dispatch<React.SetStateAction<EModeMyCalendar>>;
  headerDate: Date;
}

export interface ICalendarDaysParams {
  calendarDays: Array<IDayInfo>;
  setSelectedDate: (value: Date | null) => void;
  headerDate: Date;
  selectedDate: Date | null;
}

export interface ICalendarMonthParams {
  setMode: React.Dispatch<React.SetStateAction<EModeMyCalendar>>;
  setHeaderDate: React.Dispatch<React.SetStateAction<Date>>;
  headerDate: Date;
}
