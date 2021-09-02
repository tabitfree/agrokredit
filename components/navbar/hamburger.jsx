import { useState } from 'react';
import styles from '../../styles/navbar/hamburger.module.css';

export default function Hamburger({ onClick, show }) {
  return (
    <div className={styles.wrap} onClick={onClick} data-bin={show}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
}
