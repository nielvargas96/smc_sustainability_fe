'use client'
import styles from './style.module.scss'
import { useEffect, useState, useRef } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Rounded from '../common/RoundedButton';

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    const handleClickInside = (event) => {
      if (isActive && event.target.tagName === 'A' && event.target.getAttribute('href')) {
        setIsActive(false);
      }
    };

    if (isActive) {
      // Add event listeners when the burger menu is active
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('click', handleClickInside);
    }

    return () => {
      // Remove the event listeners when the component unmounts or the menu is no longer active
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickInside);
    };
  }, [isActive]);


  return (
    <>
      {/* HEADER */}
      <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" title='San Miguel Corporation'>
            <Image priority src='/images/smc_logo.svg' width={75} height={75} alt='SMC Logo' />
            <Image priority src='/images/smc_logo.svg' width={65} height={65} alt='SMC Logo' />
          </Link>
        </div>

        <div className={styles.header}>
          <Rounded onClick={() => { setIsActive(!isActive) }}>
            <div className={styles.button}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
          </Rounded>
        </div>
      </header>
      {/* SIDE NAVIGATION */}
      <aside ref={menuRef}>
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </aside >
    </>
  )
}
