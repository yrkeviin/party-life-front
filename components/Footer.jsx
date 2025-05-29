import styles from "../styles/Footer.module.css";
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className={styles.containerFooter}>
            <div className={styles.footerContent}>
                <div className={styles.left}>
                    <h2>PARTYLIFE</h2>
                    <p>O melhor lugar pra descobrir, divulgar e viver festas inesquecíveis.</p>
                    <p>De onde estiver, a vibe te encontra.</p>
                    <p>contato@partylife.com</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/accounts/login/"><FaInstagram /></a>
                        <a href="https://x.com/i/flow/login"><FaTwitter /></a>
                        <a href="https://www.facebook.com/?locale=pt_BR"><FaFacebookF /></a>
                        <a href="https://www.tiktok.com/upload?lang=pt_BR"><FaTiktok /></a>
                    </div>
                    <p className={styles.copy}>
                        © 2025 Party Life — Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
}
