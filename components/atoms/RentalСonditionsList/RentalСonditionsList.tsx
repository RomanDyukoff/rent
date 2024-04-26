import Image from 'next/image'
import cnBind from "classnames/bind";
import styles from './style.module.scss'
import { ListDescriptionType } from './rentalConditions.type';


const cx = cnBind.bind(styles);

export const RentalСonditionsList = ({ items, classNames }: ListDescriptionType): JSX.Element => {
	return (
		<ul className={`rental-conditions, ${classNames}`}>
			{
				items.length && items.map((item, i) => (
					<li key={i} className={cx("rental-conditions__item")}>
						<figure className={cx("rental-conditions__image")}>
							<Image src={item.img} alt='picture' />
							<span className={cx("rental-conditions__text")}>
								{item.text}
							</span>
						</figure>
					</li>
				))
			}
		</ul >
	)
}