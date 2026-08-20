import * as React from "react";
/**
 * Eyebrow label over a large Anton SC figure — the quoting card's Tarifa Final / Distancia pattern.
 * @startingPoint section="Data" subtitle="Eyebrow label + monumental figure" viewport="700x160"
 */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode; value: React.ReactNode; unit?: React.ReactNode;
  /** White-on-blue treatment */
  onInvert?: boolean;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
