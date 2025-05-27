import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalheRaveCor.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes";
import DescSeparador from "../../components/DescSeparador";

export default function RaveCor() {
    return (
        <div className={styles.appContainer}>
            <div className={styles.containerBanner}>
                <Header />
                <div className={styles.textBanner}>
                    <InfoDetalhes
                        text="RAVE DA"
                        title="COR"
                        local="Nova Holanda"
                        date="24 junho de 2025"
                        hour="17h - 4h"
                    />
                </div>
            </div>
            <div>
                <DescSeparador
                    text="Prepare-se para uma noite insana de batidas
                    eletrônicas, luzes psicodélicas e muita energia!
                    DJs renomados, open bar selecionado e uma
                    vibe que vai até o amanhecer. Vista-se com cores neon e venha brilhar na pista!"
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

                <div className={styles.hashtags}>
                    <h2>HASHTAGS OFICIAIS</h2>
                    <p><span>#</span>PartyLife2025, #RaveFest, #Coloridos, #VemProLuz</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}