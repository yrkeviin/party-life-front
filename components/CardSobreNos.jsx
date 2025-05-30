import styles from '../styles/CardSobreNos.module.css';

export default function CardSobreNos({ nome, foto, funcao }) {
    return (
        <div className={styles.card}>
            <div className={styles.nome}>
                <h2>{nome}</h2>
            </div>
            <div className={styles.fotocontainer}>
                <img src={foto} alt={nome} width={250} height={250} className={styles.fotocontent} />
            </div>
            <div className={styles.funcao}>
                <p>{funcao}</p>
            </div>
        </div>
    );
}