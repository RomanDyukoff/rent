"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import cnBind from "classnames/bind";
import Image from "next/image";

import type { NavItemProps } from "@/components/atoms/NavItem/NavItem.type";
import phone from "@/public/phone.svg";

import { NavList } from "../../atoms/NavList/NavList";

import styles from "./style.module.scss";

interface NavigationProps {
    classNames?: string;
    children?: React.ReactNode;
    navItems: NavItemProps[];
}

const cx = cnBind.bind(styles);

export const Navigation = ({ classNames = "", navItems, children = null }: NavigationProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const refBlur = useRef<HTMLDivElement | null>(null);

    const toggleButton = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    const handleKeyDown = useCallback((event: KeyboardEvent): void => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }, []);

    const handleScrollDown = useCallback((): void => {
        setIsOpen(false);
    }, []);

    const handleOutClick = useCallback((event: MouseEvent): void => {
        if (event.target === refBlur.current) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("scroll", handleScrollDown);
        document.addEventListener("click", handleOutClick);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("scroll", handleScrollDown);
            document.removeEventListener("click", handleOutClick);
        };
    }, [handleKeyDown, handleScrollDown, handleOutClick]);

    return (
        <nav className={cx(`${classNames}`, "navigation")}>
            <a className={cx("navigation__link")} href="tel:+375298393593">
                <Image src={phone as string} alt="phone" />
                +375 29 839 35 93
            </a>

            <div
                onClick={toggleButton}
                className={cx("navigation__burger", `${isOpen ? "open" : ""}`)}
                aria-expanded={isOpen}
            >
                <div />
                <div />
                <div />
            </div>
            <div ref={refBlur} className={cx("navigation__blur", `${isOpen ? "open" : ""}`)} />
            <div className={cx("navigation__menu", `${isOpen ? "open" : ""}`)} aria-hidden={!isOpen}>
                {children}
                <NavList classNames={cx("navigation__list")} navItems={navItems} />
            </div>
        </nav>
    );
};
