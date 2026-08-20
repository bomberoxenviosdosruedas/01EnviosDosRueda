import * as React from "react";
/** Transient notification card. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode; description?: React.ReactNode;
  variant?: "default" | "invert"; onClose?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;
