import cnBind from "classnames/bind";
import Link from "next/dist/client/link";
import Image from "next/image";

import { Container } from "@/components/atoms/Container/Container";
import { Title } from "@/components/atoms/Title/Title";
import { welcomeData } from "@/const/welcomeData";
import telegram from "@/public/telegram_logo.svg";
import viber from "@/public/viber_logo.svg";

import arenda from "../../../public/arenda.webp";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

const { title, text, phone } = welcomeData;

export const WelcomeSection = (): JSX.Element => {
    return (
        <section className={cx("welcome")} id="welcome">
            <div className={cx("welcome__bg")}>
                <Image className={cx("image")} src={arenda.src} alt="cover" width={1080} height={773} />
            </div>
            <Container>
                <div className={cx("welcome__wrapper")}>
                    <div className={cx("welcome__contact")}>
                        <Link href={`tel:${phone}`}>{phone}</Link>
                        <div>
                            <Link href="https://t.me/Olesya_luk" target="_blank">
                                <Image src={telegram as string} alt="telegram" />
                            </Link>
                            <Link href="viber://chat?number=%2B375298393593" target="_blank">
                                <Image src={viber as string} alt="viber" />
                            </Link>
                        </div>
                    </div>

                    <article className={cx("content")}>
                        <Title levet="h1" classNames={cx("content__title")}>
                            {title}
                        </Title>
                        <p className={cx("content__text")}>г.ВИТЕБСК категория &quot;B&quot;</p>
                        <p className={cx("content__text")}>{text}</p>
                    </article>
                </div>
            </Container>
        </section>
    );
};
