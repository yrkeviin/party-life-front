import styles from "../styles/Button.module.css";

export default function Button({ text, srcc }) {
    return (
    <div className={styles.button}>
        <a href={srcc}><button style={styles.text}>{text}</button></a>
    </div>
);
}