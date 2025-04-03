import styles from "./login.module.css";
import Button from "../../components/Button";

export default function Login() {
    return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="logoInicio.png" alt="" />
        </div>

        <div className={styles.button}>
            <Button srcc="/entrar" text="Entrar" />
            <Button srcc="/cadastrar" text="Inscreva-se" />
        </div>

    </div>
);
}