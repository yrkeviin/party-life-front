import React from "react";
import SectionRule from "../../components/SectionRule";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalheRaveCor.module.css";
import Header from "../../components/Header";
import InfoDetalhes from "../../components/InfoDetalhes"

export default function App() {
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


        <main className={styles.mainContent}>
            <SectionRule title="REGRAS" color="red">
                <List items={[
                    "Respeito é essencial – atitudes racistas, homofóbicas ou violentas resultarão em expulsão imediata.",
                    "Som externo é proibido - DJs oficiais garantem a música.",
                    "Use pulseira de identificação o tempo todo.",
                    "Não é permitido entrar com bebidas – teremos open bar e vendas no local.",
                    "Preserve a praia - Lixo no lixo.",
                    "Curta com consciência – se beber, não dirija"
                ]} />
            </SectionRule>

            <SectionRule title="O QUE TERÁ NA FESTA?" color="green">
                <List items={[
                    "Line-up de DJs insanos com os melhores nomes do eletrônico, trance e tech house.",
                    "Open bar premium (em algumas áreas) e drinks exclusivos.",
                    "Show de laser, fumaça e efeitos especiais."
                ]} />
            </SectionRule>

            <SectionRule title="O QUE LEVAR PARA A FESTA?" color="green">
                <List items={[
                    "Protetor solar (se a festa for ao ar livre durante o dia).",
                    "Documento com foto (RG, CNH ou versão digital – obrigatório para entrada).",
                    "Óculos escuros.",
                    "Ingresso/Pulseira (digital ou física, se for o caso).",
                    "Boa vibe e disposição pra dançar até o fim!"
                ]} />
            </SectionRule>

            <div className={styles.hashtags}>
                <h2>HASHTAGS OFICIAIS</h2>
                <p>#PartyLife2025, #RaveFest, #Coloridos, #VemProLuz</p>
            </div>
        </main>

        <Footer />
    </div>
);
}