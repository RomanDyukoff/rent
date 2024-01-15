'use client'
import React from 'react';
import styles from './style.module.scss'
import cnBind from "classnames/bind";
import Link from "next/link";

interface CustomLinkType {
	title: string;
}

export const AddressContext = React.createContext({ href: '', id: '' })

const cx = cnBind.bind(styles);

console.log(AddressContext);


export const CustomLink = ({ title }: CustomLinkType) => {
	return (
		<AddressContext.Consumer>
			{({ href, id }) => (
				<Link href={`/${href}/${id}`}
					className={cx("btn", "btn-white", "btn-animate")}
				>
					{title}
				</Link>
			)}
		</AddressContext.Consumer>
	)
}