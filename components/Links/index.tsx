import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import styles from "./styles.module.scss";

const Links = () => {
    return (
        <ul className={styles.icons}>
            <li>
                <a href='https://www.linkedin.com/in/jsmsalt/' target='_blank' rel='noreferrer'>
                    <FiLinkedin />
                </a>
            </li>
            <li>
                <a href='https://github.com/jsmsalt' target='_blank' rel='noreferrer'>
                    <FiGithub />
                </a>
            </li>
        </ul>
    );
};

export default Links;
