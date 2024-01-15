import Image, { StaticImageData } from 'next/image'
import cnBind from "classnames/bind";
import styles from './style.module.scss'

export interface ItemDescriptionType {
	img: StaticImageData;
	text: string;
}

export interface ListDescriptionType {
	items: ItemDescriptionType[]
	classNames?: string;
}

const cx = cnBind.bind(styles);

export const RentalСonditionsList = ({ items, classNames }: ListDescriptionType): JSX.Element => {
	return (
		<ul className={`rental-conditions, ${classNames}`}>
			{
				items.length && items.map((item, i) => (
					<li key={i} className={cx("rental-conditions__item")}>
						<div className={cx("rental-conditions__image")}>
							<Image src={item.img} alt='picture' />
						</div>
						<span className={cx("rental-conditions__text")}>
							{item.text}
						</span>
					</li>
				))
			}
		</ul>
	)
}