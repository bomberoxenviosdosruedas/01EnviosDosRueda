import * as React from "react";
export interface AccordionItem { title: React.ReactNode; content: React.ReactNode }
/** FAQ-style disclosure list (Preguntas Frecuentes). */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]; defaultOpen?: number;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
