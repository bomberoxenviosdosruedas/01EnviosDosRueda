import * as React from "react";
/** Range input (weight / distance pickers). */
export interface SliderProps {
  min?: number; max?: number; defaultValue?: number;
  onValueChange?: (value: number) => void; style?: React.CSSProperties;
}
export declare function Slider(props: SliderProps): JSX.Element;
