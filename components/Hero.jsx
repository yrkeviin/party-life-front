import React from "react";
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h2>RAVE DA COR</h2>
        <p>Nova Holanda</p>
        <p>12 de julho | 17h às 4h</p>
      </div>
    </section>
  );
}