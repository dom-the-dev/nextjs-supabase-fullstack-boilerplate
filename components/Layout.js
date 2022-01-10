import React from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({title, children}) => {
    return (
        <div>
            <Head>
                <title>{title} | Create Next App</title>
                <meta name="description" content="NextJS x Supabase Boilterplate by Dom the dev"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <main className={styles.main}>
                {children}
            </main>

            <Footer/>

        </div>
    );
};

export default Layout;
