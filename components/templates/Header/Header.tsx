import { Container } from '@/components/atoms/Container/Container';
import { Logo } from '@/components/atoms/Logo/Logo';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import styles from './style.module.scss';
import { items } from "@/const/links";
import Image from 'next/image';

import logo from "@/public/logo.svg"

export const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<Logo
					classNames={styles.header__logo}
					children={
						<Image src={logo} alt='logo' />
					}
				/>
				<Navigation classNames={styles.header__nav} navItems={items} />
			</Container>
		</header>
	);
};
