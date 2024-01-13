import { Container } from '@/components/atoms/Container/Container';
import { Logo } from '@/components/atoms/Logo/Logo';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import styles from './style.module.scss';
import { items } from "@/const/links";

export const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<Container classNames={styles.header__container}>
				<Logo classNames={styles.header__title} />
				<Navigation classNames={styles.header__nav} navItems={items} />
			</Container>
		</header>
	);
};
