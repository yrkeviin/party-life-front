import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1>
                    <a className={styles.title} href="/home">PARTY LIFE</a>
                </h1>

                <p className={styles.page}>
                    <a href="/home">Home</a>
                </p>

                <p className={styles.page}>
                    <a href="/feed">Teste</a>
                </p>

                <p className={styles.page}>
                    <a href="/">Teste2</a>
                </p>
            </nav>
        </div>
    );
}