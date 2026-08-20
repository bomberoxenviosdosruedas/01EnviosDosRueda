import * as React from "react";
/** Field label; eyebrow renders the Bebas Neue micro-label used across the site. */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  eyebrow?: boolean; onInvert?: boolean;
}
export declare function Label(props: LabelProps): JSX.Element;
