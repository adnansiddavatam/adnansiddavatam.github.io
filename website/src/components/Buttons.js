// src/components/Buttons.js
import React from 'react';
import styles from '../styles/Buttons.module.css';

function Buttons() {
  return (
    <div className={styles.buttons}>
      <button className={`${styles.button} ${styles.resume}`}>Resume</button>
      <button className={`${styles.button} ${styles.projects}`}>Projects</button>
      <button className={`${styles.button} ${styles.contact}`}>Contact</button>
    </div>
  );
}

export default Buttons;
