import styles from "./Feed.module.css";

import Header from "../../components/Header"

import Button from "../../components/Button"

import Cards from "../../components/Cards"

export default function Feed() {
    return (
        <div className={styles.container}>
            <div className={styles.containerBanner}>
                <Header />
                <div className={styles.textBanner}>
                    <img src="/textVemP-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
}