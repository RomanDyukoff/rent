"use client";

import React from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import type { CustomLinkType } from "./CustomLink.type";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const CustomLink = ({ title, href, id }: CustomLinkType) => {
    return (
        <Link href={`/${href}/${id}`} className={cx("btn", "btn-white", "btn-animate")}>
            {title}
        </Link>
    );
};
