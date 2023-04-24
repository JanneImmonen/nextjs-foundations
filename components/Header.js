// components/Header.js
import React from 'react';
import Navigation from './Navigation';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Next.js Foundations</h1>
      <p className={styles.subtitle}>A beginner-friendly, example-led course.</p>
      <Navigation />
    </header>
  );
};

export default Header;
