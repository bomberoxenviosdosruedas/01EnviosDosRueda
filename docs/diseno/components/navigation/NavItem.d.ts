import * as React from "react";
/** Navbar link on the blue header bar: cell borders, yellow icon, yellow underline wipe on hover. */
export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: React.ReactNode; icon?: React.ReactNode;
  active?: boolean; hasDropdown?: boolean;
}
export declare function NavItem(props: NavItemProps): JSX.Element;
