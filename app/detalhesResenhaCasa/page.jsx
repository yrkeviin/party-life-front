"use client";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalhesResenhaCasa.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";
import Atractions from "../../components/Atractions";
import Cards from "../../components/Cards";

export default function ResenhaCasa() {
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
                        text="RESENHA EM"
                        title="CASA"
                        local="Rua krakauer scar, 7"
                        date="21 de mai de 2025"
                        hour="21h - 4h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="Vem aí a melhor resenha de todas! Vai rolar
                    aquela festa em casa, com muita música, comida,
                    bebida e gente legal! O clima vai ser leve  e
                    descontraído - o tipo de noite que a gente não
                    esquece!"
                />
            </div>

            <main className={styles.mainContent}>
                <div className={styles.redSection}>
                    <h2 className={styles.sectionTitle}>REGRAS</h2>
                    <List items={[
                        "Nada de briga e confusão.",
                        "Som ambiente, sem incomodar os vizinhos.",
                        "Sem exageros com o alcoól.",
                        "Respeito ao espaço alheio e não quebre nada.",
                        "Confirme sua presença antes.",
                        "Menores de idade apenas com acompanhante."
                    ]} />
                </div>

                <div className={styles.greenSectionn}>
                    <h2 className={styles.sectionTitle}>O QUE TERÁ NA FESTA?</h2>
                    <List items={[
                        "Som e playlist das músicas mais tocadas.",
                        "Bebidas e drinks.",
                        "Equipe de iluminação de festas."
                    ]} />
                </div>

                <div className={styles.greenSection}>
                    <h2 className={styles.sectionTitle}>O QUE LEVAR PARA A FESTA?</h2>
                    <List items={[
                        "Óculos estiloso.",
                        "RG ou Documento com foto.",
                        "Carregador de celular.",
                        "Caixinha de som.",
                        "Garrafa ou copo reutilizável."
                    ]} />
                </div>

                <div className={styles.atractions}>
                    <h2 className={styles.sectionTitle}>ATRAÇÕES</h2>

                    <div className={styles.allAtractions}>
                        <Atractions
                        atractionImage="/images/negaoAtracao.jpg"
                        atractionName="Negão Original"
                        />
                        <Atractions
                        atractionImage="/images/bolzaniAtracao.jpg"
                        atractionName="Bolzani"
                        />
                        <Atractions
                        atractionImage="/images/fischerAtracao.jpg"
                        atractionName="Nath Fischer"
                        />
                    </div>
                </div>

                <div className={styles.music}>
                    <h2 className={styles.sectionTitle}>ESTILO</h2>
                    <Cards
                    picture="/images/resenha.png"
                    text="🏖️ Festas na Praia"
                    description="Areia nos pés, pôr do sol e som rolando! Festas na praia trazem a energia perfeita para curtir com os amigos à beira-mar."
                    />
                </div>

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p><span>#</span>PartyLife2025, FestaEmCasa, VibeBoa, VemPraLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}