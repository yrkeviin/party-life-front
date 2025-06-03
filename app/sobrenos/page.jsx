"use client";
import { useState, useEffect } from "react";
import styles from "./Sobrenos.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import CardSobreNos from "../../components/CardSobreNos";

export default function Sobrenos() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <img src="/images/loading.gif" alt="Carregando..." className={styles.loadingGif} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <Header />
            </div>
        </div>
    );
}
