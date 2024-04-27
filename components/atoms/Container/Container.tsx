import type { ContainerProps } from "./Container.type";

import styles from "./style.module.scss";

export const Container = ({ classNames = "", children = <div /> }: ContainerProps): JSX.Element => {
    return <div className={`${classNames} ${styles.container}`}>{children}</div>;
};
