import * as React from "react";
/** Small status / label pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "glass";
  /** Glowing yellow status dot (the "Servicio Disponible" pattern) */
  dot?: boolean;
}
export declare function Badge(props: BadgeProps): JSX.Element;
