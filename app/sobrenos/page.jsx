import styles from "./Sobrenos.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import CardSobreNos from "../../components/CardSobreNos";

export default function Sobrenos() {
    return (
        <div className={styles.container}>
            <div className={styles.subHeader}>
                <Header />
                <div className={styles.text}>
                    <h1>Sobre o PARTYLIFE!</h1>
                </div>
            </div>
            <div className={styles.imagecard}>
                <Image
                    src="/bannerPraia.jpg"
                    alt="Logo PARTY LIFE"
                    width={850}
                    height={600}
                    className={styles.imageteam}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.description}>
                        Bem-vindo ao PARTYLIFE, a rede social que te conecta aos melhores
                        eventos e festas da sua cidade! Nosso objetivo é simplificar a
                        descoberta de rolês, proporcionando uma experiência intuitiva e
                        dinâmica tanto no mobile quanto na web.
                    </p>
                </div>

                <div className={styles.teamContent}>
                    <h2 className={styles.teamtitle}>Nossa equipeee!</h2>
                    <div className={styles.teamCards}>
                        <CardSobreNos
                            nome="Maria Parma"
                            foto="/profileenzo.png"
                            funcao="Scrum Master"
                        />
                        <CardSobreNos
                            nome="Giovanna Alba"
                            foto="/profileenzo.png"
                            funcao="Product Owner"
                        />
                        <CardSobreNos
                            nome="Enzo Turcovic"
                            foto="/profileenzo.png"
                            funcao="Desenvolvedor"
                        />
                        <CardSobreNos
                            nome="Kevin Lima"
                            foto="/profileenzo.png"
                            funcao="Desenvolvedor"
                        />
                        <CardSobreNos
                            nome="Luiz Ricci"
                            foto="/profileenzo.png"
                            funcao="Desenvolvedor"
                        />
                        <CardSobreNos
                            nome="Lucas Zani"
                            foto="/profileenzo.png"
                            funcao="Desenvolvedor"
                        />
                    </div>
                </div>

                <div className={styles.contentjoin}>
                    <h2 className={styles.titlejoin}>Junte-se a Nós!</h2>
                    <p className={styles.descriptionjoin}>
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
