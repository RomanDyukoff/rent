import cnBind from "classnames/bind";
import Image from "next/image";

import type { ListDescriptionType } from "./rentalConditions.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const RentalСonditionsList = ({ items, classNames }: ListDescriptionType): JSX.Element => {
    return (
        <ul className={cx("rental-conditions", classNames)}>
            {items.length &&
                items.map((item, i) => (
                    <li key={i} className={cx("rental-conditions__item")}>
                        <div className={cx("rental-conditions__image")}>
                            <Image src={item.img} alt="picture" />
                            <span className={cx("rental-conditions__text")}>{item.text}</span>
                        </div>
                    </li>
                ))}
        </ul>
    );
};
