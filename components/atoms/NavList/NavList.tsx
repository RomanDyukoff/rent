import React, { forwardRef } from "react";

import { NavItem } from "../NavItem/NavItem";

import type { NavListProps } from "./NavList.type";

export const NavList = forwardRef<HTMLUListElement, NavListProps>(({ classNames = "", navItems }, ref): JSX.Element => {
    return (
        <ul ref={ref} className={classNames}>
            {navItems.map((item, i) => (
                <NavItem key={i} label={item.label} href={item.href} />
            ))}
        </ul>
    );
});
