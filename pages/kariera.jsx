import Image from 'next/image';
import Link from 'next/link';

import MyForm from '../components/myForm';

import mainImg from '../public/images/career/mainImg.png';

import styles from '../styles/career.module.css';

export default function Career() {
  return (
    <>
      <section className='title'>
        <div className='container'>
          <div className='title'>
            <h1>
              <b>Kariéra</b>
            </h1>
          </div>
        </div>
      </section>

      <section className={styles.hero}>
        <div className='container flex'>
          <div className={`half halfFirst ${styles.half}`}>
            <p>
              AGROKREDIT a.s. je stabilní kapitálově silná společnost, která
              svým spolupracovnímkům může nabídnout{' '}
              <b>přátelskou atmosféru, volnost</b> a <b>nadstandardní</b>{' '}
              možnost výdělku.
            </p>
            <Link href='/o-nas'>
              <a className='btn'>Více o nás</a>
            </Link>
          </div>
          <div className='half'>
            <Image src={mainImg} layout='responsive' />
          </div>
        </div>
      </section>

      <section className={styles.bids}>
        <div className='container'>
          <h2>Volné Pozice</h2>
          <p className={styles.position}>
            <b>Obchodní zástupce z celé České rebupliky</b>
          </p>
          <div className={styles.offers}>
            <div className={styles.ul}>
              <p className={styles.label}>Nabízíme</p>
              <ul>
                <li className='arrow'>dlouhodobou perspektivu spolupráce</li>
                <li className='arrow'>možnost kariérního růstu</li>
                <li className='arrow'>motivační provizní systém</li>
                <li className='arrow'>neomezenou výši výdělku</li>
                <li className='arrow'>přátelské pozitivní prostředí</li>
              </ul>
            </div>
            <div className={styles.ul}>
              <p className={styles.label}>OČEKÁVÁME</p>
              <ul>
                <li className='arrow'>dobré vystupování</li>
                <li className='arrow'>proklientský solidní přístup</li>
                <li className='arrow'>trestní bezúhonost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='form'>
        <div className='container'>
          <div className='h3-wrap'>
            <h3 className='form-title'>Máte zájem o spolupráci? Ozvěte se</h3>
          </div>
          <MyForm />
        </div>
      </section>
    </>
  );
}
