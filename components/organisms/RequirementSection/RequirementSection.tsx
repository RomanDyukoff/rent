import { Container } from "@/components/atoms/Container/Container";
import styles from "./style.module.scss";
import { Title } from "@/components/atoms/Title/Title";
import cnBind from "classnames/bind";
import { TitleIcon } from "@/components/atoms/TitleIcon/TitleIcon";
import { CardInfo } from "@/components/atoms/CardInfo/CardInfo";
import pointOne from "@/public/assets/img/manager-11.jpg";
import pointTwo from "@/public/assets/img/chenge-auto-11.jpg";
import pointThree from "@/public/assets/img/document-11.jpg";
import pointFour from "@/public/assets/img/carsharing-11.jpg";

const cx = cnBind.bind(styles);
export const RequirementSection = () => {
    const listArr = [
        { src: pointOne, title: "СВЯЖИТЕСЬ С СОТРУДНИКОМ КОМПАНИИ" },
        { src: pointTwo, title: "ВЫБЕРИТЕ АВТОМОБИЛЬ" },
        { src: pointThree, title: "ЗАКЛЮЧИТЕ ДОГОВОР" },
        { src: pointFour, title: "НАЧНИТЕ ДВИЖЕНИЕ" },
    ];
    return (
        <section id="requi" className={cx("requirement")}>
            <Container>
                <Title classNames={cx("requirement__title")} levet="h2" children="Как арендовать?" />
                <div className={cx("requirement__wrapper")}>
                    <div className={cx("requirement__docs")}>
                        <div className={cx("requirement__card")}>
                            <TitleIcon title="ВОДИТЕЛЬ СТАРШЕ 18 ЛЕТ" />
                            <TitleIcon title="ПРИ СЕБЕ ПАСПОРТ И ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ" />
                            <TitleIcon title="В СТОИМОСТЬ НЕ ВКЛЮЧЕНО ТОПЛИВО И МОЙКА" />
                        </div>
                        <div className={cx("requirement__items")}>
                                {listArr.map((el, i) =>
                                    <CardInfo key={i} src={el.src} title={el.title} i={i + 1} />)}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
