import styles from "../styles/Posts.module.css";

export default function Posts({ textName, picture, local, page }) {
    return (
        <div className={styles.post}>
            <h3>{textName}</h3>

            <img alt="Imagem de exemplo" src={picture}></img>

            <div className={styles.action}>
                <h4>{local}</h4>
                <button>
                    <a href={page}>Ver Detalhes</a>
                </button>
            </div>
        </div>
    );
}