import Link from 'next/link';
import styles from '../../styles/home/card.module.css';

export default function Card({ img, title, subTitle, txtArr, link, id }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div
          className={styles.titleWrap}
          id={'card-title-wrap' + id}
          // style={{ background: `url(${img})` }}
        >
          <h3>
            {title} <br />
            <b>{subTitle}</b>
          </h3>
        </div>
        <div className={styles.textWrap}>
          <ul className={styles.list}>
            {txtArr.map((txt, key) => {
              return (
                <li key={key} className='arrow'>
                  {txt}
                </li>
              );
            })}
          </ul>
          <Link href={link}>
            <a className='btn'>Více informací</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
