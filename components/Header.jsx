import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>
                        <a className={styles.title} href="/home">PARTY LIFE</a>
                    </h1>
                </div>

                <div className={styles.links}>
                    <p className={styles.page}>
                        <a href="/home">Home</a>
                    </p>

                    <p className={styles.page}>
                        <a href="/feed">Feed</a>
                    </p>

                    <p className={styles.page}>
                        <a href="/sobrenos">Sobre Nós</a>
                    </p>
                </div>
            </nav>
        </div>
    );
}
