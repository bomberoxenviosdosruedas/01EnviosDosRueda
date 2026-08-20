import * as React from "react";
/** Tariff / shipment table with Bebas Neue headers and zebra rows. */
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: React.ReactNode[]; rows: React.ReactNode[][]; caption?: React.ReactNode;
}
export declare function Table(props: TableProps): JSX.Element;
