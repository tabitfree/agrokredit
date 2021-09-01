import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

import logo from '../public/images/icons/agrocredit-light.png';
import corn from '../public/images/icons/corn.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerWrapper}>
          <div className={styles.logo}>
            <Image src={logo} layout='fixed' />
          </div>
          <div className={styles.content1}>
            <div className={styles.title}>Kontakt</div>
            <a
              href='https://www.google.com/maps/place/Nad+Z%C3%A1v%C4%9Brkou+7,+169+00+Praha+6-Strahov/@50.0827058,14.3784533,17z/data=!3m1!4b1!4m5!3m4!1s0x470b950f1b5f0fa5:0x3be368ebc7728a15!8m2!3d50.0827058!4d14.380642'
              className={styles.txt}
              rel='noreferrer'
              target='_blank'
            >
              Nad Závěrkou 7, 169 00 Praha 6
            </a>
            <Link href='tel:+420277015158' className={styles.txt}>
              <a className={styles.txt}>+420 277 015 158</a>
            </Link>
            <Link href='mailto:info@agrokredit.cz' className={styles.txt}>
              <a className={styles.txt}>info@agrokredit.cz</a>
            </Link>
          </div>
          <div className={styles.content2}>
            <div className={styles.title}>INFORMACE</div>
            <Link href='/vseobecne-uverove-podminky' className={styles.txt}>
              <a className={styles.txt}>Všeobecné úvěrové podmínky</a>
            </Link>
            <Link href='/casto-kladene-dotazy' className={styles.txt}>
              <a className={styles.txt}>Často kladené otázky</a>
            </Link>
            <Link href='/gdpr' className={styles.txt}>
              <a className={styles.txt}>GDPR</a>
            </Link>
          </div>
          <div className={styles.content3}>
            <div className={styles.title}>SPOLUPRÁCE</div>
            <Link href='/pro-investory'>
              <a className={styles.txt}>Pro investory</a>
            </Link>
            <Link href='/kariera'>
              <a className={styles.txt}>Kariéra</a>
            </Link>
          </div>
          <div className={styles.content4}>
            <div className={styles.title}>Jsme členem</div>
            <div className={styles.infoWrap}>
              <Image src={corn} layout='fixed' className={styles.corn} />
              <div className={styles.txt}>
                Asociace <br /> soukromého
                <br /> zemědělství ČR
              </div>
            </div>
          </div>
          <div className={styles.rights}>
            © 2021 Agrokredit a.s. Všechna práva vyhrazena
          </div>
        </div>
      </div>
    </footer>
  );
}
