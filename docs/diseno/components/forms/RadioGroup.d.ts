import * as React from "react";
export interface RadioOption { value: string; label: React.ReactNode }
/** Single-choice radio list. */
export interface RadioGroupProps {
  options: RadioOption[]; value?: string; defaultValue?: string;
  onValueChange?: (value: string) => void; style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
