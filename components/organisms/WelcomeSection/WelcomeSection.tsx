import { Container } from '@/components/atoms/Container/Container';
import styles from './style.module.scss';

import { Badge } from '@/components/atoms/Badge/Badge';

export const WelcomeSection = (): JSX.Element => {
	return (
		<section className={styles.welcome} id="welcome">
			<div className={styles.welcome__bg} />
			<Container>
				<Badge className={styles.welcome__contacts} />
				<div className={styles.welcome__content}>
					<h1 className={styles.welcome__text}>Аренда грузовых авто в Витебске</h1>
				</div>
			</Container>
		</section>
	);
};
