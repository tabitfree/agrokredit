import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/home/card';
import Reason from '../components/home/reason';

import cardsArray from '../components/home/cardsArray';
import reasonsArray from '../components/home/reasonsArray';

import styles from '../styles/home.module.css';

import person1 from '../public/images/home/person1.png';
import person2 from '../public/images/home/person2.png';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className='container'>
          <div className={styles.heroWrap}>
            <h1 className={styles.title}>
              <b>Finanční pomocník</b> <br />
              pro zemědělce a zemědělské podniky
            </h1>
            <div className={styles.heroBtnWrap}>
              <Link href='/'>
                <a className='btn'>Více o úvěrech</a>
              </Link>
              <Link href='/'>
                <a className='btn'>Nezávazná poptávka</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className='container'>
          <div className={styles.cardsWrapper}>
            {cardsArray.map((card, key) => {
              return (
                <Card
                  img={card[0]}
                  title={card[1]}
                  subTitle={card[2]}
                  txtArr={card[3]}
                  link={card[4]}
                  id={key}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.reasons}>
        <div className='container'>
          <h2 className={styles.h31}>4 důvody pro využití našich služeb</h2>
          <div className={styles.reasonsCardsWrapper}>
            {reasonsArray.map((reason, key) => {
              return (
                <Reason
                  img={reason.reason}
                  txt={reason.txt}
                  num={key + 1}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.ref}>
        <div className='container'>
          <div className='inner-container'>
            <div className='h2-wrap'>
              <h2>Reference</h2>
            </div>
            <div className={styles.refWrap}>
              <div className={styles.refCard}>
                <div className={styles.refTxt}>
                  „Situaci jsme museli řešit nebankovnícmi společnostmi , které
                  nás svým vysokým úrokem připravili téměř o celý profit. Od
                  roku 2014 využíváme finančních služeb společnosti AGROkredit,
                  která nám zlevnila úrokové náklady o více než 300%.“
                </div>
                <div className={styles.refPerson}>
                  <div className={styles.refImg}>
                    <Image src={person1} layout='fixed' />
                  </div>
                  <div className={styles.refInfo}>
                    <div className={styles.refName}>Ing. Václav Kroulík</div>
                    <div className={styles.refLocation}>
                      Předseda představenstva, Zemědělské družstvo Dřísy
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.refCard}>
                <div className={styles.refTxt}>
                  „Díky nekalým praktikám lichváře moje rodina málem přišla o
                  komerční nemovitost v hodnotě 10 mil. Kč. Přestože jsem byl v
                  exekuci, tak mi zástupci společnosti AGROKREDIT dokázali
                  pomoci a situaci vyřešili. Jsem jim za to vděčný.“
                </div>
                <div className={styles.refPerson}>
                  <div className={styles.refImg}>
                    <Image src={person2} layout='fixed' />
                  </div>
                  <div className={styles.refInfo}>
                    <div className={styles.refName}>Lukáš Kaplan</div>
                    <div className={styles.refLocation}>
                      Rentier, Hradec Kralové
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btnWrap}>
              <Link href='/'>
                <a className='btn'>Více referencí</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
