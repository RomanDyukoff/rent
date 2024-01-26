import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'
import cnBind from "classnames/bind";
import Image from 'next/image'

import licence from '@/public/license.svg'
import passport from '@/public/passport.svg'

const items: string[] = [
	"Автомобиль выдаётся чистым",
	"С исходным количеством топлива",
	"Возвращается в чистом виде",
	"Без взимания оплаты платных дорог",
]

const createItem = (string: string): JSX.Element => {
	return <li>{string}</li>
}

const cx = cnBind.bind(styles);

export const RequirementSection = () => {

	return (
		<section id='requi' className={cx("requirement")}>
			<Container>
				<Title classNames={cx("section-title")} levet="h2">
					Условия аренды авто
				</Title>

				<div className={cx("requirement__wrapper")}>

					<div className={cx("requirement__docs")}>
						<div className={cx("requirement__card")}>
							<span>Требования к арендатору</span>
							<div className={cx("requirement__box")}>
								<div>
									<span>от 19 лет</span>
									<span>Возраcт</span>
								</div>
								<div>
									<span>от 1 года</span>
									<span>Стаж</span>
								</div>
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

					<ul className={cx("requirement__list")}>
						{
							items.length && items.map(item => (
								createItem(item)
							))
						}
					</ul>
					<Title classNames={cx("requirement__subtitle")} levet='h3'>
						сотрудничаем с организациями и юр лицами
					</Title>
				</div>


			</Container>
		</section>
	)
}
