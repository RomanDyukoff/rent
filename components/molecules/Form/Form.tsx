"use client";

import { useState } from "react";
import cnBind from "classnames/bind";

import { Button } from "@/components/atoms/Button/Button";
import { Title } from "@/components/atoms/Title/Title";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

type FormInputType = "phone" | "name";

export const Form = ({ classNames }: { classNames?: string }) => {
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

    const handleSubmit = async () => {
        await fetch("api/feedback/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form.phone),
        }).then((res) => res.ok);
        setForm({ name: "", phone: "+375" });
    };

    const handleChange = (val: string, type: FormInputType) => {
        val = formatter(val, type);

        setForm({ ...form, [type]: val });
    };

    return (
        <div className={cx("form", classNames)}>
            <Title levet="h4" classNames={cx("form__title")}>
                Оставьте заявку и мы вам перезвоним
            </Title>
            <div className={cx("form__inputs")}>
                <input
                    placeholder="Имя..."
                    type="text"
                    className={cx("form__input")}
                    value={form.name}
                    onChange={(e) => handleChange(e.target.value, "name")}
                />
                <input
                    type="tel"
                    placeholder="+375..."
                    className={cx("form__input")}
                    value={form.phone}
                    required
                    onChange={(e) => handleChange(e.target.value, "phone")}
                    maxLength={13}
                />
            </div>
            <Button classNames={cx("form__button", "btn", "btn-white", "btn-animate")} handleAction={handleSubmit}>
                Отправить
            </Button>
        </div>
    );
};
