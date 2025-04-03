import styles from "../styles/Button.module.css";

export default function Button({ text }) {
    return (
    <div className={styles.button}>
        <button style={styles.text}>{text}</button>
    </div>
);
}