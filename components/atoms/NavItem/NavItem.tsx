import cnBind from "classnames/bind";
import styles from './style.module.scss';
import { NavItemProps } from './NavItem.type';



const cx = cnBind.bind(styles);

export const NavItem = ({ href, label }: NavItemProps): JSX.Element => {
	return (
		<li className={cx("item")}>
			<a className={cx("item__link")} href={href}>
				{label}
			</a>
		</li>
	);
};
