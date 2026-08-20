import * as React from "react";
export interface TabItem { value: string; label: React.ReactNode; content?: React.ReactNode }
/**
 * Underlined tab set; the active tab is marked with a yellow rule.
 * @startingPoint section="Navigation" subtitle="Tabbed panels with yellow active rule" viewport="700x220"
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[]; defaultValue?: string; onValueChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
