import * as React from "react";
/**
 * Surface container. Service cards use elevation="2xl"; the recommended plan uses accent.
 * @startingPoint section="Core" subtitle="Service cards, plain and recommended" viewport="700x300"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: "sm" | "xl" | "2xl";
  /** 4px yellow border — the "Servicio Recomendado" treatment */
  accent?: boolean;
}
export declare function Card(props: CardProps): JSX.Element;
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Solid brand-blue header block with white text */
  invert?: boolean;
}
export declare function CardHeader(props: CardHeaderProps): JSX.Element;
export declare function CardTitle(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare function CardDescription(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare function CardContent(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare function CardFooter(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
