import styles from '../styles/faq.module.css';

import MyForm from '../components/myForm';
import Question from '../components/faq/question';

import faqArr from '../components/faq/faqArr';

export default function Faq() {
  return (
    <>
      <section className='title'>
        <div className='container'>
          <h1>
            <b>Často kladené otázky</b>
          </h1>
        </div>
      </section>

      <section className={styles.questions}>
        <div className='container'>
          <ul className={styles.ul}>
            {console.log(faqArr)}
            {faqArr.map(([question, answer], key) => {
              return <Question question={question} answer={answer} key={key} />;
            })}
          </ul>

          <p className={styles.writeUs}>
            Nenašli jste tu odpověď na Vaši otázku? Napište nám nebo zavolejte:{' '}
            <a href='tel:+420554004678'>
              <b>+420 554 004 678</b>
            </a>
          </p>
        </div>
      </section>

      <section className='form'>
        <div className='container'>
          <div className='h3-wrap'>
            <h3 className='form-title'>Napište nám</h3>
          </div>
          <MyForm />
        </div>
      </section>
    </>
  );
}
