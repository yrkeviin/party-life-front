import styles from "../styles/ProfilePosts.module.css";
import { FaSearchLocation, FaCalendar, FaClock } from 'react-icons/fa';
import Image from "next/image";

export default function ProfilePosts({ foto, local, data, horario, descricao }) {
    return (
        <div className={styles.post}>
            <div className={styles.contentImage}>
            <Image src={foto} alt="Post Image" className={styles.postImage} width={300} height={300} />
            </div>

            <div className={styles.postInfo}>
                <div className={styles.postTime}>
                    <p> <FaSearchLocation className={styles.icon}/> {local} </p>
                    <p> <FaCalendar className={styles.icon}/> {data} </p>
                    <p> <FaClock className={styles.icon}/> {horario} </p>
                </div>

                <div className={styles.postDescription}>
                    <p>{descricao}</p>
                </div>

                <button className={styles.postButton}>Ver Detalhes</button>
            </div>
        </div>
    );
}