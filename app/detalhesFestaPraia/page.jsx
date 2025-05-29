"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalhesFestaPraia.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";
import Atractions from "../../components/Atractions";

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
                        text="PRAIA DA"
                        title="VILA"
                        local="Praia da vila"
                        date="22 de junho de 2025"
                        hour="15h - 23h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="Venha curtir o por do sol ao som
                    de DJs incríveis, drinks referescantes
                    e boa vibrações!"
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Respeito é essencial – atitudes racistas, homofóbicas ou violentas resultarão em expulsão.",
                        "Som externo é proibido - DJs oficiais garantem a música.",
                        "Use pulseira de identificação o tempo todo.",
                        "Não é permitido entrar com bebidas – teremos open bar e vendas no local.",
                        "Preserve a praia - Lixo no lixo.",
                        "Curta com consciência – se beber, não dirija"
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "Line-up de DJs insanos com os melhores nomes do eletrônico, trance e tech house.",
                        "Open bar premium (em algumas áreas) e drinks exclusivos.",
                        "Show de laser, fumaça e efeitos especiais."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Protetor solar (se a festa for ao ar livre durante o dia).",
                        "Documento com foto (RG, CNH ou versão digital – obrigatório para entrada).",
                        "Óculos escuros.",
                        "Ingresso/Pulseira (digital ou física, se for o caso).",
                        "Boa vibe e disposição pra dançar até o fim!"
                    ]} />
                </div>

                <div className={styles.atractions}>
                    <Atractions
                    atractionImage="/images/negaoAtracao.jpg"
                    atractionName="Negão Original"
                    />
                </div>

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p><span>#</span>PartyLife2025, FestaNaPraia, PéNaAreia, VemPraLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}