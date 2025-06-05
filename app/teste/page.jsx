"use client";
import ProfilePosts from "@/components/ProfilePosts";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Teste() {
    const [posts, setPosts] = useState([]);

    const getUserPosts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/$9`, {
            });
            console.log('Posts do usuário:', response.data);
            setPosts(response.data);
        } catch (error) {
            console.error('Erro ao buscar posts do usuário:', error);
        }
    };
    useEffect(() => {
        getUserPosts();
    }, []);
    return (
        < ProfilePosts
            key={posts.id}
            foto={posts.image_post}
            data={posts.data_postagem ? new Date(post.data_postagem).toLocaleDateString('pt-BR') : ''}
            horario={posts.horario}
            descricao={posts.content}
        />
    );
}