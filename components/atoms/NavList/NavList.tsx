import React, { forwardRef } from 'react';
import { NavItemProps, NavItem } from '../NavItem/NavItem';

interface NavListProps {
	classNames?: string;
	navItems: NavItemProps[];
}

export const NavList =
	forwardRef<HTMLUListElement, NavListProps>
		(({ classNames = '', navItems }, ref): JSX.Element => {
			return (
				<ul ref={ref} className={classNames}>
					{navItems.map((item, i) => (
						<NavItem key={i} label={item.label} href={item.href} />
					))}
				</ul>
			);
		});
