import * as React from "react";
/** Modal over a blurred blue scrim. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean; title?: React.ReactNode; description?: React.ReactNode;
  footer?: React.ReactNode; onClose?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
