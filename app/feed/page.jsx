"use client";
import { useState, useEffect } from "react";
import styles from "./Feed.module.css";
import Header from "../../components/Header";
import Post from "../../components/Posts";
import Footer from "../../components/Footer";
import axios from "axios";

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
    {
        textName: "@GP",
        picture: "/images/corridaPost.jpg",
        local: "Pista do Tigre, São Paulo",
        button: "Ver Mais",
        page: "/detalhesCorrida2"
    },
    {
        textName: "@Cebezinho",
        picture: "/images/beachPost.jpg",
        local: "Pista do Tigre, São Paulo",
        button: "Ver Mais",
        page: "/detalhesFestaPraia2"
    },
    {
        textName: "@Ju Santos",
        picture: "/images/ravePost.jpg",
        local: "Rave da Ju, São Paulo",
        button: "Ver Mais",
        page: "/detalhesRave"
    }
];

export default function Feed() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState(postsData);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/events");
                setData(response.data);
                console.log("Eventos recebidos:", response.data);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            }
        };

        fetchPosts();
    },[]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    const filteredPosts = posts.filter(post =>
        Array.isArray(post) ? post.some(p => p.textName?.toLowerCase().includes(search.toLowerCase())) :
        post.textName?.toLowerCase().includes(search.toLowerCase())
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
                        <p>Nenhum resultado encontrado!</p>
                    )}
                </div>
            </div>

            <div className={styles.separation2}></div>

            <Footer />
        </div>
    );
}