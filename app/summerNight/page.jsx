"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./summerNight.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";
import Atractions from "../../components/Atractions";
import Cards from "../../components/Cards";

export default function FestaPraia() {
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
                        text="SUMMER NIGHT"
                        title="PARTY" 
                        local="Praia do Leme"
                        date="30 de julho de 2025"
                        hour="18h - 02h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="A festa mais esperada do verão carioca! Venha curtir o pôr do sol com os pés na areia, música sertaneja, drinks refrescantes e uma vibe incrível!"
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Permitido apenas maiores de 18 anos. Documento com foto obrigatório para entrada.",
                        "Não é permitido entrar com bebidas.",
                        "Use pulseira de identificação o tempo todo."
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "Sets ao vivo.",
                        "Espaço com food trucks e drinks refrescantes."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Roupa tropical ou look de verão.",
                        "Protetor solar.",
                        "Documento com foto.",
                        "Muita energia e disposição para dançar até o amanhecer!"
                    ]} />
                </div>

                <div className={styles.atractions}>
                    <h2 className={styles.sectionTitle}>ATRAÇÕES</h2>

                    <div className={styles.allAtractions}>
                        <Atractions
                        atractionImage="/images/diegoevictorAtracao.jpg"
                        atractionName="Diego e Victor Hugo"
                        />
                    </div>
                </div>

                <div className={styles.music}>
                    <h2 className={styles.sectionTitle}>ESTILO</h2>
                    <Cards
                    picture="/images/sertanejo_style.png"
                    text="💃 Sertanejo"
                    />
                </div>

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p>#PartyLife2025, #FestaNaPraia, #PéNaAreia, #VemPraLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}