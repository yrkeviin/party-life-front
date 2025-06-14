"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalhesCorrida.module.css";
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
                        text="ENCONTRO DE"
                        title="CARROS"
                        local="Pista do CKP"
                        date="09 de maio de 2025"
                        hour="20h - 2h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="Prepare-se para um evento que vai acelerar seu coração! Neste final de semana, os motores vão roncar alto no Encontro de Carros mais esperado da região! Clássicos, esportivos, antigos, rebaixados e modificados - todos reunidos em um só lugar para celebrar a paixão automotiva."
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Proibido animais.",
                        "Som automotivo controlado.",
                        "Proibido o uso de bebidas alcoólicas por motoristas.",
                        "Respeito ao espaço alheio.",
                        "Lixo no lixo!",
                        "Menores de idade apenas com acompanhante."
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "Área de som automotivo.",
                        "Sorteios e brindes.",
                        "Concursos de destaques."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Caixa térmica com água e bebida.",
                        "Dinhero ou cartão para consumação no local.",
                        "Câmera ou celular carregado.",
                        "Documento do veículo e CNH em dia.",
                        "Boa atitude e respeito"
                    ]} />
                </div>

                <div className={styles.atractions}>
                    <h2 className={styles.sectionTitle}>ATRAÇÕES</h2>

                    <div className={styles.allAtractions}>
                        <Atractions
                        atractionImage="/images/capitalinicialAtracao.jpg"
                        atractionName="Capital Inicial"
                        />
                    </div>
                </div>

                <div className={styles.music}>
                    <h2 className={styles.sectionTitle}>ESTILO</h2>
                    <Cards
                    picture="/images/rock_style.png"
                    text="🎸 Rock"
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