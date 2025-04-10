import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h1>
                    <a className={styles.title} href="/home">Party Life</a>
                </h1>

                <p className={styles.page}>
                    <a href="/home">Home</a>
                </p>

                <p>
                    <a href="/">Teste</a>
                </p>

                <p>
                    <a href="/">Teste2</a>
                </p>
            </nav>
        </div>
    );
}