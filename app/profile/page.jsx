import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Profile() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.profileContainer}>
                <div className={styles.profilePicture}>
                    <img src="/profileenzo.png" alt="Profile Picture" />
                </div>
                <div className={styles.profileInfo}>
                    <h1>Nome do Usuário</h1>
                    <p>@username</p>
                    <p>Descrição do usuário</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
