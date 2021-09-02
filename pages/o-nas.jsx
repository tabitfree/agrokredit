import Link from 'next/link';
import Image from 'next/image';
import RefCarousel from '../components/about/refCarousel';

import styles from '../styles/about.module.css';

import mainImg from '../public/images/about/mainImg.png';

export default function About() {
  return (
    <>
      <section className='title'>
        <div className={'container ' + styles.title}>
          <h1>
            <b>O nás</b>
          </h1>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={'container ' + styles.container}>
          <div className={`half halfFirst ${styles.halfFirst}`}>
            <h2>
              <b>Agrokredit a.s.</b>
            </h2>
            <p>
              Společnost AGROKREDIT a.s. je ryze{' '}
              <b>českou kapitálově silnou společností</b> specializují se
              poskytováním{' '}
              <b>finančních služeb zemědělcům a vlastníkům zemědělské půdy</b>.
            </p>
          </div>
          <div className='half'>
            <Image src={mainImg} layout='responsive' />
          </div>
        </div>
      </section>

      <section className={styles.cardCont}>
        <div className={'container ' + styles.container}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>POSLÁNÍ</div>
            <p>
              Poskytování rychlé finanční pomoci zemědělcům nebo financování
              jejich investičních aktivit.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Vize</div>
            <p>
              Být leaderem v oboru nebankovního financování zemědělských
              subjektů.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Hodnoty</div>
            <p>Odpovědnost, férovost, přehlednost a transparentnost.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Lidé</div>
            <p>
              Český management s mnohaletými zkušenostmi v oblasti financí a
              obchodu.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='inner-container'>
            <div className='h2-wrap'>
              <h2>Proč s námi?</h2>
            </div>
            <div className={'flex ' + styles.flex}>
              <div className={`half halfFirst ${styles.first}`}>
                <ul className={styles.ul}>
                  <li className='arrow'>
                    Rozumíme <b>potřebám</b> našich klientů.
                  </li>
                  <li className='arrow'>
                    Ke každému klientovi <b>přistupujeme individuálně</b>.
                    Pružně a <b>rychle</b> řešíme jeho požadavky.
                  </li>
                  <li className='arrow'>
                    Jsme schopni <b>flexibilně reagovat</b> na změny v situaci
                    klienta.
                  </li>
                </ul>
              </div>

              <div className='half'>
                <ul className={styles.ul}>
                  <li className='arrow'>
                    Máme <b>rozumné podmínky</b> úvěrů, včetně možnosti odkladu
                    splátek.
                  </li>
                  <li className='arrow'>
                    <b>Minimalizujeme</b> administrativní <b>zátěž</b> při
                    řešení žádosti o úvěr.
                  </li>
                  <li className='arrow'>
                    Jednáme <b>transparentně</b>.
                  </li>
                </ul>
              </div>
            </div>
            <div className='btnWrap'>
              <Link href='/nezavazna-poptavka'>
                <a className='btn'>Nezávazná poptávka</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.carousel}>
        <div className='container'>
          <div className='inner-container'>
            <div className='h2-wrap'>
              <h2>Reference</h2>
            </div>
            <RefCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
