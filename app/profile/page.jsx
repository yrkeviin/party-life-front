"use client";
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Divisor from '@/components/Divisor';
import { FaArrowLeft } from 'react-icons/fa';
import ProfilePosts from '../../components/ProfilePosts';
import axios from 'axios';

export default function Profile() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [posts, setPosts] = useState([]);
    const apiKey = "epRIkRnkdAlb";

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/users");
                setData(response.data);
                console.log("Usuários recebidos:", response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/posts");
                setPosts(response.data);
                console.log("Postagens recebidas:", response.data);
            } catch (error) {
                console.error("Erro ao buscar postagens:", error);
            }
        };

        fetchPosts();
    }, []);

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
            <div className={styles.containerHeader}>
                <Header />
            </div>

            <div className={styles.containerProfile}>
                <div className={styles.arrowIcon}>
                    <a href="/home">
                        <button>
                            <FaArrowLeft className={styles.iconBack} />
                        </button>
                    </a>
                </div>
                <div className={styles.profileHeader}>
                    <img src={data[0].perfil_photo} alt={data[0].name} className={styles.imageProfile} />

                    <div className={styles.profileInfo}>
                        <h1>Olá, {data[0].name}</h1>
                        <h2>{data[0].username}</h2>
                    </div>
                </div>
            </div>

            <div className={styles.containerDivisor}>
                <Divisor />
            </div>

            <div className={styles.containerPostagens}>
                <h1>POSTAGENS</h1>
                {posts.map((post) => (
                    <ProfilePosts
                        key={post.id}
                        foto={post.image_post}
                        local={post.local}
                        data={post.data}
                        horario={post.horario}
                        descricao={post.content}
                    />
                ))}
                <ProfilePosts
                    foto="/images/ravePost.jpg"
                    local="São Paulo, SP"
                    data="01/01/2023"
                    horario="10:00 AM"
                    descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}
