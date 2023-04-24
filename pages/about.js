// pages/about.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>About Next.js Foundations</h2>
        <p>
          Next.js Foundations is a beginner-friendly, example-led course that aims to provide a solid
          foundation for developers who want to learn Next.js. Throughout the course, you will
          build a simple project step-by-step, starting with a JavaScript application and then
          migrating it to React and Next.js.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
