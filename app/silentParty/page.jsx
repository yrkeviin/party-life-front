"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./silentParty.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";
import Atractions from "../../components/Atractions";
import Cards from "../../components/Cards";

export default function RaveCor() {
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
        <div className={styles.appContainer}>
            <div className={styles.containerBanner}>
                <Header />
                <div className={styles.textBanner}>
                    <InfoDetalhes
                        text="SILENT"
                        title="PARTY"
                        local="Rave da Ju"
                        date="15 agosto de 2025"
                        hour="22h - 5h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="A festa onde o silencio fala alto! Dance ao som da sua propria musica com fones de ouvido sem fio enquanto desfruta de um ambiente incrivel."
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Permitido apenas maiores de 18 anos.",
                        "Documento com foto obrigatório para entrada.",
                        "Nao e permitido entrar com bebidas.",
                        "Use pulseira de identificacao o tempo todo.",
                        "E proibido compartilhar fones de ouvido.",
                        "Respeito ao ambiente e aos demais convidados."
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "DJ ao vivo.",
                        "Espaço com food trucks e drinks refrescantes.",
                        "Área lounge e iluminacao LED interativa."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Roupa confortavel e vibe descontraida.",
                        "RG ou documento digital.",
                        "Fones(seram fornecidos no local).",
                        "Muita energia e disposicao para dancar até o amanhecer!"
                    ]} />
                </div>

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p>#PartyLife2025, #RaveFest, #Coloridos, #VemProLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}