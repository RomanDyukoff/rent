"use client"

import { Container } from "@/components/atoms/Container/Container";
import styles from "./footer.module.scss";
import cnBind from "classnames/bind";
import { Title } from "@/components/atoms/Title/Title";
import { items, itemsCar } from "@/const/links";
import { NavList } from "@/components/atoms/NavList/NavList";
import logo from "@/public/logo.svg";
import { Logo } from "@/components/atoms/Logo/Logo";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavItemProps } from '@/components/atoms/NavItem/NavItem.type';

const cx = cnBind.bind(styles);
export const Footer = () => {

    const { id } = useParams()
    const [navLink, setNavLink] = useState<NavItemProps[]>([])

    useEffect(() => {
        setNavLink(id ? itemsCar : items)
    }, [id])

    return (
        <footer id="about" className={cx("footer")}>
            <Container classNames={cx("footer-container")}>
                <div className={cx("logo")}>
                    <Logo
                        classNames={cx("footer__logo")}
                        src={logo}
                    />
                    <div className={cx("footer__info")}>
                        <span>
                            ИП Прудников Сергей Олегович
                        </span>
                        <span>
                            УНП 391818928
                        </span>
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
                                <a href="tel:+375298393593" target="_blank">+375 (29) 839-35-93</a>
                            </div>
                            <a href="/" target="_blank"></a>
                            <a href="/" target="_blank"></a>
                            <a href="/" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
