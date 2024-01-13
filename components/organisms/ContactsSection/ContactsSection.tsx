"use client";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { Title } from "@/components/atoms/Title/Title";
import { Container } from "../../atoms/Container/Container";
import styles from "./contacts.module.scss";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);

export const ContactsSection = (): JSX.Element => {
    return (
        <section className={cx("contacts", "section-container")} id="contacts">
            <Container>
                <Title levet="h2" classNames={cx("section-title", " title")}>
                    Контакты
                </Title>
                <div className={cx("contacts__content")}>
                    <div className={cx("info")}>
                        <div className={cx("item")}>
                            <Title levet="h5" classNames={cx("info__title")}>
                                Адрес:
                            </Title>
                            <address className={cx("info__address")}>
                                <span>г. Витебск ул. Фрунзе</span>
                            </address>
                        </div>
                        <div className={cx("item")}>
                            <Title levet="h5" classNames={cx("info__title")}>
                                Телефоны:
                            </Title>
                            <address className={cx("info__address", "phone")}>
                                <span>+375 (25) 916-45-42</span>
                                <span>+375 (29) 278-32-01</span>
                                <span>+375 (17) 399-12-40</span>
                            </address>
                        </div>
                        <div className={cx("item")}>
                            <Title levet="h5" classNames={styles.info__title}>
                                E-MAIL:
                            </Title>
                            <address className={styles.info__address}>
                                <a href="mailto:pchel.com">pchel@bk.ru</a>
                            </address>
                        </div>
                        <div className={cx("item")}>
                            <Title levet="h2" classNames={cx("section-title", " title")}>
                                График работы:
                            </Title>
                            <p className={cx("desc")}>Ежедневно с 09:00-21:00, без выходных. Возврат автомобилей в
                                прокат осуществляется не позднее
                                20:00!!!
                            </p>
                            <p>
                                По предварительному заказу, возможен трансфер автомобиля клиенту и в нерабочее время.
                            </p>
                            <strong>(Заявки принимаются с 09:00 до 21:00!!!!)</strong>
                        </div>
                    </div>

                    <div className={styles.contacts__map}>
                        <YMaps>
                            <Map
                                width="100%"
                                height="400px"
                                defaultState={{ center: [55.184218, 30.202877], zoom: 9 }}
                            />
                        </YMaps>
                    </div>
                </div>
            </Container>
        </section>
    );
};

