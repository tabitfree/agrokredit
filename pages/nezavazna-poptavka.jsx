import RequestForm from '../components/requestForm';

import styles from '../styles/request.module.css';

export default function Request() {
  return (
    <>
      <section className='title'>
        <div className='container'>
          <h1>
            <b>Nezávazná poptávka</b> <br />
            vašeho zemědělského úvěru
          </h1>
        </div>
      </section>

      <section className={styles.txt}>
        <div className='container'>
          <h3 className='dark'>
            Vyplňte formulář nebo nám zavolejte: <br className={styles.br} />
            <a href='tel:+420554004678' className='mainclr'>
              <b>+420 554 004 678</b>
            </a>
          </h3>

          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy
          </p>
        </div>
      </section>

      <section className='form'>
        <div className='container'>
          <RequestForm />
        </div>
      </section>
    </>
  );
}
