import styles from "../styles/Cards.module.css";

export default function Cards({ picture, text }) {
    return (
        <div className={styles.card}>
            <img src={picture} alt="" />

            <h2>{text}</h2>
        </div>
    );
}