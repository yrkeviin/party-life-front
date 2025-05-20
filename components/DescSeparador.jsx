import React from "react";
import styles from "../styles/DescSeparador.module.css";

export default function DescSeparador({text}) {
    return (
        <div className={styles.separador}>
            <p>{text}</p>

            <img src="/logo.png" alt="" className={styles.logo}/>
        </div>
    )
}