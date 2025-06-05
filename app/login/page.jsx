"use client";
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from 'antd';
import styles from './Page.module.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
                email,
                senha: password,
            });

            const { token } = response.data;

            if (!token) {
                throw new Error('Token não encontrado na resposta');
            }

            await AsyncStorage.setItem('token', token);

            setError(null);
            setSuccess('Login realizado com sucesso!');

            navigation.navigate('/home');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Erro ao fazer login. Tente novamente.';
            setError(errorMessage);
            setSuccess(null);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h1>Login</h1>

                <div className={styles.form}>
                    <Input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        place="E-mail"
                        onChange={e => setEmail(e.target.value)}
                        className={styles.inputs}
                    />

                    <Input
                        placeholder="Senha"
                        value={password}
                        place="Senha"
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />

                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>{success}</p>}
                    <button className={styles.entrar} onClick={handleLogin}>Entrar</button>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src="/images/logo.png" alt="Login" className={styles.image} />
            </div>
        </div>
    );
};