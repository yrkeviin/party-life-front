"use client";
import { useState, useEffect } from "react";
import styles from "./Sobrenos.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import CardSobreNos from "../../components/CardSobreNos";

export default function Sobrenos() {

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
        <div className={styles.container}>
            <div className={styles.subHeader}>
                < Header />
                
            </div>
            {/* <div className={styles.imageCard}>
                <Image
                    src="/images/imageteam.jpg"
                    alt="Logo PARTY LIFE"
                    width={750}
                    height={550}
                    className={styles.imageTeam}
                />
            </div> */}

            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Seja Bem-vindo(a) ao PARTYLIFE!</h1>
                </div>
                <div className={styles.textContent}>
                    <p className={styles.description}>
                        Bem-vindo ao PARTYLIFE, a rede social que te conecta aos melhores
                        eventos e festas da sua cidade! Nosso objetivo é simplificar a
                        descoberta de rolês, proporcionando uma experiência intuitiva e
                        dinâmica tanto no mobile quanto na web.
                    </p>
                </div>

                <div className={styles.teamContent}>
                    <h2 className={styles.teamTitle}>Conheça a nossa equipe!</h2>
                    <div className={styles.teamCards}>
                        <CardSobreNos
                            nome="Maria Parma"
                            foto="/images/profilemaria.jpg"
                            funcao="Scrum Master"
                        />
                        <CardSobreNos
                            nome="Giovanna Alba"
                            foto="/images/profilegiovanna.jpg"
                            funcao="Product Owner"
                        />
                        <CardSobreNos
                            nome="Enzo Turcovic"
                            foto="/images/profileenzo.jpg"
                            funcao="Desenvolvedor"
                        />
                        <CardSobreNos
                            nome="Kevin Lima"
                            foto="/images/profilekevin.jpg"
                            funcao="Desenvolvedor"
                        />
                        <CardSobreNos
                            nome="Luiz Ricci"
                            foto="/images/profileluiz.jpg"
                            funcao="Desenvolvedor"
                        />
                        <CardSobreNos
                            nome="Lucas Zani"
                            foto="/images/profilezani.jpg"
                            funcao="Desenvolvedor"
                        />
                    </div>
                </div>

                <div className={styles.contentJoin}>
                    <h2 className={styles.titleJoin}>Junte-se a Nós!</h2>
                    <p className={styles.descriptionJoin}>
                        Se você ama festas e quer fazer parte de uma comunidade vibrante,
                        junte-se ao PartyLife hoje mesmo! Estamos ansiosos para ver suas
                        fotos e ouvir suas histórias de festa.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
