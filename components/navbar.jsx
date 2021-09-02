import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '../components/navbar/hamburger';

import { useState } from 'react';
import useWindowSize from '../components/useWindowSize';

import style from '../styles/navbar.module.css';
import logo from '../public/images/icons/agrocredit.png';

export default function Navbar() {
  let windowSize = useWindowSize();
  const [showChild, toggleChild] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMouseMove = () => {
    toggleChild(!showChild);
  };

  const handleHamburgerClick = () => {
    setShowNavbar(!showNavbar);
  };

  const handleHeaderClick = () => {
    if (showNavbar) {
      setShowNavbar(false);
    }
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

        <ul
          className={
            windowSize.width > 800
              ? style.nav
              : windowSize.width <= 800 && showNavbar
              ? style.mobileNav
              : `${style.hidden} ${style.mobileNav}`
          }
        >
          <li
            className={style.hasChildren}
            onMouseEnter={handleMouseMove}
            onMouseLeave={handleMouseMove}
            // onClick={handleMouseMove}
          >
            <p>Úvěry a půjčky</p>
            <div
              className={showChild ? style.show : style.children}
              onClick={handleHeaderClick}
            >
              <Link href='/puda+' onClick={handleHeaderClick}>
                <a>Hypo půjčka PŮDA+</a>
              </Link>
              <Link href='/agro+' onClick={handleHeaderClick}>
                <a>Úvěr AGRO+</a>
              </Link>
              <Link href='/sklizen+' onClick={handleHeaderClick}>
                <a>Úvěr SKLIZEŇ+</a>
              </Link>
            </div>
          </li>

          <li onClick={handleHeaderClick}>
            <Link href='/o-nas'>
              <a>O nás</a>
            </Link>
          </li>
          <li onClick={handleHeaderClick}>
            <Link href='/kontakt'>
              <a>Kontakt</a>
            </Link>
          </li>
          <li onClick={handleHeaderClick}>
            <Link href='/nezavazna-poptavka'>
              <a className='btn'>Nezávazná poptávka</a>
            </Link>
          </li>
        </ul>
        {windowSize.width <= 800 && (
          <Hamburger show={showNavbar} onClick={handleHamburgerClick} />
        )}
      </div>
    </header>
  );
}
