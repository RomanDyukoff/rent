import { Container } from '@/components/atoms/Container/Container';
import styles from './style.module.scss';
import cnBind from "classnames/bind";

import { Badge } from '@/components/atoms/Badge/Badge';
import { Title } from '@/components/atoms/Title/Title';

const cx = cnBind.bind(styles);

const data = {
	title: 'АРЕНДА ГРУЗОВЫХ АВТО г.ВИТЕБСК категории "B"',
	text: 'Оставьте заявку на сайте мы перезвоними Вам в течении 30 минут'
}

const { title, text } = data;

export const WelcomeSection = (): JSX.Element => {
	return (
		<section className={cx("welcome")} id="welcome">
			<div className={cx("welcome__bg")} />
			<Container>
				<div className={cx('welcome__wrapper')}>
					<article className={cx("content")}>
						<Title levet='h1' classNames={cx("content__title")}>
							{title}
						</Title>
						<p className={cx("content__text")}>
							{text}
						</p>
					</article>
					<Badge />
				</div>
			</Container>
		</section>
	);
};
