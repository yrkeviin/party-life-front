"use client";
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Divisor from '@/components/Divisor';
import { FaArrowLeft } from 'react-icons/fa';
import ProfilePosts from '../../components/ProfilePosts';

export default function Profile() {

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
            <div className={styles.containerHeader}>
                <Header />
            </div>

            <div className={styles.containerProfile}>
                <div className={styles.profileHeader}>
                    <a href="/home">
                        <button>
                            <FaArrowLeft className={styles.iconBack} />
                        </button>
                    </a>

                    <img src="/images/profilekevin.jpg" alt="" />

                    <h1>User Name</h1>
                    <h2>@username</h2>
                </div>
            </div>

            <div className={styles.containerDivisor}>
                <Divisor />
            </div>

            <div className={styles.containerPostagens}>
                <h1>POSTAGENS</h1>
                <ProfilePosts
                foto="/images/raveFestFeed.jpg"
                local="São Paulo, SP"
                data="01/01/2023"
                horario="10:00 AM"
                descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />
                
                <ProfilePosts
                foto="/images/raveFestFeed.jpg"
                local="São Paulo, SP"
                data="01/01/2023"
                horario="10:00 AM"
                descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />

                <ProfilePosts
                foto="/images/raveFestFeed.jpg"
                local="São Paulo, SP"
                data="01/01/2023"
                horario="10:00 AM"
                descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                />
            </div>


        </div>
    );
}
