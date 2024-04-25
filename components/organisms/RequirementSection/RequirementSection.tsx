import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'
import cnBind from "classnames/bind";
import Image from 'next/image'

import licence from '@/public/license.svg';
import passport from '@/public/passport.svg';
import driving from '@/public/driver.svg';
import man from '@/public/man.svg';

const cx = cnBind.bind(styles);

export const RequirementSection = () => {

	return (
		<section id='requi' className={cx("requirement")}>
			<Container>
				<div className={cx("requirement__wrapper")}>
					<Title classNames={cx("section-title")} levet="h2">
						Условия аренды авто
					</Title>
					<div className={cx("requirement__content")}>
						<div className={cx("requirement__docs")}>
							<div className={cx("requirement__card")}>
								<span>Требования к арендатору:</span>
								<div className={cx("requirement__doc")}>
									<Image src={man} alt='man' />
									<span>Возраcт от 19 лет</span>
								</div>
								<div className={cx("requirement__doc")}>
									<Image src={driving} alt='driving' />
									<span>Стаж от 1 года</span>
								</div>
							</div>

							<div className={cx("requirement__card")}>
								<span>Для аренды потребуются:</span>
								<div className={cx("requirement__doc")}>
									<Image src={licence} alt='licence' />
									<span>Водительские права</span>
								</div>
								<div className={cx("requirement__doc")}>
									<Image src={passport} alt='passport' />
									<span>Паспорт РБ</span>
								</div>
							</div>
						</div>

						<Title classNames={cx("requirement__subtitle")} levet='h3'>
							сотрудничаем с организациями, физ. лицами и юр. лицами. <br />

							Форма оплаты любая наличные, без.наличные.
						</Title>
					</div>

				</div>


			</Container>
		</section>
	)
}
