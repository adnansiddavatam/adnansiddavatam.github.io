// src/components/Navbar.js
import React from 'react';
import styles from '../styles/Navbar.module.css';
import resumePDF from '../components/Adnan Siddavatam Resume.pdf';

function Navbar() {
  const handleResumeClick = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <nav className={styles.navbar}>
        <div className={styles.name} >
            <h1>Adnan Siddavatam</h1>
            <p>Software Development Student</p>
        </div>  
        <div className={styles.links}>  
            <a href="#resume" onClick={handleResumeClick}>Resume</a>
            <a href="https://github.com/adnansiddavatam" target="_blank" rel="noopener noreferrer">Projects</a>
            <a href="mailto:adnan.ahmed.siddavatam@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
    </nav>
  );
}

export default Navbar;
