import styles from './style.module.scss'
import cnBind from "classnames/bind";
import Link from "next/link";

interface CustomLinkType {
	href: string;
	title: string;
}

const cx = cnBind.bind(styles);

export const CustomLink = ({ href, title }: CustomLinkType) => {
	return (
		<Link
			href={href}
			className={cx("btn", "btn-white", "btn-animate")}>
			{title}
		</Link>
	)
}
