import styles from "./park.module.scss";
import cnBind from "classnames/bind";
import { Container } from "@/components/atoms/Container/Container";
import { CardAutoList } from "@/components/organisms/CardAutoList/CardAutoList";
import { listCars } from "@/const/listCars";
import { Title } from "@/components/atoms/Title/Title";

const cx = cnBind.bind(styles);

export const ParkSection = (): JSX.Element => {
    return (

        <section id="park" className={cx("park")}>
            <Container>
                <div className={cx("park__wrapper")}>
                    <Title levet="h2" classNames={cx("section-title")}>
                        Наш Автопарк
                    </Title>
                    <div className={cx("park__items")}>
                        <CardAutoList listCards={listCars} />
                    </div>

                </div>
            </Container>
        </section>

    );
};
