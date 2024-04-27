import Image from "next/image";
import Link from "next/link";

import type { LogoProps } from "./Logo.type";

export const Logo = ({ classNames = "", src }: LogoProps): JSX.Element => {
    return (
        <Link className={classNames} href="/">
            <Image src={src} alt="logo" />
        </Link>
    );
};
