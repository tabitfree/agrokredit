import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import style from '../styles/navbar.module.css';
import logo from '../public/images/icons/agrocredit.png';

export default function Navbar() {
  const [showChild, toggleChild] = useState(false);

  const handleMouseMove = () => {
    toggleChild(!showChild);
  };

  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <div className='logo-wrap'>
          <Link href='/'>
            <a>
              <Image
                src={logo}
                alt='Logo'
                className='logo'
                width={130}
                height={26}
              />
            </a>
          </Link>
        </div>
        <ul className={style.nav}>
          <li>
            <Link href='/'>
              <a></a>
            </Link>
          </li>
          <li
            className={style.hasChildren}
            onMouseEnter={handleMouseMove}
            onMouseLeave={handleMouseMove}
          >
            <p>Úvěry a půjčky</p>
            <div className={showChild ? style.show : style.children}>
              <Link href='/puda+'>
                <a>Hypo půjčka PŮDA+</a>
              </Link>
              <Link href='/agro+'>
                <a>Úvěr AGRO+</a>
              </Link>
              <Link href='/sklizen+'>
                <a>Úvěr SKLIZEŇ+</a>
              </Link>
            </div>
          </li>

          <li>
            <Link href='/o-nas'>
              <a>O nás</a>
            </Link>
          </li>
          <li>
            <Link href='/kontakt'>
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <Link href='/nezavazna-poptavka'>
              <a className='btn'>Nezávazná poptávka</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
