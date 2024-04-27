"use client";

import cnBind from "classnames/bind";

import { Title } from "@/components/atoms/Title/Title";
import { Form } from "@/components/molecules/Form/Form";

import { Container } from "../../atoms/Container/Container";

import styles from "./contacts.module.scss";

const cx = cnBind.bind(styles);

export const ContactsSection = (): JSX.Element => {
    return (
        <section className={cx("contacts")} id="contacts">
            <Container>
                <div className={cx("contacts__content")}>
                    <div className={cx("info")}>
                        <Title levet="h2" classNames={cx("section-title")}>
                            График работы:
                        </Title>
                        <p className={cx("desc")}>Ежедневно с 08:00-20:00.</p>
                        <p>Без выходных.</p>
                        <p>Возврат автомобилей в прокат осуществляется не позднее 20:00.</p>
                        <strong>(Заявки принимаются с 08:00 до 20:00)</strong>
                    </div>

                    <div className={cx("form")}>
                        <Title levet="h2" classNames={cx("section-title")}>
                            Забронировать авто
                        </Title>
                        <Form />
                    </div>
                </div>
            </Container>
        </section>
    );
};
