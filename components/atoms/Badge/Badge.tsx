import Image from 'next/image';
import telegram from '@/public/telegram.svg'
import viber from '@/public/viber.svg'


import styles from './style.module.scss'

export const Badge = ({ className }: { className: string }): JSX.Element => {
	return (
		<div className={`${styles.badge} ${className}`}>
			<p>
				Tелефон для связи
			</p>
			<div className={styles.badge__contact}>
				<div>
					<span>Олеся</span>
					<a href="tel:+375298393593">+375298393593</a>
				</div>
				<div>
					<a href="#">
						<Image src={telegram} alt='telegram' />
					</a>
					<a href="#">
						<Image src={viber} alt='viber' />
					</a>
				</div>
			</div>
		</div>
	)
}
