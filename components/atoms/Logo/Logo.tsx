import Link from 'next/link';

import { Title } from '../Title/Title';

interface LogoProps {
	classNames?: string;
	children?: React.ReactNode;
}

export const Logo = ({ classNames = '', children = null }: LogoProps): JSX.Element => {
	return (
		<Link className={classNames} href="/">
			{children}
		</Link>

	);
};
