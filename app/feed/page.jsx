"use client";
import { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import Header from "../../components/Header";
import Post from "../../components/Posts";
import Footer from "../../components/Footer";
import { FaSearch } from 'react-icons/fa';

const postsData = [
    {
        textName: "@menorKabrinha",
        picture: "./raveBanner.jpg",
        local: "Rave do Menor, São Paulo",
        button: "Ver Detalhes",
        page: "/detalheRaveCor"
    },
    {
        textName: "@juliaRiver",
        picture: "./bannerPraia.jpg",
        local: "Praia do Leme, Rio de Janeiro",
        button: "Ver Detalhes",
        page: "/detalhesFestaPraia"
    },
    {
        textName: "@angelotti",
        picture: "./poolPartyBanner.jpg",
        local: "Praia do Leme, Rio de Janeiro",
        button: "Ver Detalhes"
    },
    {
        textName: "@juju mines",
        picture: "./resenhaBanner.png",
        local: "Casa da Juju, São Paulo",
        button: "Ver Detalhes",
        page: "/detalhesResenhaCasa"
    },
    {
        textName: "@XRCZ",
        picture: "./encontroCarros.jpg",
        local: "Pista do Tigre, São Paulo",
        button: "Ver Detalhes"
    },
];

export default function Feed() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState(""); // valor do input
    const [search, setSearch] = useState(""); // valor usado para filtrar
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
                <img src="/loading.gif" alt="Carregando..." className={styles.loadingGif} />
            </div>
        );
    }

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