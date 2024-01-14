import { Container } from "@/components/atoms/Container/Container";

import styles from "./footer.module.scss";
import cnBind from "classnames/bind";
import { Title } from "@/components/atoms/Title/Title";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import { items } from "@/const/links";
import { NavList } from "@/components/atoms/NavList/NavList";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Logo } from "@/components/atoms/Logo/Logo";

const cx = cnBind.bind(styles);
export const Footer = () => {
    return (
        <footer className={cx("footer")}>
            <Container classNames={cx("footer-container")}>
                <div className={cx("logo")}>
                    <Logo
                        classNames={cx("footer__logo")}
                        children={
                            <Image src={logo} alt='logo' />
                        }
                    />
                    <span>
                        Название организации и УНП
                    </span>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("nav")}>
                        <Title classNames={cx("caption")}>Основное</Title>
                        <NavList classNames={cx("menu")} navItems={items} />
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
