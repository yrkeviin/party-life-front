'use client';

import styles from './Page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Divisor from '../../components/Divisor';

export default function Login() {
    const router = useRouter();

    function handleLogin() {
        router.push('/home');
    }

    return (
        <div className={styles.container}>
            <Image src="/logopartylife.png" alt="Logo PARTY LIFE" width={450} height={200} className={styles.image} />
            < Divisor />
            <div className={styles.controls}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>E-mail :</label>
                    <input
                        id="email"
                        type="text"
                        className={styles.emailInput}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="senha" className={styles.label}>Senha :</label>
                    <input
                        id="senha"
                        type="password"
                        className={styles.senhaInput}
                    />
                </div>
            </div>
            <div className={styles.entrarButton} onClick={handleLogin}>Entrar</div>
        </div>
    );
}