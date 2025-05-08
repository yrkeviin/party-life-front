import styles from "../styles/Cards.module.css";
import { Card } from "antd";



export default function Cards({ picture, text, idade, description }) {
    return (
        <div className={styles.card} style={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
            <Card
                hoverable
                style={{ maxWidth: "100%", width: "100%", height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                cover={<img alt="Imagem de exemplo" src={picture} style={{ width: "100%", height: "auto", objectFit: "cover" }} />}
            >
                <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>{text}</h2>
                <h3 style={{ fontSize: "1.2rem", textAlign: "center" }}>{idade}</h3>
                <p style={{ fontSize: "1rem", textAlign: "center", flexGrow: 1 }}>{description}</p>
            </Card>
        </div>
    );
}