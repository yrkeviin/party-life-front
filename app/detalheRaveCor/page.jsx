import React from "react";
import Hero from "../../components/Hero";
import SectionRule from "../../components/SectionRule";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from "./DetalheRaveCor.module.css";
import Header from "../../components/Header";

export default function App() {
return (
    <div className={styles.appContainer}>
        <Header />

        <Hero />

        <main className={styles.mainContent}>
            <SectionRule title="REGRAS" color="red">
                <List items={[
                    "Segurança é essencial – atitudes racistas, homofóbicas ou violentas resultarão em expulsão imediata.",
                    "Sem retorno e reentrada – por isso, dificulte ao máximo a saída.",
                    "Não aceitamos devolução – ingressos são intransferíveis.",
                    "Não é permitido entrar com bebidas – teremos open bar e venda no local.",
                    "Necessário apresentar 18+ (com foto).",
                    "Curta com consciência – se beber, não dirija."
                ]} />
            </SectionRule>

            <SectionRule title="O QUE TERÁ NA FESTA?" color="green">
                <List items={[
                    "Line-up dos DJs mais insanos com diversos nomes de eletrônica, trance e tech house",
                    "Open bar premium com algumas opções e drinks exclusivos",
                    "Show de luzes, fumaça e efeitos especiais"
                ]} />
            </SectionRule>

            <SectionRule title="O QUE LEVAR PARA A FESTA?" color="green">
                <List items={[
                    "Ingresso (pode ser no celular ou físico com QrCode)",
                    "Documento com foto (RG, CNH ou versão digital – obrigatório para entrada)",
                    "Roupas confortáveis",
                    "Óculos/Pochete/Garrafa (plástica ou flexível, se for o caso)",
                    "E claro: muita energia e vontade de dançar!"
                ]} />
            </SectionRule>

            <div className={styles.hashtags}>
                <h2>HASHTAGS OFICIAIS</h2>
                <p>#PartyLife2025, #RaveFest, #Colorados, #VemProLuz</p>
            </div>
        </main>

        <Footer />
    </div>
);
}