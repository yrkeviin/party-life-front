"use client";
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Divisor from '@/components/Divisor';
import { FaArrowLeft } from 'react-icons/fa';
import ProfilePosts from '@/components/ProfilePosts';

export default function Profile() {

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
                <img src="/images/loading.gif" alt="Carregando..." className={styles.loadingGif} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.profileInfo}>
                    <div className={styles.backIcon}>
                        <a href="/home" >
                            <FaArrowLeft className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.profileUser}>
                        <img src="/images/profilerandom.webp" alt="Profile Picture" className={styles.image} />
                        <div className={styles.profileText}>
                            <h1>enzoturcovic1234567890@gmail.com</h1>
                        </div>
                    </div>
                </div>
                <Divisor />
                <div className={styles.postsContent}>
                    <h2>Suas Festas!</h2>
                    <ProfilePosts
                        foto="/images/profileenzo.png"
                        local="Praia da Barra"
                        data="Domingo, 01/05/2025"
                        horario="18:00"
                        descricao="Venha se jogar nessa pool party que promete ser inesquecível! Estamos organizando um evento cheio de energia positiva, boa música e muita diversão à beira da piscina. Ideal para quem quer relaxar, curtir a companhia dos amigos e aproveitar o calor com estilo!Venha se jogar nessa pool party que promete ser inesquecível! Estamos organizando um evento cheio de energia positiva, boa música e muita diversão à beira da piscina. Ideal para quem quer relaxar, curtir a companhia dos amigos e aproveitar o calor com estilo!"
                    />
                    <ProfilePosts
                        foto="/images/profileenzo.png"
                        local="Estádio do Maracanã"
                        data="Sábado, 15/06/2025"
                        horario="22:00"
                        descricao="Venha se jogar nessa pool party que promete ser inesquecível! Estamos organizando um evento cheio de energia positiva, boa música e muita diversão à beira da piscina. Ideal para quem quer relaxar, curtir a companhia dos amigos e aproveitar o calor com estilo!Venha se jogar nessa pool party que promete ser inesquecível! Estamos organizando um evento cheio de energia positiva, boa música e muita diversão à beira da piscina. Ideal para quem quer relaxar, curtir a companhia dos amigos e aproveitar o calor com estilo!"
                    />
                    <ProfilePosts
                        foto="/images/profileenzo.png"
                        local="SENAI Valinhos"
                        data="Sexta-feira, 28/07/2025"
                        horario="15:00"
                        descricao="Venha se jogar nessa pool party que promete ser inesquecível! Estamos organizando um evento cheio de energia positiva, boa música e muita diversão à beira da piscina. Ideal para quem quer relaxar, curtir a companhia dos amigos e aproveitar o calor com estilo!Venha se jogar nessa pool party que promete ser inesquecível! Estamos organizando um evento cheio de energia positiva, boa música e muita diversão à beira da piscina. Ideal para quem quer relaxar, curtir a companhia dos amigos e aproveitar o calor com estilo!"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
