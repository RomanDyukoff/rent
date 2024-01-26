import cnBind from "classnames/bind";
import Image from 'next/image';
import telegram from '@/public/telegram.svg'
import viber from '@/public/viber.svg'


import styles from './style.module.scss'

const cx = cnBind.bind(styles);

export const Badge = (): JSX.Element => {

	return (
		<div className={cx( "badge")}>
			<p>
				Tелефон для связи
			</p>
			<div className={cx("badge__contact")}>
				<div>
					<span>Олеся</span>
					<a href="tel:+375298393593">+375298393593</a>
				</div>
				<div>
					<a href="https://t.me/BogOko" target="_blank">
						<Image src={telegram} alt='telegram' />
					</a>
					<a href="viber://add?+375298393593" target="_blank">
						<Image src={viber} alt='viber' />
					</a>
				</div>
			</div>
		</div>
	)
}
