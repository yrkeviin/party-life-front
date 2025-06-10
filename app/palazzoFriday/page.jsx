"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./palazzoFriday.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";
import Atractions from "../../components/Atractions";
import Cards from "../../components/Cards";

export default function Corrida() {
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
                        text="PALAZZO"
                        title="FRIDAY"
                        local="Palazzo Club"
                        date="12 de maio de 2025"
                        hour="22h - 5h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="A noite vai ferver com a energia dos motores potentes e um som que vai fazer o chão tremer! Uma mistura insana de música eletrônica e automobilismo."
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Som automotivo liberado apenas em área específica.",
                        "Proibido correr dentro do espaço do evento.",
                        "Documento com foto obrigatório para entrada.",
                        "Proibido o uso de drogas e atitudes agressivas."
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "Line-up de DJs eletrônicos.",
                        "Exposição de carros esportivos e clássicos.",
                        "Sorteios de brindes automotivos.",
                        "Área de food trucks com opções variadas."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Documento com foto (RG, CNH ou versão digital – obrigatório para entrada).",
                        "Dinheiro ou cartão para consumo no local.",
                        "Roupa confortável e vibe acelerada!."
                    ]} />
                </div>

                <div className={styles.atractions}>
                    <h2 className={styles.sectionTitle}>ATRAÇÕES</h2>

                    <div className={styles.allAtractions}>
                        <Atractions
                        atractionImage="/images/brunomartiniAtracao.jpg"
                        atractionName="Bruno Martini"
                        />
                    </div>
                </div>

                <div className={styles.music}>
                    <h2 className={styles.sectionTitle}>ESTILO</h2>
                    <Cards
                    picture="/images/eletrônica_style.png"
                    text="🎧 Eletrônica"
                    />
                </div>

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p>#PartyLife2025, #EncontroCarros, #Automotivos, #VemPraLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}