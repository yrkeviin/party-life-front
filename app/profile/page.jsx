"use client";
import { useState, useEffect } from "react";
import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Divisor from '@/components/Divisor';
import { FaArrowLeft } from 'react-icons/fa';
import { IoPencil } from "react-icons/io5";
import { Modal, Input, Button } from "antd";
import ProfilePosts from '../../components/ProfilePosts';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Image from "next/image";

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch {
        return null;
    }
}

export default function Profile() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [perfil_photo, setPerfil_photo] = useState('');
    const [username, setUsername] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [editName, setEditName] = useState('');
    const [editBio, setEditBio] = useState('');

    const getUserData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) return console.error('Token não encontrado!');

            const payload = parseJwt(token);
            if (!payload?.id) return console.error('ID do usuário não encontrado no token!');

            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${payload.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log('Dados do usuário:', response.data);

            const user = Array.isArray(response.data) ? response.data[0] : response.data;
            setName(user?.name || '');
            setBio(user?.bio || '');
            setPerfil_photo(user?.perfil_photo || '/300.svg');
            setUsername(user?.username || '');
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        }
    };

    const getUserPosts = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) return console.error('Token não encontrado!');
            const payload = parseJwt(token);
            if (!payload?.id) return console.error('ID do usuário não encontrado no token!');
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${payload.id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('Posts do usuário:', response.data);
            setPosts(response.data);
        } catch (error) {
            console.error('Erro ao buscar posts do usuário:', error);
        }
    };

    const handleSave = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const payload = parseJwt(token);
            await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/api/users_info/${payload.id}`,
                { name: editName, bio: editBio },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setName(editName);
            setBio(editBio);
            setModalVisible(false);
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
        }
    };

    const openModal = () => {
        setEditName(name);
        setEditBio(bio);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        getUserData();
        getUserPosts();
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
                    <button className={styles.buttonEdit} onClick={openModal}>
                        <IoPencil className={styles.iconPencil} />
                    </button>
                </div>
                <div className={styles.profileHeader}>
                < Image src={ perfil_photo
                            ? `${process.env.NEXT_PUBLIC_IMG_URL}${perfil_photo}`
                            : "/images/150.svg"
                        
                        } width={150} height={150} alt="Foto de Perfil"/>
                    <div className={styles.userDetails}>
                        <div className={styles.profileInfo}>
                            <h1>Olá, {name}</h1>
                            <h2>@{username}</h2>
                        </div>
                        <p className={styles.bio}>{bio}</p>
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
                        foto={post.image_post
                            ? `${process.env.NEXT_PUBLIC_IMG_URL}${post.image_post}`
                            : "/images/300.svg"
                        }
                        local={post.local}
                        data={post.data_postagem ? new Date(post.data_postagem).toLocaleDateString('pt-BR') : ''}
                        horario={post.horario}
                        descricao={post.content}
                    />
                ))}
            </div>

            <div>
                <Footer />
            </div>
            <Modal
                open={modalVisible}
                onCancel={closeModal}
                footer={null}
                centered
                className={styles.customModal}
            >
                <div className={styles.modalContent}>
                    <h2 className={styles.modalTitle}>Editar Perfil</h2>
                    <Input
                        className={styles.input}
                        placeholder="Nome"
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                    />
                    <Input.TextArea
                        className={styles.input}
                        placeholder="Bio"
                        value={editBio}
                        onChange={e => setEditBio(e.target.value)}
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                    <div className={styles.modalButtons}>
                        <Button type="primary" className={styles.saveButton} onClick={handleSave}>
                            Salvar
                        </Button>
                        <Button className={styles.cancelButton} onClick={closeModal}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}