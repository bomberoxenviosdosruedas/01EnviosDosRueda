import * as React from "react";
/** Inline message block. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "destructive";
  title?: React.ReactNode; icon?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
