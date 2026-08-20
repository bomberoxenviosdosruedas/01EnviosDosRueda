import * as React from "react";
/** Hairline rule. */
export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  /** Use the translucent white rule for blue surfaces */
  onInvert?: boolean;
}
export declare function Separator(props: SeparatorProps): JSX.Element;
