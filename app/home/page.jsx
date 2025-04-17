import styles from "./Home.module.css";

import Header from "../../components/Header"

import Button from "../../components/Button"

import Cards from "../../components/Cards"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.containerBanner}>
                <Header />
                <div className={styles.textBanner}>
                    <img src="/textVemP-removebg-preview.png" alt="" />
                </div>

                <Button 
                text="Crie seu post aqui!"
                />
            </div>

            <div className={styles.containerContent}>
                <div className={styles.text}>
                    <h1>Bem vindo ao Party Life! 🪅</h1>
                    <p>A sua rede social definitiva para festas inesquecíveis!
                    Aqui, você descobre e compartilha os melhores eventos da sua cidade — sejam baladas, festas na praia, encontros alternativos ou rolês secretos. Publique seu evento, convide a galera e fique por dentro de onde a diversão está rolando.
                    A festa começa aqui. 🎉🌴</p>

                    <p>🕺 Crie seu perfil, publique festas</p>
                    <p>🎉 Descubra o que tá rolando perto de você</p>
                    <p>📍 Use nosso mapa interativo pra achar eventos</p>
                    <p>📢 Divulgue seu evento pra uma galera que realmente curte festa</p>

                    <p>Seja você um organizador, um DJ ou só alguém em busca da próxima vibe… o Party Life é o seu ponto de partida.</p>
                </div>

                <div className={styles.imageText}>
                    <img src="./imageBeach.jpg" alt="" />
                </div>
            </div>

            <div className={styles.infos}>
                <div className={styles.locais}>
                    <div className={styles.images}>
                        <img src="./lugares.png" alt="" />
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                        picture="./praiaLugar.jpg" 
                        text="Praia da Vila"
                        />

                        <Cards
                        picture="./piscinaLugar.jpg"
                        text="Piscina do Edifício"
                        />

                        <Cards
                        picture="./raveLugar.jpg"
                        text="Rave do Centro"
                        />

                        <Cards
                        picture="./carrosLugar.jpg"
                        text="Carros do Bairro"
                        />
                    </div>
                </div>

                <div className={styles.atracoes}>
                    <div className={styles.images}>
                        <img src="./atracoes.png" alt="" />
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                        picture="./praiaLugar.jpg" 
                        text="Praia da Vila"
                        />

                        <Cards
                        picture="./piscinaLugar.jpg"
                        text="Piscina do Edifício"
                        />

                        <Cards
                        picture="./raveLugar.jpg"
                        text="Rave do Centro"
                        />

                        <Cards
                        picture="./carrosLugar.jpg"
                        text="Carros do Bairro"
                        />
                    </div>
                </div>

                <div className={styles.estilos}>
                    <div className={styles.images}>
                        <img src="./estilos.png" alt="" />
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                        picture="./praiaLugar.jpg" 
                        text="Praia da Vila"
                        />

                        <Cards
                        picture="./piscinaLugar.jpg"
                        text="Piscina do Edifício"
                        />

                        <Cards
                        picture="./raveLugar.jpg"
                        text="Rave do Centro"
                        />

                        <Cards
                        picture="./carrosLugar.jpg"
                        text="Carros do Bairro"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.containerFooter}>
                <div>
                    <p>Desenvolvido por: Kevin Lima</p>
                </div>

                <div>
                    <p>Contato: +55 13 00171-0157 </p>
                </div>

                <div>
                    <p>🎶 Party Life © 2025 – O melhor lugar pra descobrir, divulgar e viver festas inesquecíveis.</p>
                    <p>📍 De onde estiver, a vibe te encontra.</p>
                    <p>📧 Fale com a gente: contato@partylife.com</p>
                    <p>📱 Siga nas redes: @partylife.oficial</p>
                </div>
            </div>
        </div>
    );
}