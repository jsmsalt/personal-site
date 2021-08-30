import React, { FC } from "react";

import styles from "./styles.module.scss";

interface CircleTextProps {
    text: string;
}

const CircleText: FC<CircleTextProps> = ({ text, children }) => {
    return (
        <div className={styles.circle}>
            {children}
            <div className={styles.text}>
                {text.split("").map((t, i) => (
                    <span
                        key={i}
                        className={styles.glitch}
                        data-text={t}
                        style={{ transform: `rotate(${i * 9.5}deg)` }}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CircleText;
