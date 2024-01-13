import { useState } from "react";
import cnBind from "classnames/bind";

import { Button } from "@/components/atoms/Button/Button";
import { Title } from "@/components/atoms/Title/Title";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

type FormInputType = "phone" | "name";

export const Form = ({
    classNames
}: {
    classNames?: string;
}) => {
    const [form, setForm] = useState<{ [key in FormInputType]: string }>({ name: "", phone: "+375" });

    const formatter = (val: string, type: FormInputType) => {
        const regType = {
            phone: /[^0-9+]/g,
            name: /[^a-zA-Zа-яА-Я]/g,
        };

        let newVal = val.replace(regType[type], "").trim();

        if (type === "phone" && !newVal.startsWith("+375")) {
            newVal = `+375${newVal.slice(3)}`;
        }

        return newVal;
    };

    const handleChange = (val: string, type: FormInputType) => {
        val = formatter(val, type);

        setForm({ ...form, [type]: val });
    };

    return (
        <div className={cx("form", classNames)}>
            <div className={cx("form-field")}>
                <div className={cx("form-header")}>
                    <Title levet="h4" classNames={cx("header-h4")}>
                        Оставьте заявку и мы вам перезвоним
                    </Title>
                </div>
                <div className={cx("form-body")}>
                    <input
                        placeholder="Имя..."
                        type="text"
                        className={cx("form-input")}
                        value={form.name}
                        onChange={(e) => handleChange(e.target.value, "name")}
                    />
                    <input
                        type="tel"
                        placeholder="+375..."
                        className={cx("form-input")}
                        value={form.phone}
                        required
                        onChange={(e) => handleChange(e.target.value, "phone")}
                        maxLength={13}
                    />
                </div>
                <div className={cx("form-footer")}>
                    <Button classNames={cx("form-btn")} handleAction={() => { }}>
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    );
};
