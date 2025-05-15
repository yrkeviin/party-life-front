import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.containerFooter}>
                <div>
                    <p>Desenvolvido por: Kevin Lima</p>
                </div>

                <div>
                    <p>Contato: +55 13 00171-0157 </p>
                </div>

                <div>
                    <p>🎶 Party Life © 2025 – O melhor lugar pra descobrir, divulgar e viver festas inesquecíveis.</p>
                    <p>📍 De onde estiver, a vibe te encontra.</p>
                    <p>📧 Fale com a gente: contato@partylife.com</p>
                    <p>📱 Siga nas redes: @partylife.oficial</p>
                </div>
            </div>
    );
}