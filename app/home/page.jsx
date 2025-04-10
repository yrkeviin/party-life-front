import styles from "./Home.module.css";

import Header from "../../components/Header"

import Button from "../../components/Button"

export default function Home() {
    return (
        <div className={styles.containerBanner}>
            <Header />
            <div className={styles.textBanner}>
                <img src="/textVemP-removebg-preview.png" alt="" />
            </div>

            <Button 
            text="Crie seu post aqui!"
            />
        </div>
    );
}