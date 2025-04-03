import styles from "../styles/Input.module.css";

export default function Login({ type, place }) {
    return (
        <div className={styles.container}>
            <input type={type} placeholder={place} />
        </div>
    );
}