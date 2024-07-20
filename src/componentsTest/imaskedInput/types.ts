export type InputSize = "lg" | "md" | "sm";

export interface IMaskedInputProps {
  required?: boolean;
  label?: string;
  className?: string;
  inputSize?: InputSize;
  error?: string;
  description?: string;
  inputProps?: unknown;
}
