'use client'

import styles from './NavBar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FullLogo, ContactBox, Navigation } from '@/custom';
import { useState } from 'react';

export default function NavBar({ CEIV }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <header id='navBar' className={`${styles.main}`}>
      <div>
        <AnimatePresence mode="wait">
          {isActive && <motion.div
            variants={{
              initial: {scale: 0},
              enter: {scale: 1, transition: { duration: 0.8, bounce: 0.5, type: "spring" }},
              exit : {scale: 0, transition: { duration: 0.4, bounce: 0, type: "spring" }},
            }}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <div>
              <ContactBox />
              <Navigation CEIV={CEIV} />
            </div>
          </motion.div>}
        </AnimatePresence>
      </div>
      <div>
        <FullLogo />
        <Navigation CEIV={CEIV} />
        <ContactBox />
        <div>
          <button onClick={() => {setIsActive(!isActive)}} className={`${isActive ? styles.burgerActive : ''}`}>
          </button>
        </div>
      </div>
    </header>
  );
}
