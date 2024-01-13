import cnBind from "classnames/bind";

import styles from "./card-privilege.module.scss";
import Image, { StaticImageData } from "next/image";
import { Title } from "@/components/atoms/Title/Title";

const cx = cnBind.bind(styles);
export const CardPrivilege = ({ src, alt, title }: { src: StaticImageData, alt: string, title: string }) => {
    return (
        <div className={cx("container")}>
            <div className={cx("item")}>
                <div className={cx("img")}>
                    <Image className={cx("img-item")} src={src} alt={alt} />
                </div>
                <div className={cx("caption")}>
                    <Title levet={"h5"}>{title}</Title>
                </div>
            </div>
        </div>
    );
};