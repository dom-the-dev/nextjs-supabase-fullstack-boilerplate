import React from 'react';
import styles from "../styles/Home.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://domthedev.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}Dom the dev
            </a>
        </footer>
    );
};

export default Footer;
