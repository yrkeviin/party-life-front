import styles from "./Sobrenos.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import CardSobreNos from "../../components/CardSobreNos";

export default function Sobrenos() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.subHeader}>
                <div className={styles.text}>
                    <h1>Sobre o PARTYLIFE!</h1>
                </div>
            </div>
            <Image src="/logopartylife.png" alt="Logo PARTY LIFE" width={450} height={200} className={styles.image} />
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.descript}>Bem-vindo ao PARTYLIFE, a rede social que te conecta aos melhores eventos e festas da sua cidade! Nosso objetivo é simplificar a descoberta de rolês, proporcionando uma experiência intuitiva e dinâmica tanto no mobile quanto na web.</p>
                </div>

                <div className={styles.teamContent}>
                    <h2>Nossa equipeee!</h2>
                    <div className={styles.teamCards}>
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                        <CardSobreNos nome="Enzo Turcovic" foto="/profileenzo.png" funcao="Desenvolvedor Frontend" />
                    </div>
                </div>

                <div className={styles.textjoin}>
                    <h2>Junte-se a Nós!</h2>
                    <p>Se você ama festas e quer fazer parte de uma comunidade vibrante, junte-se ao PartyLife hoje mesmo! Estamos ansiosos para ver suas fotos e ouvir suas histórias de festa.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
