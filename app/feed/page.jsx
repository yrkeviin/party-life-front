import styles from "./Feed.module.css";

import Header from "../../components/Header"

import Post from "../../components/Posts"

import Footer from "../../components/Footer"

export default function Feed() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerBanner}>
                    <Header />
                    <div className={styles.textBanner}>
                        <img src="/textVemP-removebg-preview.png" alt="" />
                    </div>
                </div>

                <div className={styles.separation}>
                    <input type="text" placeholder="Procure Pelo Nome da Festa!" />
                    <button>🔍</button>
                </div>

                <div className={styles.feed}>
                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Rave do Menor, São Paulo"
                        button="Ver Detalhes"
                        page={"/detalheRaveCor"}
                    />

                    <Post
                        textName="@juliaRiver"
                        picture="./bannerPraia.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                        page={"/detalheResenhaCasa"}
                    />

                    <Post
                        textName="@angelotti"
                        picture="./poolPartyBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />
                </div>

                <div className={styles.feed}>
                    <Post
                        textName="@juju mines"
                        picture="./resenhaBanner.png"
                        local="Casa da Juju, São Paulo"
                        button="Ver Detalhes"
                        page={"/detalhesResenhaCasa"}
                    />

                    <Post
                        textName="@XRCZ"
                        picture="./encontroCarros.jpg"
                        local="Pista do Tigre, São Paulo"
                        button="Ver Detalhes"
                    />

                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />
                </div>

                <div className={styles.feed}>
                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />

                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />

                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />
                </div>

                <div className={styles.feed}>
                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />

                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />

                    <Post
                        textName="@menorKabrinha"
                        picture="./raveBanner.jpg"
                        local="Praia do Leme, Rio de Janeiro"
                        button="Ver Detalhes"
                    />
                </div>
            </div>

            <div className={styles.separation2}></div>

            <Footer />
        </div>
    );
}