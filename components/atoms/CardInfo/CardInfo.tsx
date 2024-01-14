import cnBind from "classnames/bind";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";

const cx = cnBind.bind(styles);
export const CardInfo = ({ src, title, i }: { src: StaticImageData, title: string, i: number }) => {
    return (
        <div className={cx("card")}>
            <Image className={cx("card__img")} src={src} alt={title} />
            <div className={cx("card__items")}>
                <span className={cx("card__item", "item-color")}>{i}</span>
                <span className={cx("card__item")}>{title}</span>
            </div>
        </div>
    );
};