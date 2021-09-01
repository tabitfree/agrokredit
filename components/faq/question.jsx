import { useState } from 'react';

import styles from '../../styles/faq/question.module.css';

export default function Question({ question, answer }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <li className={styles.li + ' arrow'} onClick={handleClick}>
        <p className={!show ? styles.border : styles.question}>{question}</p>
      </li>

      {show && <p className={styles.answer}>{answer}</p>}
    </>
  );
}
