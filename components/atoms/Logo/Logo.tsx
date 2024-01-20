import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';


interface LogoProps {
	classNames?: string;
	src: StaticImageData;
}

export const Logo = ({ classNames = '', src }: LogoProps): JSX.Element => {
	return (
		<Link className={classNames} href="/">
			<Image src={src} alt='logo' />
		</Link>

	);
};
