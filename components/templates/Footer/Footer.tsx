"use client";

import { useEffect, useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Container } from "@/components/atoms/Container/Container";
import { Logo } from "@/components/atoms/Logo/Logo";
import type { NavItemProps } from "@/components/atoms/NavItem/NavItem.type";
import { NavList } from "@/components/atoms/NavList/NavList";
import { Title } from "@/components/atoms/Title/Title";
import { items, itemsCar } from "@/const/links";
import logo from "@/public/logo.svg";

import styles from "./footer.module.scss";

const cx = cnBind.bind(styles);
export const Footer = () => {
    const { id } = useParams();
    const [navLink, setNavLink] = useState<NavItemProps[]>([]);

    useEffect(() => {
        setNavLink(id ? itemsCar : items);
    }, [id]);

    return (
        <footer id="about" className={cx("footer")}>
            <Container classNames={cx("footer-container")}>
                <div className={cx("logo")}>
                    <Logo classNames={cx("footer__logo")} src={logo as string} />
                    <div className={cx("footer__info")}>
                        <span>ИП Прудников Сергей Олегович</span>
                        <span>УНП 391818928</span>
                    </div>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("nav")}>
                        <Title classNames={cx("caption")}>Основное</Title>
                        <NavList classNames={cx("menu")} navItems={navLink} />
                    </div>
                    <div className={cx("contact")}>
                        <Title classNames={cx("caption")}>Контакты</Title>
                        <div className={cx("links")}>
                            <div className={cx("phone")}>
                                <a href="tel:+375298393593" target="_blank" rel="noreferrer">
                                    +375 (29) 839-35-93
                                </a>
                            </div>
                            <Link href="/" target="_blank" />
                            <Link href="/" target="_blank" />
                            <Link href="/" target="_blank" />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
