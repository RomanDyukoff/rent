import cnBind from "classnames/bind";
import Image from 'next/image';
import telegram from '@/public/telegram.svg'
import viber from '@/public/viber.svg'


import styles from './style.module.scss'
import Link from 'next/link';

const cx = cnBind.bind(styles);

export const Badge = (): JSX.Element => {

	return (
		<div className={cx("badge")}>
			<p>
				Tелефон для связи
			</p>
			<div className={cx("badge__contact")}>
				<Link href="tel:+375298393593">+375298393593</Link>
				<div>
					<Link href="https://t.me/Olesya_luk" target="_blank">
						<Image src={telegram} alt='telegram' />
					</Link>
					<Link href='viber://chat?number=%2B375298393593' target='_blank'>
						<Image src={viber} alt='viber' />
					</Link>
				</div>
			</div>
		</div>
	)
}
