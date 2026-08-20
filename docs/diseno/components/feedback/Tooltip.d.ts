import * as React from "react";
/** Hover hint bubble. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: React.ReactNode; children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
