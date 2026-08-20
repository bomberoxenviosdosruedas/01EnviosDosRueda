import * as React from "react";
/** Determinate progress bar (delivery stage). */
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; accent?: boolean;
}
export declare function Progress(props: ProgressProps): JSX.Element;
