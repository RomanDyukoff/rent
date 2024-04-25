import { Container } from '@/components/atoms/Container/Container';
import styles from './style.module.scss';
import cnBind from "classnames/bind";
import Image from 'next/image';
import { Title } from '@/components/atoms/Title/Title';
import Link from 'next/dist/client/link';
import telegram from '@/public/telegram_logo.svg'
import viber from '@/public/viber_logo.svg'


const cx = cnBind.bind(styles);

const data = {
	title: 'АРЕНДА ГРУЗОВЫХ АВТО',
	text: 'Оставьте заявку и мы перезвоним Вам в течении 30 минут'
}

const { title, text } = data;

export const WelcomeSection = (): JSX.Element => {
	return (
		<section className={cx("welcome")} id="welcome">
			<div className={cx("welcome__bg")} />
			<Container>
				<div className={cx('welcome__wrapper')}>
					<div className={cx("welcome__contact")}>
						<Link href="tel:+375298393593">+375298393593</Link>
						<div>
							<Link href="https://t.me/Olesya_luk" target="_blank">
								<Image src={telegram} alt='telegram' />
							</Link>
							<Link href='viber://chat?number=%2B375298393593' target='_blank'>
								<Image src={viber} alt='viber' />
							</Link>
						</div>

					</div>

					<article className={cx("content")}>
						<Title levet='h1' classNames={cx("content__title")}>
							{title}
						</Title>
						<p className={cx("content__text")}>
							г.ВИТЕБСК категория "B"
						</p>
						<p className={cx("content__text")}>
							{text}
						</p>
					</article>
				</div>
			</Container>
		</section>
	);
};
