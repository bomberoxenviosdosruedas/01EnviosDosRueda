import * as React from "react";
/** On/off toggle. */
export interface SwitchProps {
  checked?: boolean; defaultChecked?: boolean; disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void; style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
