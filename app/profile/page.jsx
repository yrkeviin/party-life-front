import styles from './Profile.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Divisor from '@/components/Divisor';

export default function Profile() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Header />
                <div className={styles.profileinfo}>
                    <div className={styles.profileimage}>
                        <img src="/profilePic.png" alt="Profile Picture" className={styles.image}/>
                    </div>
                    <div className={styles.profiletext}>
                        <h1>Enzo Turcovic</h1>
                        <p>@turcoo</p>
                    </div>
                </div>
                < Divisor />
                <div className={styles.posts}>
                    <h2>Suas Festas!</h2>
                    <div className={styles.post}>
                        <p>Post 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={styles.post}>
                        <p>Post 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
