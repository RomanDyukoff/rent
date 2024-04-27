"use client";

import cnBind from "classnames/bind";
import Image from "next/image";

import { CustomLink } from "@/components/atoms/CustomLink/CustomLink";
import { Title } from "@/components/atoms/Title/Title";
import type { CardAutoType } from "@/const/interfaces";

import styles from "./card-auto.module.scss";

const cx = cnBind.bind(styles);

export const CardAuto = ({ name, img, money, year, weight, height, type, id }: CardAutoType): JSX.Element => {
    return (
        <article className={cx("car")}>
            <div className={cx("car__wrapper")}>
                <div className={cx("car__image")}>
                    <Image priority className={cx("img")} src={img} alt="Авто в аренду" />
                </div>
                <div className={cx("car__description")}>
                    <div className={cx("car__list")}>
                        <Title levet="h3" classNames={cx("car__caption")}>
                            {name}
                        </Title>
                        <span className={cx("car__item")}>
                            год выпуска: <strong>{year}</strong>
                        </span>
                        <span className={cx("car__item")}>
                            тип: <strong>{type}</strong>
                        </span>
                        <span className={cx("car__item")}>
                            допустимый вес: <strong>{weight}</strong>
                        </span>
                        <span className={cx("car__item")}>
                            высота: <strong>{height}</strong>
                        </span>
                        <span className={cx("car__item")}>
                            цена от: <strong>{money}</strong> руб/сутки
                        </span>
                    </div>
                    <CustomLink title="подробнее" href="car" id={id} />
                </div>
            </div>
        </article>
    );
};
