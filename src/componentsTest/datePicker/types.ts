import { PortalPosition } from "../core/hooks";

export interface IDatePickerParams {
  value: string | null;
  onChange: React.Dispatch<React.SetStateAction<string | null>>;
  position?: PortalPosition;
  className?: string;
  error?: string;
  label?: string;
  description?: string;
  disabled?: boolean;
}
