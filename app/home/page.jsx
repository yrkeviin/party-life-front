"use client";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header"
import Button from "../../components/Button"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <img src="/loading.gif" alt="Carregando..." className={styles.loadingGif} />
            </div>
        );
    }

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
                            description="Mergulhe na vibe das pool parties! Música alta, sol, piscina e muita animação em festas que são a cara do verão."
                        />

                        <Cards
                            picture="./rave.png"
                            text="🎉 Raves Fest"
                            description="Sinta a batida das raves com DJs incríveis, luzes intensas e uma atmosfera eletrizante que dura até o amanhecer."
                        />

                        <Cards
                            picture="./carro.png"
                            text="🚗 Encontro Carros"
                            description="Para os apaixonados por motores! Encontros com carros tunados, som automotivo e um clima cheio de adrenalina."
                        />

                        <Cards
                            picture="./praia.png"
                            text="🏖️ Festas na Praia"
                            description="Areia nos pés, pôr do sol e som rolando! Festas na praia trazem a energia perfeita para curtir com os amigos à beira-mar."
                        />

                        <Cards
                            picture="./resenha.png"
                            text="🏠 Festas em Casa"
                            description="Clima íntimo, boas risadas e amigos. As festas em casa são perfeitas para quem gosta de curtir com conforto."
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
                                description="Modelo e influencer, compartilha lifestyle e beleza com autenticidade com o púbico."
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
                                description="DJ de sucesso nas maiores festas do Brasil, mistura carisma e talento em seus shows."
                            />
                        </div>

                        <div className={styles.cardsContainer} >
                            <Cards
                                picture="./menoAtracao.jpg"
                                text="🎧 Meno K"
                                idade="22 anos"
                                description="Jovem talento do funk, estilo autêntico e batidas contagiantes de animar a festa."
                            />

                            <Cards
                                picture="./ninoAtracao.jpg"
                                text="🎭 Nino"
                                idade="18 anos"
                                description="Influencer e artista, sempre presente nos rolês mais hypados do momento."
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
                            picture="./eletrônica_style.png"
                            text="🎧 Eletônica"
                            description="Mergulhe nas batidas pulsantes da música eletrônica e sinta a energia eletrizante!"
                        />

                        <Cards
                            picture="./rock_style.png"
                            text="🎸 Rock"
                            description="Sinta a força do rock com guitarras marcantes e riffs que elevam qualquer festa a outro nível!"
                        />

                        <Cards
                            picture="./pop_style.png"
                            text="🪩 Pop"
                            description="Curta os hits do pop, com melodias cativantes e ritmo alegre que animam o evento!"
                        />

                        <Cards
                            picture="./jazz_style.png"
                            text="🎷 Jazz"
                            description="Desfrute do charme do jazz, com improvisos e sonoridades que trazem sofisticação e descontração!"
                        />

                        <Cards
                            picture="./hip-hop_style.png"
                            text="🎤 Hip-Hop"
                            description="Entre no ritmo do hip-hop, com rimas poderosas e batidas urbanas que fazem a festa ferver!"
                        />

                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                            picture="./clássica_style.png"
                            text="🎻 Clássica"
                            description="Encante-se com a sofisticação da música clássica, perfeita para um clima elegante e inesquecível no seu evento!"
                        />

                        <Cards
                            picture="./funk_style.png"
                            text="🎵 Funk"
                            description="Solte a energia com batidas marcantes que agitam a festa, a diversão e o ritmo contagiante do funk!"
                        />

                        <Cards
                            picture="./sertanejo_style.png"
                            text="💃 Sertanejo"
                            description="Viva a emoção do sertanejo, com canções que falam de amor e festa, garantindo animação e clima de rodeio!"
                        />

                        <Cards
                            picture="./reggae_style.png"
                            text="🤟 Reggae"
                            description="Deixe o clima relaxar com o reggae, trazendo vibrações positivas e muita paz para sua festa!"
                        />

                        <Cards
                            picture="./trap_style.png"
                            text="💸 Trap"
                            description="Eleve a vibe com o trap, o som urbano e moderno que mistura batidas eletrônicas intensas e muita atitude!"
                        />

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}