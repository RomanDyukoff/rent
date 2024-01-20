'use client';

import { useCallback, useEffect, useState } from 'react';
import cnBind from "classnames/bind";

import type { NavItemProps } from '../../atoms/NavItem/NavItem';
import { NavList } from '../../atoms/NavList/NavList';

import styles from './style.module.scss';

import Image from 'next/image';
import phone from '@/public/phone.svg'

interface NavigationProps {
	classNames?: string;
	children?: React.ReactNode;
	navItems: NavItemProps[];
}

const cx = cnBind.bind(styles);

export const Navigation = ({
	classNames = '',
	navItems,
	children = null,
}: NavigationProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleButton = useCallback(() => {
		setIsOpen((prevState) => !prevState);
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent): void => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		// const handleOutClick = (event: Event): void => {
		// 	if (event) {
		// 		setIsOpen(false);
		// 	}
		// };


		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<nav className={cx(`${classNames}`, "navigation")}>

			<a className={cx("navigation__link")} href="tel:+375298393593">
				<Image src={phone} alt='phone' />
				+375 29 839 35 93
			</a>

			<button
				onClick={toggleButton}
				className={cx("navigation__burger", `${isOpen ? "open" : ""}`)}
				aria-expanded={isOpen}
				type="button"
			>
				<div />
				<div />
				<div />
			</button>
			<div
				className={cx("navigation__menu", `${isOpen ? "open" : ""}`)}
				aria-hidden={!isOpen}
			>
				{children}
				<NavList classNames={cx("navigation__list")} navItems={navItems} />
			</div>
		</nav>
	);
};
