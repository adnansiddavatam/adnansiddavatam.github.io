// src/components/WelcomeMessage.js
import React from 'react';
import styles from '../styles/WelcomeMessage.module.css';

function WelcomeMessage() {
  return (
    <div className={styles.welcomeMessage}>
      <h1>Hello</h1>
      <h2>A Bit About Me</h2>
      <p>I'm a paragraph. Click here to add your own text and edit me...</p>
    </div>
  );
}

export default WelcomeMessage;
