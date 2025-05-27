"use client";
import { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import Header from "../../components/Header";
import Post from "../../components/Posts";
import Footer from "../../components/Footer";

const postsData = [
    {
        textName: "@menorKabrinha",
        picture: "/images/raveBanner.jpg",
        local: "Rave do Menor, São Paulo",
        button: "Ver Detalhes",
        page: "/detalhesRaveCor"
    },
    {
        textName: "@juliaRiver",
        picture: "/images/rave1.jpg",
        local: "Praia do Leme, Rio de Janeiro",
        button: "Ver Detalhes",
        page: "/detalhesFestaPraia"
    },
    {
        textName: "@angelotti",
        picture: "/images/pool1.jpg",
        local: "Pool Party, São Paulo",
        button: "Ver Detalhes",
        page: "/detalhesPoolParty"
    },
    {
        textName: "@juju mines",
        picture: "/images/rave3.jpg",
        local: "Casa da Juju, São Paulo",
        button: "Ver Detalhes",
        page: "/detalhesResenhaCasa"
    },
    {
        textName: "@XRCZ",
        picture: "/images/car1.jpg",
        local: "Pista do Tigre, São Paulo",
        button: "Ver Detalhes",
        page: "/detalhesCorrida"
    },
];

export default function Feed() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState(postsData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const filteredPosts = posts.filter(post =>
        post.textName.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <img src="/images/loading.gif" alt="Carregando..." className={styles.loadingGif} />
            </div>
        );
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.containerBanner}>
                    <Header />
                    <div className={styles.textBanner}>
                        <img src="/images/textVemP-removebg-preview.png" alt="" />
                    </div>
                </div>

                <div className={styles.separation}>
                    <input
                        type="text"
                        placeholder="Onde vamos hoje?"
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <button onClick={() => setSearch(searchInput)}>🔍</button>
                </div>

                <div className={styles.feed}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, idx) => (
                            <Post
                                key={idx}
                                textName={post.textName}
                                picture={post.picture}
                                local={post.local}
                                button={post.button}
                                page={post.page}
                            />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado.</p>
                    )}
                </div>
            </div>

            <div className={styles.separation2}></div>

            <Footer />
        </div>
    );
}