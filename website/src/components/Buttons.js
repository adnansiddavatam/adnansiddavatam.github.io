// src/components/Buttons.js
import React from 'react';
import styles from '../styles/Buttons.module.css';
import githubLogo from '../components/Pictures/github.png';
import resumeLogo from '../components/Pictures/resume.png';
import contactLogo from '../components/Pictures/linkedin.png';
import resumePDF from '../components/Adnan Siddavatam Resume.pdf';

function Buttons() {
  const handleResumeClick = () => {
    window.open(resumePDF, '_blank');
  };
  return (
    <div className={styles.buttons}>
      <button className={`${styles.button} ${styles.github}`}>
        <a href="https://github.com/adnansiddavatam" target="_blank" rel="noopener noreferrer" title="My GitHub">
          <div className={styles.githubCircle}>
            <img src={githubLogo} alt="GitHub" style={{ height: '40px', width: '40px' }} />
          </div>
        </a>
      </button>

      <button className={`${styles.button} ${styles.resume}`} onClick={handleResumeClick} title="My Resume">
        <img src={resumeLogo} alt="Resume" style={{ height: '40px', width: '40px' }} />
      </button>
    
      <button className={`${styles.button} ${styles.contact}`}>
        <a href="https://www.linkedin.com/in/adnan-siddavatam/" target="_blank" rel="noopener noreferrer" title="My LinkedIn">
          <div className={styles.contactCircle}>
            <img src={contactLogo} alt="LinkedIn" style={{ height: '40px', width: '40px' }} />
          </div>
        </a>
      </button>
    </div>
  );
}

export default Buttons;
