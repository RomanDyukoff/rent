// "use client"

import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'
import Image from 'next/image'

import done from '@/public/done.svg'
import cnBind from "classnames/bind";
import { RentalСonditionsList } from '@/components/atoms/RentalСonditionsList/RentalСonditionsList'
import { rentalItem } from '@/const/rentalItem'
import { listCars } from "@/const/listCars";



const cx = cnBind.bind(styles);

export const CarPadge = ({ params }: { params: string }): JSX.Element => {

	const data = listCars.filter(el => el.id === params)[0];

	const { name, type, consumption, fuel, seats, cargospace, height, weight, img } = data;

	return (
		<section className={cx("car")}>
			<Container>
				<div className={cx("car__wrapper")}>
					<Title id="auto" classNames={cx("car__title")}>
						Описание авто
					</Title>

					<div className={cx("car__descriptions")}>
						<div className={cx("car__image")}>
							<Image src={img} alt='auto' />
						</div>
						<ul className={cx("car__list")}>
							<li>Модель: {name}</li>
							<li>Тип: {type}</li>
							<li>Расход: {consumption}</li>
							<li>Топливо: {fuel}</li>
							<li>Количество мест: {seats}</li>
							<li>Грузовой отсек: {cargospace}</li>
							<li>Высота: {height}</li>
							<li>Грузоподъёмность: {weight}</li>
						</ul>
					</div>

					<Title id="requi" classNames={cx("section-title")} levet='h2'>
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

				</div>
			</Container>
		</section >
	)
}
