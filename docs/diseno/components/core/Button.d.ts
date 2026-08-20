import * as React from "react";
/**
 * Primary action control. Blue = primary, yellow = accent CTA.
 * @startingPoint section="Core" subtitle="Brand action buttons in every variant and size" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment */
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link";
  /** Control height / type treatment. xl and hero use Bebas Neue uppercase. */
  size?: "sm" | "default" | "lg" | "xl" | "hero" | "icon";
  /** Square (radius 0) — the sharp navbar "Cotizar Ya" treatment */
  square?: boolean;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
