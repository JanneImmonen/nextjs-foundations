// pages/index.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Course Objective</h2>
        <p>
          In this course, you will build a simple project step-by-step, starting with a JavaScript
          application and then migrating it to React and Next.js. You will learn about various
          Next.js features, such as server-side rendering, static site generation, API routes, and
          more.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
