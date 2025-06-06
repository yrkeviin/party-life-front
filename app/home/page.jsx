"use client";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"

export default function Home() {

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
            <div className={styles.containerBanner}>
                <Header />
                <div className={styles.textBanner}>
                    <img src="/images/textVemP-removebg-preview.png" alt="" />
                </div>
            </div>

            <div className={styles.containerContent}>
                <div className={styles.text}>
                    <h1>Bem vindo ao Party Life!</h1>
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
                    <img src="/images/logo.png" alt="" />
                </div>
            </div>

            <div className={styles.infos}>
                <div className={styles.locais}>
                    <div className={styles.images}>
                        <h1 className={styles.title}>Lugares</h1>
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                            picture="/images/piscina.png"
                            text="🏖️ Pool Partys"
                            description="Mergulhe na vibe das pool parties! Música alta, sol, piscina e muita animação em festas que são a cara do verão."
                        />

                        <Cards
                            picture="/images/rave.png"
                            text="🎉 Raves Fest"
                            description="Sinta a batida das raves com DJs incríveis, luzes intensas e uma atmosfera eletrizante que dura até o amanhecer."
                        />

                        <Cards
                            picture="/images/carro.png"
                            text="🚗 Encontro Carros"
                            description="Para os apaixonados por motores! Encontros com carros tunados, som automotivo e um clima cheio de adrenalina."
                        />

                        <Cards
                            picture="/images/praia.png"
                            text="🏖️ Festas na Praia"
                            description="Areia nos pés, pôr do sol e som rolando! Festas na praia trazem a energia perfeita para curtir com os amigos à beira-mar."
                        />

                        <Cards
                            picture="/images/resenha.png"
                            text="🏠 Festas em Casa"
                            description="Clima íntimo, boas risadas e amigos. As festas em casa são perfeitas para quem gosta de curtir com conforto."
                        />
                    </div>
                </div>

                <div className={styles.atracoes}>
                    <div className={styles.images}>
                        <h1 className={styles.title}>Atrações</h1>
                    </div>

                    <div>
                        <div className={styles.cardsContainer} >
                            <Cards
                                picture="/images/alokAtracao.jpg"
                                text="🎧 Alok"
                                description="Alok é um DJ e produtor musical brasileiro, conhecido mundialmente por popularizar o estilo brazilian bass e já foi eleito um dos melhores DJs do mundo pela revista DJ Mag. Além da música, atua em projetos sociais por meio do Instituto Alok."
                            />

                            <Cards
                                picture="/images/matueAtracao.jpg"
                                text="🎤 Matue"
                                description="Matuê, nome artístico de Matheus Brasileiro Aguiar, é um rapper e cantor brasileiro Seus álbuns Máquina do Tempo e 333 quebraram recordes de streaming no Brasil. Matuê também é fundador do selo 30PRAUM, promovendo a cena do trap no Nordeste."
                            />

                            <Cards
                                picture="/images/menosemaisAtracao.png"
                                text="🎺 Menos é Mais"
                                description="Menos é Mais é um grupo de pagode formado em 2016. Ganhou destaque com o projeto Churrasquinho do Menos é Mais. Com um estilo moderno, o grupo mistura clássicos com músicas autorais e já se apresentou ao lado de grandes nomes."
                            />

                            <Cards
                                picture="/images/natirutsAtracao.jpg"
                                text="🌵 Natiruts"
                                description="Natiruts é uma banda brasileira de reggae dos anos 1990. Conhecida por misturar reggae com influências da música brasileira, alcançou sucesso com músicas como Liberdade pra Dentro da Cabeça, Presente de um Beija-Flor e Sorri, Sou Rei."
                            />

                            <Cards
                                picture="/images/donjuanAtracao.jpg"
                                text="🎭 Don Juan"
                                description="MC Don Juan é um cantor de funk paulista que ganhou fama em 2016 com o hit 'Me Amarro na Noite'. Conhecido por sucessos como 'Amar, Amei', já colaborou com artistas como Alok e MC Ryan SP, sendo um dos grandes nomes do funk atual."
                            />
                        </div>

                        <div className={styles.cardsContainer} >
                            <Cards
                                picture="/images/cabelinhoAtracao.jpg"
                                text="🎶 MC Cabelinho"
                                description="MC Cabelinho é um cantor, rapper e ator. Ganhou destaque no cenário do trap e funk, que alcançaram milhões de streams. Além da música, também já atuou em novelas da TV Globo, como Amor de Mãe. Seu estilo mistura temas da periferia com romantismo."
                            />

                            <Cards
                                picture="/images/capitalinicialAtracao.jpg"
                                text="🎸 Capital Inicial"
                                description="Capital Inicial é uma banda de rock brasileira. Comandada pelo vocalista Dinho Ouro Preto, a banda ganhou destaque nos anos 1980. Nos anos 2000, voltou ao sucesso com o Acústico MTV, que apresentou novos hits como À Sua Maneira."
                            />

                            <Cards
                                picture="/images/brunomartiniAtracao.jpg"
                                text="🎹 Bruno Martini"
                                description="Bruno Martini é um DJ, produtor e cantor brasileiro. Ganhou destaque em 2016 com o hit Hear Me Now, em parceria com Alok e Zeeba. Desde então, colaborou com artistas e se apresentou em festivais como Tomorrowland e Lollapalooza."
                            />

                            <Cards
                                picture="/images/eliAtracao.jpg"
                                text="🌟 Eli Iwasa"
                                description="Eli Iwasa é uma DJ, produtora e empresária brasileira com mais de 25 anos de carreira na música eletrônica. Além de se apresentar em grandes festivais como Rock in Rio, Time Warp e DGTL, ela é fundadora do selo Heels of Love."
                            />

                            <Cards
                                picture="/images/diegoevictorAtracao.jpg"
                                text="🎸 Diego e Victor"
                                description="Diego & Victor Hugo é uma dupla sertaneja. Inicialmente, destacaram-se como compositores, criando sucessos gravados por artistas como Henrique & Juliano e Wesley Safadão. Ganhou destaque com músicas como Infarto, Facas e Tubarões."
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.estilos}>
                    <div className={styles.images}>
                        <h1 className={styles.title}>Estilos</h1>
                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                            picture="/images/eletrônica_style.png"
                            text="🎧 Eletônica"
                            description="Mergulhe nas batidas pulsantes da música eletrônica e sinta a energia eletrizante!"
                        />

                        <Cards
                            picture="/images/rock_style.png"
                            text="🎸 Rock"
                            description="Sinta a força do rock com guitarras marcantes e riffs que elevam qualquer festa a outro nível!"
                        />

                        <Cards
                            picture="/images/pop_style.png"
                            text="🪩 Pop"
                            description="Curta os hits do pop, com melodias cativantes e ritmo alegre que animam o evento!"
                        />

                        <Cards
                            picture="/images/jazz_style.png"
                            text="🎷 Jazz"
                            description="Desfrute do charme do jazz, com improvisos e sonoridades que trazem sofisticação!"
                        />

                        <Cards
                            picture="/images/hip-hop_style.png"
                            text="🎤 Hip-Hop"
                            description="Entre no ritmo do hip-hop, com rimas poderosas e batidas urbanas que fazem a festa ferver!"
                        />

                    </div>

                    <div className={styles.cardsContainer}>
                        <Cards
                            picture="/images/pagode_style.png"
                            text="🎻 Pagode"
                            description="Sinta a alegria contagiante do pagode, com samba no pé e aquela vibe de roda de amigos que não deixa ninguém parado!"
                        />

                        <Cards
                            picture="/images/funk_style.png"
                            text="🎵 Funk"
                            description="Fique por dentro das melhores festas de funk, com MCs que fazem o Brasil dançar. Vibe e muita dança te esperam!"
                        />

                        <Cards
                            picture="/images/sertanejo_style.png"
                            text="💃 Sertanejo"
                            description="Viva a emoção do sertanejo, com canções que falam de amor e festa, garantindo animação e clima de rodeio!"
                        />

                        <Cards
                            picture="/images/reggae_style.png"
                            text="🤟 Reggae"
                            description="Curta a energia positiva do reggae, com batidas envolventes que criam um clima leve, alto astral e cheio de boas vibrações!"
                        />

                        <Cards
                            picture="/images/trap_style.png"
                            text="💸 Trap"
                            description="Entre no ritmo intenso do trap, rimas afiadas e uma vibe urbana que mistura atitude, estilo e muita autenticidade nas pistas!"
                        />

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}