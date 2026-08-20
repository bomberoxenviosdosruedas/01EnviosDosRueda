import * as React from "react";
/** Boolean checkbox with optional inline label. */
export interface CheckboxProps {
  checked?: boolean; defaultChecked?: boolean; disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void; label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
