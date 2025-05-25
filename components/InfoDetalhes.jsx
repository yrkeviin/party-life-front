import React from "react";
import styles from '../styles/InfoDetalhes.module.css';

export default function InfoDetalhes({ text, title, local, date, hour }) {
  return (
    <div className={styles.infoContainer}>
      <h3>{text}</h3>
      <h1>{title}</h1>
      <p>{local}</p>
      <p>{date}</p>
      <p>{hour}</p>
    </div>
  );
}