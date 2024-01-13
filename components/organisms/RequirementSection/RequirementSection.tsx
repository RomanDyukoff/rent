import { Title } from '@/components/atoms/Title/Title'
import styles from './style.module.scss'
import Image from 'next/image'

import pass from '@/public/passport.svg'
import license from '@/public/license.svg'

export const RequirementSection = () => {
	return (
		<section id='requi' className={styles.requirement}>
			<div className='container'>
				<Title classNames={styles.requirement__title} levet="h2" children="Условия аренды" />

				<ul className={styles.requirement__list}>
					<li>
						<span>Водительские права</span>
						<Image src={license} alt='license' />
					</li>
					<li>
						<span>Паспорт</span>
						<Image src={pass} alt='pass' />
					</li>
				</ul>

			</div>
		</section>
	)
}
