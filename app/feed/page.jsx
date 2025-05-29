"use client";
import { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import Header from "../../components/Header";
import Post from "../../components/Posts";
import Footer from "../../components/Footer";

const postsData = [
    {
        textName: "@menorKabrinha",
        picture: "/images/raveFestFeed.jpg",
        local: "Rave do Menor, São Paulo",
        button: "Ver Mais",
        page: "/detalhesRaveCor"
    },
    {
        textName: "@juliaRiver",
        picture: "/images/beachFeed.jpg",
        local: "Praia do Leme, Rio de Janeiro",
        button: "Ver Mais",
        page: "/detalhesFestaPraia"
    },
    {
        textName: "@angelotti",
        picture: "/images/poolPartyFeed.jpg",
        local: "Pool Party, São Paulo",
        button: "Ver Mais",
        page: "/detalhesPoolParty"
    },
    {
        textName: "@juju mines",
        picture: "/images/resenhaFeed.jpg",
        local: "Casa da Juju, São Paulo",
        button: "Ver Mais",
        page: "/detalhesResenhaCasa"
    },
    {
        textName: "@XRCZ",
        picture: "/images/car1.jpg",
        local: "Pista do Tigre, São Paulo",
        button: "Ver Mais",
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
                        placeholder="Pesquise pelo nome de usuário!"
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