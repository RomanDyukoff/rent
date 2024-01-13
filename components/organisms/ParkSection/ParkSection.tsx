import styles from "./park.module.scss";
import cnBind from "classnames/bind";
import { Container } from "@/components/atoms/Container/Container";
import { CardAutoList } from "@/components/organisms/CardAutoList/CardAutoList";
import { listCars } from "@/const/listCars";

const cx = cnBind.bind(styles);

export const ParkSection = (): JSX.Element => {
    return (
        <Container>
            <section id="park" className={cx("wrapper")}>
                <div className={cx("items")}>
                    <CardAutoList listCards={listCars}/>
                </div>
            </section>
        </Container>
    );
};
