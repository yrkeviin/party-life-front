"use client";
import React, { useState } from 'react';

const Formulario = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErro('');

        if (senha.length < 6) {
            setErro('A senha deve ter pelo menos 6 caracteres.');
        } else {
            window.location.href = '/home';
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
            </div>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;