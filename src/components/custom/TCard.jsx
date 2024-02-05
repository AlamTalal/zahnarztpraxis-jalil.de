'use client'

import styles from './TCard.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TCard({ card }) {

  const [isFlip, setIsFlip] = useState(false);
  const Icon = card.media;

  const cardVariants = {
    offscreen: {scale: 0},
    onscreen: {scale: 1, transition: {duration: 0.8, bounce: 0.4, type: "spring"}},
  };

  return (
    <motion.div 
      className={`${styles.main}`}
      initial='offscreen' 
      whileInView='onscreen' 
      viewport={{ once: true, amount: 0.8 }} 
    >
      <motion.div variants={cardVariants}>
        <motion.div
          variants={{
            goToBack: {rotateY: 180, transition: { duration: 0.8, bounce: 0.5, type: "spring" }},
            backToFront: {rotateY: 0, transition: { duration: 0.8, bounce: 0.5, type: "spring" }}
          }}
          initial='backToFront'
          animate={((isFlip)? 'goToBack' : 'backToFront')}
        >
          <div id={`front-${card.id}`}>
            <Icon size={100} />
            <h4>{card.title}</h4>
            <button onClick={() => setIsFlip(true)}>more</button>
          </div>
          <div id={`back-${card.id}`}>
            <div>
              <Icon size={50} />
              <h5>{card.title}</h5>
            </div>
            <button onClick={() => setIsFlip(false)}>←</button>
            <div className={((isFlip)? styles.enableScrolling : styles.disableScrolling)}>
              <p>{card.content}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
