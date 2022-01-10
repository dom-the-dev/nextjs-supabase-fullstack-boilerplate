import React from 'react';
import Link from 'next/link'
import {useUser} from "../lib/UserContext";
import styles from "../styles/Home.module.css";

const Header = () => {
    const {user} = useUser()

    return (
        <header className={styles.header}>
            <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://github.com/dom-the-dev/nextjs-supabase-fullstack-boilerplate">NextJS X Supabase <br/>Boilerplate</a>

            <ul className={styles.headerNav}>
                <li>
                    <Link href="/">
                        <a className={styles.headerLink}>Home</a>
                    </Link>
                    {!user ?
                        <>
                            <Link href="/sign-up">
                                <a className={styles.headerLink}>Sign Up</a>
                            </Link>
                            <Link href="/login">
                                <a className={styles.headerLink}>Login</a>
                            </Link>
                        </>
                        :
                        <>
                            <Link href="/logout">
                                <a className={styles.headerLink}>Logout</a>
                            </Link>
                            <Link href="/profile">
                                <a className={styles.headerLink}>Profile</a>
                            </Link>
                        </>
                    }
                </li>
            </ul>
        </header>
    );
};

export default Header;
