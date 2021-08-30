import React from "react";

import styles from "./styles.module.scss";

const Avatar = () => {
    return (
        <div className={styles.avatars}>
            <div className={styles.avatar}></div>
            <div className={styles.avatar}></div>
        </div>
    );
};

export default Avatar;
