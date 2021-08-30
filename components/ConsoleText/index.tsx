import React, { FC } from "react";

import styles from "./styles.module.scss";

interface ConsoleTextProps {
    text: string;
}

const ConsoleText: FC<ConsoleTextProps> = ({ text }) => {
    return <div className={styles.console}>{text}</div>;
};

export default ConsoleText;
