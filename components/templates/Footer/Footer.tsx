import { Container } from "@/components/atoms/Container/Container";

import styles from "./footer.module.scss";
import cnBind from "classnames/bind";
import { Title } from "@/components/atoms/Title/Title";
import { Navigation } from "@/components/molecules/Navigation/Navigation";

const cx = cnBind.bind(styles);
export const Footer = () => {
    return (
        <footer className={cx("footer")}>
            <Container classNames={cx("footer-container")}>
                <div className={cx("logo")}>
                    Название фирмы(Может даже пнг)
                    <span>
                        Название организации и УНП
                    </span>
                </div>
                <div className={cx("panel")}>
                    <div className={cx("nav")}>
                        <Title classNames={cx("caption")}>Основное</Title>
                        <Navigation classNames={"header__nav"} navItems={[]} />
                    </div>
                    <div className={cx("contact")}>
                        <Title classNames={cx("caption")}>Контакты</Title>
                        <div className={cx("links")}>
                            <div className={cx("phone")}>
                                <a href="/" target="_blank">+3752985745</a>
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
