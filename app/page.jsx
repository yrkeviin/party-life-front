import styles from "./page.module.css";

export default function Home() {
    return (
    <div className={styles.firstPage}>
        <img src="logoAmarela.png" alt="" />
        <a href=""><h1>Bem-vindo ao Party Life!</h1></a>
    </div>
);
}
