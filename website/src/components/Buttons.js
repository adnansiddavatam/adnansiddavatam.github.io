// src/components/Buttons.js
import React from 'react';
import styles from '../styles/Buttons.module.css';
import githubLogo from '../components/Pictures/github.png';
import resumeLogo from '../components/Pictures/resume.png';
import contactLogo from '../components/Pictures/linkedin.png';

function Buttons() {
  return (
    
    <div className={styles.buttons}>
      <button className={`${styles.button} ${styles.github}`}>
        <a href="https://github.com/adnansiddavatam" target="_blank" rel="noopener noreferrer" title="GitHub">
          <div className={styles.githubCircle}>
            <img src={githubLogo} alt="GitHub" style={{ height: '40px', width: '40px' }} />
          </div>
        </a>
      </button>

      <button className={`${styles.button} ${styles.resume}`}>
        <img src={resumeLogo} alt="Resume" style={{ height: '40px', width: '40px' }} />
      </button>
    
      <button className={`${styles.button} ${styles.contact}`}>
        <a href="https://www.linkedin.com/in/adnan-siddavatam/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <div className={styles.contactCircle}>
            <img src={contactLogo} alt="LinkedIn" style={{ height: '40px', width: '40px' }} />
          </div>
        </a>
      </button>
    </div>
  );
}

export default Buttons;
