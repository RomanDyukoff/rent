import { Title } from "@/components/atoms/Title/Title";
import cnBind from "classnames/bind";
import styles from "./styles.module.scss";

const cx = cnBind.bind(styles);
export const TitleIcon = ({ title }: { title: string}) => {
    return (
        <div className={cx("item")}>
            <div className={cx("check")}/>
            <Title levet="h4">
                {title}
            </Title>
        </div>
    );
};