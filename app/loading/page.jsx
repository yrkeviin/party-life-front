import styles from "./loading.module.css";

export default function Loading() {
    return (
    <div className={styles.firstPage}>
        <img src="logoAmarela.png" alt="" />
        <a href="/login"><h1>Bem-vindo ao Party Life!</h1></a>
    </div>
);
}
