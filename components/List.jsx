import React from "react";
import styles from '../styles/List.module.css';

export default function List({ items }) {
  return (
    <ul className={styles.custom_list}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}