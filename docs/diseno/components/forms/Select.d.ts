import * as React from "react";
export interface SelectOption { value: string; label: string }
/** Native dropdown styled to the brand controls. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]; placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
