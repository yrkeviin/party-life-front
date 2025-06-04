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

            <div className={styles.content}>
                    
                <div className={styles.text}>
                    <h1 className={styles.shadowDanceText}>Sobre nossa equipe!</h1>
                </div>
                <div className={styles.textContent}>
                    <p className={styles.description}>
                        Bem-vindo ao PARTYLIFE, a rede social que te conecta aos melhores eventos e festas da sua cidade! Nosso objetivo é simplificar a descoberta de rolês, proporcionando uma experiência intuitiva e dinâmica tanto no mobile quanto na web. A revolução na forma como você vive, descobre e compartilha experiências festivas! Somos muito mais que uma rede social: somos uma comunidade de amantes da diversão, criada para conectar pessoas através da magia das festas e eventos inesquecíveis.
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
                    <h1 className={styles.shadowDanceText}>Junte-se a nós!!</h1>
                    <p className={styles.descriptionJoin}>
                        Se você ama festas e quer fazer parte de uma comunidade vibrante, junte-se ao PartyLife hoje mesmo! Estamos ansiosos para ver suas fotos e ouvir suas histórias de festa. Se você vive pela emoção das noites inesquecíveis, pela energia das pistas de dança e pela magia das conexões que só uma boa festa proporciona, então você já é um de nós! O PartyLife não é apenas um aplicativo - é um movimento, um estilo de vida e a sua nova casa digital onde os amantes da diversão se encontram.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
