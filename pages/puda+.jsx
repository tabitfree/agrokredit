import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/loans.module.css';

import titleImg from '../public/images/loans/agro.png';

export default function Puda() {
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
        <div className={'container ' + styles.container}>
          <div className='half halfFirst'>
            <h2 className={styles.h2}>
              Hypo půjčka <b>PŮDA+</b>
            </h2>
            <p className={styles.firstPara}>
              <b>AGRO+</b> je úvěr určený{' '}
              <b>zemědělcům a zemědělským podnikům</b>, kteří hledají{' '}
              <b>
                rychlou a cenově výhodnou alternativu k bankovnímu financování
              </b>
              . Konstrukce a parametry úvěru jsou podobné klasickým bankovním
              úvěrům, nicméně jeho vyřízení je{' '}
              <b>výrazně jednodušší a rychlejší</b>. Přestože se jedná o
              <b>neúčelový úvěr</b>, naši zákazníci úvěr s oblibou využívají
              nejčastějí k <b>refinancování závazků</b> a financování svých
              <b>investičních</b> a <b>provozních</b> potřeb.
            </p>
            <p>
              Chápeme, že zemědělská provovýroba je těžko předvídatelný a
              nestabilní obor, proto jsme <b>připraveni finančně pomoci</b> také
              subjektům, kterým se aktuálně příliš nedaří a musí čelit některým
              z mnoha úskalým tohoto složítého a tvrdého odvětví.
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
                  <b>nastavení splátek dle požadavků a potřeb klienta</b>
                  nebo <b>sezónnosti výroby</b>
                </li>
                <li className='arrow'>
                  <b>minimální administrativní zátěž</b> související s její
                  poskytnutím
                </li>
                <li className='arrow'>
                  <b>vyhodnocení žádosti</b> o půjčku <b>zcela zdarma</b>, a to
                  včetně stanovení hodnoty zajištění
                </li>
                <li className='arrow'>
                  <b>úrok srovnatelný se sazbami menších bankovních domů</b>
                </li>
                <li className='arrow'>
                  dostupnost <b>na celém území ČR</b>
                </li>
                <li className='arrow'>
                  <b>transparentní</b> úvěrová dokumentace
                </li>
                <li className='arrow'>
                  <b>nastavení splátek dle požadavků a možností klienta</b>
                </li>
                <li className='arrow'>
                  <b>možnost předčasného splacení bez sankce</b>
                </li>
              </ul>
            </div>
            <div className={styles.half}>
              <h3 className='dark'>
                <b>Parametry půjčky</b>
              </h3>
              <ul className={styles.ul}>
                <li className='arrow'>
                  <b>úrok</b> již od <b>6,9 % p.a.</b>
                </li>
                <li className='arrow'>
                  výše od 100 000 Kč do <b>30 mil. Kč</b>
                </li>
                <li className='arrow'>
                  <b>splatnost</b> od 3 měsíců do 5 let
                </li>
                <li className='arrow'>
                  <b>zajištění</b> nemovitosti, zemědělská technika, obchodní
                  podíly, současná nebo budoucí produkce
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
