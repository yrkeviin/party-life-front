import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.containerFooter}>
            <div className={styles.footerContent}>
                <p>🎶 Party Life © 2025 – O melhor lugar pra descobrir, divulgar e viver festas inesquecíveis.</p>
                <p>📍 De onde estiver, a vibe te encontra.</p>
                <p>📧 Fale com a gente: contato@partylife.com</p>
                <p>📱 Siga nas redes: @partylife.oficial</p>
            </div>
        </div>
    );
}