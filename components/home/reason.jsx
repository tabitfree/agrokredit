import Image from 'next/image';
import styles from '../../styles/home/reason.module.css';

export default function Reason(props) {
  let img = props.img;
  let num = props.num;
  let txt = props.txt;
  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <div className={styles.num}>{num}</div>
        <div className={styles.imgWrap}>
          <Image src={img} layout='fixed' />
        </div>
        <p className={styles.txt}>{txt}</p>
      </div>
    </div>
  );
}
