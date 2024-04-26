import Link from 'next/link';
import Image from 'next/image';
import { LogoProps } from './Logo.type';



export const Logo = ({ classNames = '', src }: LogoProps): JSX.Element => {
	return (
		<Link className={classNames} href="/">
			<Image src={src} alt='logo' />
		</Link>

	);
};
