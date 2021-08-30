import Head from "next/head";
import React from "react";

import styles from "../styles/Home.module.scss";
import Avatar from "../components/Avatar";
import CircleText from "../components/CircleText";
import ConsoleText from "../components/ConsoleText";
import Links from "../components/Links";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>José Morales | Full-Stack Developer SRR</title>
                <meta name='description' content='José Morales | Full-Stack Developer SRR' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <CircleText text='José Morales - Full Stack Developer - '>
                    <Avatar />
                </CircleText>

                <ConsoleText text='Enlaces de contacto' />

                <Links />
            </main>
        </div>
    );
}
