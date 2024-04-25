'use client'

import cnBind from "classnames/bind";
import styles from "./description.module.scss";
import { Container } from '@/components/atoms/Container/Container';
import { Title } from '@/components/atoms/Title/Title';
import Image, { StaticImageData } from 'next/image';
import driver from '../../../public/assets/img/driver.jpg';
import gaz from '@/public/assets/img/gaz3.jpg'
import gaz2 from '@/public/assets/img/gaz4.jpg'



const cx = cnBind.bind(styles);

type RentType = {
	title: string,
	text: string[][],
	image: StaticImageData,
}
type WhomType = {
	title: string,
	text: JSX.Element,
	image: StaticImageData,
}

interface DescriptionDataType {
	rent: RentType;
	whom: WhomType;
}

const WhomText = (): JSX.Element => (
	<>
		Для тех кто выбирает доступный, удобный и надёжный
		автомобиль для выполнения перевозки мебели, строительных
		материалов или другого груза, самым лучшим и оптимальным решением
		станет аренда у <span>AVTORENTAL</span> грузового авто без водителя.
		Такой вариант подойдёт при необходимости использовать автомобиль
		для транспортировки коробок и мебели выполняя переезд, когда до
		последней минуты точно не знаешь за какое время справишься, так
		и для доставки шкафов, диванов, стройматериалов.
		У нас нет ограничений по типу груза, поэтому вы можете взять в
		аренду грузовое авто без водителя на сутки и более для любых целей.
	</>
);
const descriptionData: DescriptionDataType = {
	rent: {
		title: 'Какой автомобиль вы берете в аренду ',
		text: [
			['Технически исправный автомобиль.'],
			['Регулярное обслуживание.', 'Включает замену масла и воздушных фильтров.'],
			['Чистый кузов.', 'Вы всегда получаете аккуратный и чистый автомобиль.'],
			['Чистка салона.', 'Никакой пыли и грязи. Ухоженный салон без дефектов.'],
		],
		image: gaz,
	},
	whom: {
		title: 'Для кого наши авто',
		text: WhomText(),
		image: gaz2,
	}
}



export const Description = ({ revers = false }: { revers?: boolean }): JSX.Element => {
	const data: RentType | WhomType = revers ? descriptionData.rent : descriptionData.whom;

	const printList = ({ data }: { data: string[][] }): JSX.Element => {
		return (
			<ol className={cx('description__list')}>
				{data.map((el, i) => (
					<li key={i}>
						{
							el.length === 2 ?
								(<>
									<span>{el[0]}</span>
									<span>{el[1]}</span>
								</>) :
								<span>{el[0]}</span>
						}
					</li>
				))}
			</ol>
		)
	}

	return (
		<section className={cx('description')}>
			<Container>
				<div className={cx('description__wrapper')}>
					<Title levet='h2' classNames='section-title'>{data.title}</Title>
					<article className={cx(`description__content`, `${revers ? 'reverse' : ''}`)} >
						{

							Array.isArray(data.text) ?
								printList({ data: data.text }) :
								<p className={cx('description__text')}>
									{
										data.text
									}
								</p>
						}
						<div className={cx('description__image')}>
							<Image className={cx('description__image')} src={revers ? gaz2 : gaz} alt='auto' />
						</div>
					</article>
				</div>
			</Container>
		</section>
	)

}