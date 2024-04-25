'use client'
import React from 'react';
import styles from './style.module.scss'
import cnBind from "classnames/bind";
import Link from "next/link";

interface CustomLinkType {
	title: string;
	href: string,
	id: string
}

const cx = cnBind.bind(styles);

export const CustomLink = ({ title, href, id }: CustomLinkType) => {
	return (
		<Link href={`/${href}/${id}`}
			className={cx("btn", "btn-white", "btn-animate")}
		>
			{title}
		</Link>
	)
}