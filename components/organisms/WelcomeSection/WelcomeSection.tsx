import styles from './style.module.scss';

import { Badge } from '@/components/atoms/Badge/Badge';

export const WelcomeSection = (): JSX.Element => {
	return (
		<section className={styles.welcome} id="welcome">
			<div className={styles.welcome__bg} />
			<div className="container">
				<Badge className={styles.welcome__contacts} />
				<div className={styles.welcome__content}>
					<p className={styles.welcome__text}>Аренда грузовых авто в Витебске</p>
				</div>
			</div>
		</section>
	);
};
