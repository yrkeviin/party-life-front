import Link from "next/link";
import styles from "../styles/Posts.module.css";

export default function Posts({ textName, picture, local, page }) {
    return (
        <div className={styles.post}>
            <h3 className={styles.username}>{textName}</h3>

            <img alt="Imagem de Evento" src={picture}></img>

            <div className={styles.action}>
                <h4>{local}</h4>
                <Link href={page}>
                    <button className={styles.button}>VER MAIS</button>
                </Link>
            </div>
        </div>
    );
}
