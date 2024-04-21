import cnBind from "classnames/bind";
import styles from "./description.module.scss";
import { Container } from '@/components/atoms/Container/Container';
import { Title } from '@/components/atoms/Title/Title';
import Image from 'next/image';
import auto from '../../../public/assets/img/desk.jpg';

const cx = cnBind.bind(styles);

export const Description = (): JSX.Element => {
	return (
		<section className={cx('description')}>
			<Container>
				<div className={cx('description__wrapper')}>
					<Title levet='h2' classNames='section-title'>Для кого наши авто</Title>
					<article className={cx('description__content')}>
						<p className={cx('description__text')}>
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
						</p>
						<div className={cx('description__image')}>
							<Image className={cx('description__image')} src={auto} alt='auto' />
						</div>
					</article>
				</div>
			</Container>
		</section>
	)

}