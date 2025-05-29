import styles from "../styles/Atractions.module.css";

export default function Atractions(atractionImage, atractionName) {
    return (
        <div className={styles.button}>
            <img src={atractionImage} alt="" />

            <h2>{atractionName}</h2>
        </div>
    );
}
