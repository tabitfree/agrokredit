import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/loans.module.css';

import titleImg from '../public/images/loans/sklizen.png';

export default function Sklizen() {
  return (
    <>
      <section className={'title ' + styles.title}>
        <div className='container'>
          <h1>
            <b>Úvěry a půjčky</b> <br />
            za výhodných podmínek
          </h1>
        </div>
      </section>
      <section className={styles.info}>
        <div className={'container halfContainer ' + styles.container}>
          <div className='half halfFirst'>
            <h2 className={styles.h2}>
              Úvěr <b>Sklizeň+</b>
            </h2>
            <p className={styles.firstPara}>
              Úvěr je určen <b>zemědělským prvovýrobcům</b>,{' '}
              <b>kteří nechtějí prodávat svou produkci ihned po sklizni</b>, kdy
              bývají ceny zemědělských komodit pravidelně na svém ročním minumu,
              a nemají dostatek finančních prostředků pro držbu své produkce a
              její{' '}
              <b>prodej až v momentě, kdy budou s výkupními cenami spokojeni</b>
              .
            </p>
            <p>
              <b>Zajišťěním úvěru je klientova produkce</b>. Stanovení výše
              úrokové sazby je ovlivněno uskladněním zastavené produkce (vlastní
              x externí) a výši výnosového poměru z rozdílu mezi aktuální a
              budoucí cenou, o který se je žadatel ochoten s naší společností
              rozdělit. <b>Při poměru 1/1 je úroková sazba dokonce nulová</b>,
              což snižuje klientovo <b>riziko zadlužení na mimimum</b>.
            </p>
          </div>
          <div className='half'>
            <Image
              src={titleImg}
              layout='responsive'
              className={styles.mainImg}
            />
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className={styles.container}>
            <div className='half halfFirst'>
              <h3 className='dark'>
                <b>Výhody půjčky</b>
              </h3>
              <ul className={styles.ul}>
                <li className='arrow'>
                  <b>rychlé vyřízení</b> (obvykle do 5 pracovních dní)
                </li>
                <li className='arrow'>
                  <b>bezúročné financování</b> u varianty s výnosovým poměrem
                  1/1
                </li>
                <li className='arrow'>
                  <b>minimální administrativní zátěž</b> související s její
                  poskytnutím
                </li>
                <li className='arrow'>
                  <b>vyhodnocení žádosti</b> o půjčku <b>zcela zdarma</b>
                </li>
                <li className='arrow'>
                  předčasného splacení <b>bez sankce</b>
                </li>
                <li className='arrow'>
                  dostupnost <b>na celém území ČR</b>
                </li>
                <li className='arrow'>
                  <b>transparentní</b> úvěrová dokumentace
                </li>
              </ul>
            </div>
            <div className='half'>
              <h3 className='dark'>
                <b>Parametry půjčky</b>
              </h3>
              <ul className={styles.ul}>
                <li className='arrow'>
                  <b>úrok</b> již od <b>0 % p.a.</b>
                </li>
                <li className='arrow'>
                  výše od 100 000 Kč do <b>5 mil. Kč</b>
                </li>
                <li className='arrow'>
                  <b>splatnost</b> do 12 měsíců
                </li>
                <li className='arrow'>
                  <b>zajištění</b> zemědělské komodity (obiloviny, olejniny)
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <Link href='/nezavazna-poptavka'>
              <a className='btn'>Nezávazná poptávka</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
