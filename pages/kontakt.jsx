import Link from 'next/link';
import MyForm from '../components/myForm';

import styles from '../styles/contact.module.css';

import { useEffect } from 'react';

export default function Contact() {
  return (
    <>
      <section className='title'>
        <div className='container'>
          <h1>
            <b>Kontakt</b>
          </h1>
        </div>
      </section>
      <section className={styles.contactsWrap}>
        <div className='container'>
          <div className='inner-container'>
            <div className={'h2-wrap ' + styles.h2Wrap}>
              <h2>Spojte se s námi</h2>
              <p>
                Chcete využít našich služeb nebo se jen na něco zeptat? <br />
                Ozvěte se nám, rádi vám pomůžeme.
              </p>
            </div>
            <div className={'flex ' + styles.cardsWrap}>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img src='./images/contact/pin.png' />
                </div>
                <a
                  href='https://www.google.com/maps/place/Nad+Z%C3%A1v%C4%9Brkou+2434,+169+00+Praha+6-Strahov/@50.0826886,14.3784653,17z/data=!3m1!4b1!4m5!3m4!1s0x470b950f1b60bc17:0x8f181b4f9523e1a9!8m2!3d50.0826886!4d14.380654'
                  target='_blank'
                  rel='noreferrer'
                >
                  Nad Závěrkou 2434/7, Břevnov, 169 00 Praha 6
                </a>
              </div>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img src='./images/contact/phone.png' />
                </div>
                <a href='tel:+420277015158'>+420 277 015 158</a>
              </div>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <img src='./images/contact/mail.png' />
                </div>
                <a href='mailto:info@agrokredit.cz'>info@agrokredit.cz</a>
              </div>
            </div>
            <div className={styles.company}>
              <p>AGROKREDIT a.s, IČ: 28191544</p>
            </div>
          </div>
        </div>
      </section>

      <section className='form'>
        <div className='container'>
          <div className='inner-container'>
            <div className='h3-wrap'>
              <h3 className='form-title'>Napište nám</h3>
            </div>
            <MyForm />
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className='container'>
          <div className='h2-wrap'>
            <h2>Náš tým</h2>
          </div>

          <div className={styles.teamWrapper + ' grid'}>
            <h3 className={`${styles.head} dark`}>Vedení společnosti</h3>
            <div className={styles.person + ' ' + styles.person1}>
              <div className={styles.name}>Ing. Petr Kromíchal</div>
              <div className={styles.position}>
                Předseda představenstva a výkonný ředitel
              </div>
              <div className={styles.personContact}>
                <a
                  href='mailto:kromichal@agrokredit.cz'
                  className={styles.mail}
                >
                  kromichal@agrokredit.cz
                </a>
              </div>
            </div>
            <div className={`${styles.person} ${styles.person2}`}>
              <div className={styles.name}>Ing. David Ječmík</div>
              <div className={styles.position}>Člen představenstva</div>
              <div className={styles.personContact}>
                <a href='mailto:jecmik@agrokredit.cz' className={styles.mail}>
                  jecmik@agrokredit.cz
                </a>
              </div>
            </div>
            <h3 className={`${styles.sales} dark`}>Obchodní oddělení</h3>
            <div className={`${styles.person} ${styles.person3}`}>
              <div className={styles.name}>Hana Tauferová</div>
              <div className={styles.position}>
                Regionální zástupce pro Středočeský a Jihočeský kraj
              </div>
              <div className={styles.personContact}>
                <a
                  href='mailto:kromichal@agrokredit.cz'
                  className={styles.mail}
                >
                  kromichal@agrokredit.cz
                </a>
                <a href='tel:+420777083584' className={styles.phone}>
                  +420 777 083 584
                </a>
              </div>
            </div>
            <div className={`${styles.person} ${styles.person4}`}>
              <div className={styles.name}>Terezie Rejzková</div>
              <div className={styles.position}>
                Regionální zástupce pro Východočeský a Jihomoravský kraj
              </div>
              <div className={styles.personContact}>
                <a href='mailto:' className={styles.mail}>
                  jecmik@agrokredit.cz
                </a>
                <a href='tel:+420770191351' className={styles.phone}>
                  +420 770 191 351
                </a>
              </div>
            </div>
            <div className={`${styles.person} ${styles.person6}`}>
              <div className={styles.name}>Lucie Dvorská</div>
              <div className={styles.position}>
                Regionální zástupce pro Olomoucký a Moravskoslezský kraj
              </div>
              <div className={styles.personContact}>
                <a href='mailto:jecmi@agrokredit.cz' className={styles.mail}>
                  jecmik@agrokredit.cz
                </a>
                <a href='tel:+420731485171' className={styles.phone}>
                  +420 731 485 171
                </a>
              </div>
            </div>
            <h3 className={`${styles.accountant} dark`}>Účetní oddělení</h3>
            <div className={`${styles.person} ${styles.person5}`}>
              <div className={styles.name}>Ing. Jana Kadavá</div>
              <div className={styles.position}>Vedoucí účetního oddělení</div>
              <div className={styles.personContact}>
                <a href='mailto:jecmi@agrokredit.cz' className={styles.mail}>
                  jecmik@agrokredit.cz
                </a>
                <a href='tel:+420739675066' className={styles.phone}>
                  +420 739 675 066
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.191999967194!2d14.37846531588616!3d50.082692021675754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b950f1b60bc17%3A0x8f181b4f9523e1a9!2sNad%20Z%C3%A1v%C4%9Brkou%202434%2C%20169%2000%20Praha%206-Strahov!5e0!3m2!1scs!2scz!4v1630314329617!5m2!1scs!2scz'
          width='600'
          height='450'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </section>
    </>
  );
}
