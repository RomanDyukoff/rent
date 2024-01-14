import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'

export const CarPadge = (): JSX.Element => {
	return (
		<section className={styles.car}>
			<Container classNames={styles.car__conatiner}>
				<Title classNames={styles.car__title}>Описание авто</Title>

				<div className={styles.car__descriptions}>
					<div className={styles.car__image}></div>

				</div>

			</Container>
		</section>
	)
}
