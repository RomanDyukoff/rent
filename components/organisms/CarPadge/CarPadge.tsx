"use client"

import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'
import Image, { StaticImageData } from 'next/image'

import auto from '@/public/arenda.jpg'
import done from '@/public/done.svg'
import { Form } from '@/components/molecules/Form/Form'
import { createItemDescrip } from './CreateItemDescrip'

const descItems: { img: StaticImageData, text: string }[] = [
	{
		img: auto,
		text: "свяжитесь с нами",
	},
	{
		img: auto,
		text: "выберете автомобиль",
	},
	{
		img: auto,
		text: "соответствуйте уловиям",
	},
	{
		img: auto,
		text: "начните движение",
	},
]


export const CarPadge = (): JSX.Element => {
	return (
		<section className={styles.car}>
			<Container>
				<div className={styles.car__wrapper}>
					<Title classNames={styles.car__title}>Описание авто</Title>

					<div className={styles.car__descriptions}>
						<div className={styles.car__image}>
							<Image src={auto} alt='auto' />
						</div>
						<ul className={styles.car__list}>
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

					<Title classNames={styles.car__subtitle} levet='h2'>
						Условия аренды
					</Title>

					<div className={styles.descriptions}>
						<div className={styles.descriptions__head}>
							<div className={styles.descriptions__done}>
								<Image src={done} alt='done' />
								<span>Водительское Удостоверение</span>
							</div>
							<div className={styles.descriptions__done}>
								<Image src={done} alt='done' />
								<span>Паспорт РБ</span>
							</div>
							<div className={styles.descriptions__done}>
								<Image src={done} alt='done' />
								<span>Стаж от 1 года</span>
							</div>
						</div>

						<div className={styles.descriptions__body}>
							{
								descItems.map(item => (
									createItemDescrip(item)
								))
							}
						</div>
					</div>

					<Form classNames={styles.car__form} />

				</div>
			</Container>
		</section>
	)
}
