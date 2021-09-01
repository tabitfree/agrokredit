import { useEmblaCarousel } from 'embla-carousel/react';
import { useCallback, useEffect } from 'react';
import styles from '../../styles/carousel.module.css';

export default function RefCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  });

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  });

  return (
    <div className={styles.carouselCont}>
      <div className={styles.carousel} ref={ref}>
        <div className={styles.wrapper}>
          <div className={styles.slide}>
            <div className={'half halfFirst ' + styles.reference}>
              <p className={styles.txt}>
                „Potřeboval jsem prostředky na rozšíření výroby, nicméně pro
                banku jsem byl nezajímavý a neměl jí co zastavit. Společnosti
                AGROKREDIT jsem zastavil dědečkovo pole a získal od nich úvěr s
                úrokem 9% p.a., nyní jsem už úvěr doplatil a pole je čisté.“
              </p>
              <div className={styles.personInfo}>
                <div className={styles.name}>Marek Šimčák</div>
                <div className={styles.position}>OSVČ</div>
              </div>
            </div>
            <div className='half'>
              <p className={styles.txt}>
                „Naše společnost kvůli nedopatření s úhradou faktury za
                telekomunikační služby dostala do registru dlužníků a banka nám
                kvůli tomu neprodloužila kontokorentní úvěr, což bylo pro naši
                malou společnost téměř likvidační. Byli mi doporučeny různé
                nebankovní společnosti, nicméně s rozumnou nabídkou přišla až
                společnost AGROKREDIT.“
              </p>
              <div
                className={styles.personInfo + ' ' + styles.personInfoSecond}
              >
                <div className={styles.name}>Ing. Roman Bartoš</div>
                <div className={styles.position}>
                  Jednatel, Liduška HK s.r.o.
                </div>
              </div>
            </div>
            <div className={styles.reference}></div>
          </div>
          <div className={styles.slide}>Slide 2</div>
          <div className={styles.slide}>Slide 3</div>
        </div>
      </div>
      <div className={styles.prev} onClick={scrollPrev}></div>
      <div className={styles.next} onClick={scrollNext}></div>
    </div>
  );
}
