import { Container } from '@/components/atoms/Container/Container'
import styles from './style.module.scss'
import { Title } from '@/components/atoms/Title/Title'
import Image from 'next/image'

import licence from '@/public/license.svg'
import passport from '@/public/passport.svg'

export const RequirementSection = () => {
	return (
		<section id='requi' className={styles.requirement}>
			<Container>
				<Title classNames={styles.requirement__title} levet="h2" children="Условия аренды авто" />

				<div className={styles.requirement__wrapper}>
					<div className={styles.requirement__card}>
						<span>Требования к арендатору</span>
						<div className={styles.requirement__box}>
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

					<div className={styles.requirement__card}>
						<span>Для аренды потребуется:</span>
						<div className={styles.requirement__doc}>
							<Image src={licence} alt='licence' />
							<span>Права</span>
						</div>
						<div className={styles.requirement__doc}>
							<Image src={passport} alt='passport' />
							<span>Паспорт</span>
						</div>
					</div>

				</div>

			</Container>
		</section>
	)
}
