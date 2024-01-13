import styles from "./privilege.module.scss";
import cnBind from "classnames/bind";
import { Container } from "@/components/atoms/Container/Container";
import { Title } from "@/components/atoms/Title/Title";
import { CardPrivilege } from "@/components/molecules/CardPrivilege/CardPrivilege";
import { listCards } from "@/const/listPrivilege";

const cx = cnBind.bind(styles);
export const PrivilegeSection = () => {

    return (
        <Container>
            <section id="about" className={cx("wrapper")}>
                <div className={cx("items")}>
                    <Title levet={"h2"} classNames={cx("title")}>
                        ПРЕИМУЩЕСТВА
                    </Title>
                    <div className={cx("list")}>
                        {

                            listCards.map((el, i) =>
                                <CardPrivilege key={i} src={el.img} alt={el.alt} title={el.title} />)
                        }
                    </div>

                </div>
            </section>
        </Container>

    );
};
