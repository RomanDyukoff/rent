import { Container } from '@/components/atoms/Container/Container';
import { Logo } from '@/components/atoms/Logo/Logo';
import type { NavItemProps } from '@/components/atoms/NavItem/NavItem';
import { Navigation } from '@/components/molecules/Navigation/Navigation';

import phone from '@/public/phone.svg'



import styles from './style.module.scss';
import Image from 'next/image';

const items: NavItemProps[] = [
	{ href: '#about', label: 'О Нас' },
	{ href: '#park', label: 'Парк' },
	{ href: '#requi', label: 'Условия' },
	{ href: '#contacts', label: 'Контакты' },
];

export const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<Logo classNames={styles.header__title} />
				<Navigation classNames={styles.header__nav} navItems={items} />
				<a className={styles.header__link} href="tel:+375 29 784 4444">
					<Image src={phone} alt='phone' />
					+375 29 784 4444
				</a>
			</Container>
		</header>
	);
};
