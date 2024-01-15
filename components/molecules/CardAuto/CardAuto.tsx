import cnBind from "classnames/bind";
import styles from "./card-auto.module.scss";
import Image from "next/image";
import { Title } from "@/components/atoms/Title/Title";
import { CardAutoType } from "@/const/interfaces";
import Link from "next/link";

const cx = cnBind.bind(styles);

export const CardAuto = ({ name, img, money, year, weight, height, type }: CardAutoType): JSX.Element => {

    return (
        <Link className={cx("car")} href="/car">
            <div className={cx("container")}>
                <div className={cx("wrapper")}>
                    <div className={cx("view-auto")}>
                        <Image priority className={cx("img")} src={img} alt="Авто в аренду" />
                    </div>
                    <div className={cx("description")}>
                        <Title levet="h2" classNames={cx("caption")}>{name}</Title>
                        <div className={cx("items")}>
                            <span className={cx("item")}>год выпуска: <strong>{year}</strong></span>
                            <span className={cx("item")}>тип: <strong>{type}</strong></span>
                            <span className={cx("item")}>допустимый вес: <strong>{weight}</strong></span>
                            <span className={cx("item")}>высота: <strong>{height}</strong></span>
                            <span className={cx("item")}>цена от: <strong>{money}</strong> руб/сутки</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};