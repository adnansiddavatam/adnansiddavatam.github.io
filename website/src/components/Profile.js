// src/components/Profile.js
import React from 'react';
import styles from '../styles/Profile.module.css';
import profilePic from './Pictures/AdnanPic.jpg'; // Add your picture here

function Profile() {
  return (
    <div className={styles.profile}>
      <img src={profilePic} alt="Profile" className={styles.profilePic} />
    </div>
  );
}

export default Profile;
