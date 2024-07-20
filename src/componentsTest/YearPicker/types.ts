import { PortalPosition } from "../core/hooks";

export interface IYearPickerParams {
  value: string | null;
  onChange: (val: string | null) => void;
  position?: PortalPosition;
  className?: string;
  error?: string;
  label?: string;
  description?: string;
  disabled?: boolean;
}
