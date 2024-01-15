"use client"

import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'
import Image from 'next/image'

import auto from '@/public/arenda.jpg'
import done from '@/public/done.svg'
import { Form } from '@/components/molecules/Form/Form'
import cnBind from "classnames/bind";
import { RentalСonditionsList } from '@/components/atoms/RentalСonditionsList/RentalСonditionsList'
import { rentalItem } from '@/const/rentalItem'


const cx = cnBind.bind(styles);

export const CarPadge = (): JSX.Element => {
	return (
		<section className={cx("car")}>
			<Container>
				<div className={cx("car__wrapper")}>
					<Title classNames={cx("car__title")}>
						Описание авто
					</Title>

					<div className={cx("car__descriptions")}>
						<div className={cx("car__image")}>
							<Image src={auto} alt='auto' />
						</div>
						<ul className={cx("car__list")}>
							<li>Модель: </li>
							<li>Тип: </li>
							<li>Расход:</li>
							<li>Топливо:</li>
							<li>Количество мест:</li>
							<li>Грузовой отсек:</li>
							<li>Высота:</li>
							<li>Грузоподъёмность:</li>
						</ul>
					</div>

					<Title classNames={cx("section-title")} levet='h2'>
						Условия аренды
					</Title>

					<div className={cx("descriptions")}>
						<div className={cx("descriptions__head")}>
							<div className={cx("descriptions__done")}>
								<Image src={done} alt='done' />
								<span>Водительское Удостоверение</span>
							</div>
							<div className={cx("descriptions__done")}>
								<Image src={done} alt='done' />
								<span>Паспорт РБ</span>
							</div>
							<div className={cx("descriptions__done")}>
								<Image src={done} alt='done' />
								<span>Стаж от 1 года</span>
							</div>
						</div>

						<RentalСonditionsList
							classNames={cx("descriptions__body")}
							items={rentalItem}
						/>

					</div>

					<Form classNames={cx("car__form")} />

				</div>
			</Container>
		</section >
	)
}
