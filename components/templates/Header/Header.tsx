"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Container } from "@/components/atoms/Container/Container";
import { Logo } from "@/components/atoms/Logo/Logo";
import type { NavItemProps } from "@/components/atoms/NavItem/NavItem.type";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import { items, itemsCar } from "@/const/links";
import logo from "@/public/logo.svg";

import styles from "./style.module.scss";

export const Header = (): JSX.Element => {
    const { id } = useParams();
    const [navLink, setNavLink] = useState<NavItemProps[]>([]);

    useEffect(() => {
        setNavLink(id ? itemsCar : items);
    }, [id]);

    return (
        <header className={styles.header}>
            <Container classNames={styles.header__container}>
                <Logo classNames={styles.header__logo} src={logo as string} />
                <Navigation classNames={styles.header__nav} navItems={navLink} />
            </Container>
        </header>
    );
};
