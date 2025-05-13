import styles from "./Feed.module.css";

import Header from "../../components/Header"

import Post from "../../components/Posts"

export default function Feed() {
    return (
        <div className={styles.container}>
            <div className={styles.containerBanner}>
                <Header />
                <div className={styles.textBanner}>
                    <img src="/textVemP-removebg-preview.png" alt="" />
                </div>
            </div>

            <div className={styles.separation}>
            </div>

            <Post 
            textName="@menorKabrinha"
            picture="./raveBanner.jpg"
            local="Praia do Leme, Rio de Janeiro"
            button="Festa na Praia"
            />
        </div>
    );
}