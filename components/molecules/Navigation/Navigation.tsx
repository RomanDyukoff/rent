'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useEffect, useState } from 'react';

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


		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<nav className={`${classNames} ${styles.navigation}`}>

			<a className={styles.navigation__link} href="tel:+375298393593">
				<Image src={phone} alt='phone' />
				+375 29 839 35 93
			</a>

			<button
				onClick={toggleButton}
				className={`${styles.navigation__burger} ${isOpen ? `${styles.open}` : ''}`}
				aria-expanded={isOpen}
				type="button"
			>
				<div />
				<div />
				<div />
			</button>
			<div
				className={`${styles.navigation__menu} ${isOpen ? `${styles.open}` : ''}`}
				aria-hidden={!isOpen}
			>
				{children}
				<NavList classNames={styles.navigation__list} navItems={navItems} />
			</div>
		</nav>
	);
};
