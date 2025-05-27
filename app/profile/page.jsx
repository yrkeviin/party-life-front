"use client";
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Divisor from '@/components/Divisor';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

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
                <img src="/loading.gif" alt="Carregando..." className={styles.loadingGif} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                < Header />
                <div className={styles.profileinfo}>
                    <div className={styles.backIcon}> < FaArrowLeft /> </div>
                    <div className={styles.profileimage}>
                        <img src="/profilerandom.webp" alt="Profile Picture" className={styles.image} />
                    </div>
                    <div className={styles.profiletext}>
                        <h1>Enzo Turcovic</h1>
                        <p>@turcoo</p>
                    </div>
                </div>
                < Divisor />
                <div className={styles.postsContent}>
                    <h2>Suas Festas!</h2>
                    <div className={styles.post}>
                        <Image src="/bannerPraia.jpg" alt="Post 1" width={300} height={200} className={styles.postImage} />
                        <div className={styles.postInfo}>
                            <div className={styles.postTime}>
                                <p>Localização</p>
                                <p>Calendário</p>
                                <p>Relógio</p>
                            </div>
                            <div className={styles.postDescription}>
                                <p>Post 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <button className={styles.postButton}>Ver Detalhes</button>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <p>Post 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            < Footer />
        </div>
    );
}
