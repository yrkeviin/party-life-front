import styles from "../styles/Atractions.module.css";

export default function Atractions({atractionImage, atractionName}) {
    return (
        <div className={styles.containerAtraction}>
            <img src={atractionImage} alt="" />

            <h3>{atractionName}</h3>
        </div>
    );
}
