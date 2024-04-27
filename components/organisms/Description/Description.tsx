"use client";

import cnBind from "classnames/bind";
import Image from "next/image";

import { Container } from "@/components/atoms/Container/Container";
import { Title } from "@/components/atoms/Title/Title";
import { descriptionData } from "@/const/descriptionData";

import type { RentType, WhomType } from "./Description.type";

import styles from "./description.module.scss";

const cx = cnBind.bind(styles);

export const Description = ({ revers = false }: { revers?: boolean }): JSX.Element => {
    const data: RentType | WhomType = revers ? descriptionData.rent : descriptionData.whom;

    const printList = ({ data }: { data: string[][] }): JSX.Element => {
        return (
            <ol className={cx("description__list")}>
                {data.map((el, i) => (
                    <li key={i}>
                        {el.length === 2 ? (
                            <>
                                <span>{el[0]}</span>
                                <span>{el[1]}</span>
                            </>
                        ) : (
                            <span>{el[0]}</span>
                        )}
                    </li>
                ))}
            </ol>
        );
    };

    return (
        <section className={cx("description")}>
            <Container>
                <div className={cx("description__wrapper")}>
                    <Title levet="h2" classNames="section-title">
                        {data.title}
                    </Title>
                    <article className={cx(`description__content`, `${revers ? "reverse" : ""}`)}>
                        {Array.isArray(data.text) ? (
                            printList({ data: data.text })
                        ) : (
                            <p className={cx("description__text")}>{data.text}</p>
                        )}
                        <div className={cx("description__image")}>
                            <Image
                                className={cx("description__image")}
                                src={revers ? descriptionData.rent.image : descriptionData.whom.image}
                                alt="auto"
                            />
                        </div>
                    </article>
                </div>
            </Container>
        </section>
    );
};
