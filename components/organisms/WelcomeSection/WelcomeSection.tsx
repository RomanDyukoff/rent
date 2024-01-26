import { Container } from '@/components/atoms/Container/Container';
import styles from './style.module.scss';
import cnBind from "classnames/bind";

import { Badge } from '@/components/atoms/Badge/Badge';
import { Title } from '@/components/atoms/Title/Title';

const cx = cnBind.bind(styles);

export const WelcomeSection = (): JSX.Element => {
	return (
		<section className={cx("welcome")} id="welcome">
			<div className={cx("welcome__bg")} />
			<Container>
				<Badge />
				<div className={cx("welcome__content")}>
					<Title classNames={cx("welcome__text")}>
						Аренда грузовых авто в Витебске
					</Title>
				</div>
			</Container>
		</section>
	);
};
