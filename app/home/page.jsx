import styles from "./Home.module.css";
import Header from "../../components/Header"
import Button from "../../components/Button"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"

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
                    <img src="./logo.png" alt="" />
                </div>
            </div>

            <div className={styles.infos}>
                <div className={styles.locais}>
                    <div className={styles.images}>
                        <h1>Lugares</h1>
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                            picture="./piscina.png"
                            text="🏖️ Pool Partys"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./rave.png"
                            text="🎉 Raves Fest"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./carro.png"
                            text="🚗 Encontro Carros"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./praia.png"
                            text="🏖️ Festas na Praia"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./resenha.png"
                            text="🏠 Resenhas em Casa"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />
                    </div>
                </div>

                <div className={styles.atracoes}>
                    <div className={styles.images}>
                        <h1>Atrações</h1>
                    </div>

                    <div>
                        <div className={styles.cardsContainer} >
                            <Cards
                                picture="./bolzaniAtracao.jpg"
                                text="📸 Camila Bolzani"
                                idade="19 anos"
                                description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                            />

                            <Cards
                                picture="./blakesAtracao.jpg"
                                text="🤖 DJ Blakes"
                                idade="18 anos"
                                description="DJ e produtora de funk paulista, presença confirmada nas melhores festas!"
                            />

                            <Cards
                                picture="./fischerAtracao.jpg"
                                text="💄 Nath Fischer"
                                idade="20 anos"
                                description="Modelo e influencer, compartilha lifestyle e beleza com autenticidade."
                            />

                            <Cards
                                picture="./negaoAtracao.jpg"
                                idade="25 anos"
                                text="🔥 MC Negão"
                                description="Voz potente e estilo único no funk consciente, respeitado dentro e fora das favelas."
                            />

                            <Cards
                                picture="./natAtracao.jpg"
                                text="🎵 DJ Nath"
                                idade="24 anos"
                                description="DJ de sucesso nas maiores festas do Brasil, mistura carisma e talento."
                            />
                        </div>

                        <div className={styles.cardsContainer} >
                            <Cards
                                picture="./menoAtracao.jpg"
                                text="🎧 Meno K"
                                idade="22 anos"
                                description="Jovem talento do funk, com estilo autêntico e batidas contagiantes."
                            />

                            <Cards
                                picture="./ninoAtracao.jpg"
                                text="🎭 Nino Abravanel"
                                idade="18 anos"
                                description="Influencer e artista irreverente, sempre presente nos rolês mais hypados."
                            />

                            <Cards
                                picture="./igAtracao.jpg"
                                text="🎶 MC Ig"
                                idade="27 anos"
                                description="Um dos nomes mais fortes do funk atual, com letras marcantes e flow envolvente."
                            />

                            <Cards
                                picture="./dojaAtracao.jpg"
                                text="🌟 Doja Cat"
                                idade="29 anos"
                                description="Cantora e rapper internacional, mistura pop e hip-hop com atitude única."
                            />

                            <Cards
                                picture="./tutoAtracao.jpg"
                                text="🎤 MC Tuto"
                                idade="23 anos"
                                description="Revelação do funk paulista, conhecido por hits que bombam nas pistas."
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.estilos}>
                    <div className={styles.images}>
                        <h1>Estilos</h1>
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                            picture="./bolzaniAtracao.jpg"
                            text="📸 Camila Bolzani"
                            idade="19 anos"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./bolzaniAtracao.jpg"
                            text="📸 Camila Bolzani"
                            idade="19 anos"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./bolzaniAtracao.jpg"
                            text="📸 Camila Bolzani"
                            idade="19 anos"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./bolzaniAtracao.jpg"
                            text="📸 Camila Bolzani"
                            idade="19 anos"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                        <Cards
                            picture="./bolzaniAtracao.jpg"
                            text="📸 Camila Bolzani"
                            idade="19 anos"
                            description="Influenciadora digital de lifestyle e beleza, com conteúdos e engajamento."
                        />

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}