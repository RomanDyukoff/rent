import { Container } from '@/components/atoms/Container/Container';
import styles from './style.module.scss';
import cnBind from "classnames/bind";
import Image from 'next/image';
import { Title } from '@/components/atoms/Title/Title';
import Link from 'next/dist/client/link';
import telegram from '@/public/telegram_logo.svg'
import viber from '@/public/viber_logo.svg'
import { welcomeData } from '@/const/welcomeData';
import arenda from '@/public/arenda.webp'
import arendaMob from '@/public/arenda-mob.webp'
import arendaMd from '@/public/arenda-md.webp'
import arendaMd2 from '@/public/arenda-md2.webp'


const cx = cnBind.bind(styles);

const { title, text, phone } = welcomeData;

export const WelcomeSection = (): JSX.Element => {
	return (
		<section className={cx("welcome")} id="welcome">
			<picture className={cx("welcome__bg")}>
				<source srcSet={arendaMob.src} media="(max-width: 580px)" />
				<source srcSet={arendaMd2.src} media="(max-width: 660px)" />
				<source srcSet={arendaMd.src} media="(max-width: 990px)" />
				<Image src={arenda} alt='cover' />
			</picture>
			<Container>
				<div className={cx('welcome__wrapper')}>
					<div className={cx("welcome__contact")}>
						<Link href={`tel:${phone}`}>{phone}</Link>
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
		</section >
	);
};
