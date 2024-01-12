import cnBind from "classnames/bind";
import styles from "./card-auto.module.scss";
import Image from "next/image";
import { Title } from "@/components/atoms/Title/Title";
import { CardAutoType } from "@/const/interfaces";
import car from "@/public/assets/img/ford-focus-universal.jpg";

const cx = cnBind.bind(styles);

export const CardAuto = ({ name = "", img = car, money = "", year = "", weight = "", height = "" }: CardAutoType) => {

    return (
        <div className={cx("container")}>
            <div className={cx("wrapper")}>
                <div className={cx("view-auto")}>
                    <Image priority className={cx("img")} src={img} alt={name} />
                </div>
                <div className={cx("description")}>
                    <Title levet="h2" classNames={cx("caption")}>{name}</Title>
                    <div className={cx("items")}>
                        <span className={cx("item")}>год выпуска: {year}</span>
                        <span className={cx("item")}>допустимый вес: {weight}</span>
                        <span className={cx("item")}>высота: {height}</span>
                        <span className={cx("item")}>цена от: {money} руб/сутки</span>
                    </div>
                </div>
            </div>
        </div>
    );
};