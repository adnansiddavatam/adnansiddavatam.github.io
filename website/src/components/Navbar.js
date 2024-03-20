// src/components/Navbar.js
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.name} >
            <h1>Adnan Siddavatam</h1>
            <p>Software Development Student</p>
        </div>  
        <div className={styles.links}>  
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
  );
}

export default Navbar;
