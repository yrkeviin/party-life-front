import styles from "./entrar.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Entrar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="logoInicio.png" alt="" />
            </div>

            <div className={styles.divisor}></div>

            <div className={styles.input}>
                <Input type="text" place="Email" />
                <Input type="password" place="Senha" />
            </div>

            <div className={styles.button}>
                <Button text="Entrar" />
            </div>

        </div>
    );
}