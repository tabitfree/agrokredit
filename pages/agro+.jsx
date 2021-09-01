import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/loans.module.css';

import titleImg from '../public/images/loans/puda.png';

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
              Úvěr <b>Agro+</b>
            </h2>
            <p className={styles.firstPara}>
              <b>Neúčelová půjčka PŮDA+</b> je úvěr zajištěný zamědělskou půdou,
              který z hlediska výše úrokové sazby a souvisejích poplatků{' '}
              <b>konkuruje bankovním úvěrům</b>, přestože její vyřízení je
              výrazně rychlejší.
            </p>
            <p>
              Půjčka je určena pro klienty, kteří chtějí získat finanční
              prostředky <b>za výhodných podmínek bez dokládání účelu</b> a mají
              možnost zajistit úvěr zemědělskou půdou. Prostřednitvím této
              půjčky lze řešit problematické životní situace typu{' '}
              <b>exekuce, insolvence</b> apodobně.
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
                  <b>rychlé vyřízení</b> (obvykle do 2 pracovních dní)
                </li>
                <li className='arrow'>
                  <b>výše úroku srovnatelná</b> se sazbami neučelových{' '}
                  <b>hypoték na bankovním trhu</b>
                </li>
                <li className='arrow'>
                  <b>minimální administrativní zátěž</b> související s její
                  poskytnutím
                </li>
                <li className='arrow'>
                  <b>vyhodnocení žádosti</b> o půjčku <b>zcela zdarma</b>, a to
                  včetně posouzení hodnoty zajištění
                </li>
                <li className='arrow'>
                  předčasného splacení <b>bez sankce</b>
                </li>
                <li className='arrow'>
                  dostupnost <b>na celém území ČR</b>
                </li>
                <li className='arrow'>
                  <b>transparentní úvěrová dokumentace</b>
                </li>
                <li className='arrow'>
                  <b>nastavení splátek dle požadavků a možností klienta</b>
                </li>
                <li className='arrow'>
                  možnost <b>hotovostní výplaty</b> do výše 350 tis. Kč
                </li>
                <li className='arrow'>
                  <b>použítí prostředků bez dokládání účelu</b>
                </li>
              </ul>
            </div>
            <div className='half'>
              <h3 className='dark'>
                <b>Parametry půjčky</b>
              </h3>
              <ul className={styles.ul}>
                <li className='arrow'>
                  <b>úrok</b> již od <b>7,9 % p.a.</b>
                </li>
                <li className='arrow'>
                  výše od 50 000 Kč do <b>15 mil. Kč</b>
                </li>
                <li className='arrow'>
                  <b>splatnost</b> od 3 měsíců do 5 let
                </li>
                <li className='arrow'>
                  <b>zajištění</b> úvěru - pozemky určené k zemědělství
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
