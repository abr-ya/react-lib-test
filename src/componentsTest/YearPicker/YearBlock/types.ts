export enum EModeMyCalendar {
  Days = "days",
  Months = "months",
}

export enum EDirectionMyCalendar {
  Left = "left",
  Right = "right",
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
  saveHandler: () => void;
}
