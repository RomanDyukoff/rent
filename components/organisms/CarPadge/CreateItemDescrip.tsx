import Image, { StaticImageData } from 'next/image'
import styles from './style.module.scss'


export const createItemDescrip = ({ img, text }: { img: StaticImageData, text: string }): JSX.Element => {
	return (
		<div className={styles.descriptions__item}>
			<div className={styles.descriptions__image}>
				<Image src={img} alt='picture' />
			</div>
			<span className={styles.descriptions__text}>
				{text}
			</span>
		</div>
	)
}
