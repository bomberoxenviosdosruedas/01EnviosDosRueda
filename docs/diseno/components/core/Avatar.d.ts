import * as React from "react";
/** Circular image or initials. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string; alt?: string; initials?: string; size?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
