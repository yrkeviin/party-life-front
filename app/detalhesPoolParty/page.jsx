"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalhesPoolParty.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";
import Atractions from "../../components/Atractions";
import Cards from "../../components/Cards";

export default function PoolParty() {
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
                        text="POOL"
                        title="PARTY"
                        local="Clube Lux"
                        date="03 de junho de 2025"
                        hour="10h - 17h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="Sol, música boa, piscina liberada e aquele clima
                    tropical que a gente ama! Vem curtir uma tarde
                    insana com DJs ao vivo, drinks gelados, gente bonita e muita energia! Traga seu melhor look de verão e prepare-se para mergulhar na vibe!"
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Proibido menores de 18 anos.",
                        "É necessário traje de banho apropriado para usar a piscina.",
                        "Documento com foto obrigatório na entrada.",
                        "Não é permitido entrar com bebidas – teremos open bar e vendas no local.",
                        "Revista na entrada e seguranças durante todo o evento.",
                        "Respeito é lei – atitudes agressivas, preconceituosas ou desrespeitosas não serão toleradas."
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "Dança na beira da piscina com competição de melhor look.",
                        "Drinks tropicais e open bar (opcional por área).",
                        "Food zone com petiscos, hambúrgueres e açaí."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Protetor solar – sol não perdoa!.",
                        "Roupa de banho (biquíni, sunga ou maiô).",
                        "Óculos de sol estiloso.",
                        "Cartão ou dinheiro para consumo no local.",
                        "Boa vibe e disposição pra dançar e se molhar!."
                    ]} />
                </div>

                <div className={styles.atractions}>
                    <h2 className={styles.sectionTitle}>ATRAÇÕES</h2>

                    <div className={styles.allAtractions}>
                        <Atractions
                        atractionImage="/images/menosemaisAtracao.png"
                        atractionName="Menos é Mais"
                        />
                    </div>
                </div>

                <div className={styles.music}>
                    <h2 className={styles.sectionTitle}>ESTILO</h2>
                    <Cards
                    picture="/images/pagode_style.png"
                    text="🎻 Pagode"
                    />
                </div>

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p>#PartyLife2025, #PoolParty, #Molhados, #VemPraLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}