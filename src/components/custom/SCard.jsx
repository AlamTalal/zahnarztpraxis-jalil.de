'use client'

import styles from './SCard.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function SCard({ member, clicked, handleClick }) {

  const textVariants = {
    initial: {opacity: 0, transition: {duration: 0.5}},
    animate: {opacity: 1, transition: {duration: 0.5, delay: 0.2}},
  };
  const cardVariants = {
    initial: {width: '5rem' , opacity: 0.75, transition: {duration: 0.5}},
    animate: {width: '16rem', opacity: 1   , transition: {duration: 0.5}},
  }

  return (
    <motion.div
      onClick={() => handleClick()}
      className={`${styles.main}`}
      variants={cardVariants}
      initial={'initial'}
      animate={((clicked)? 'animate' : 'initial')}
    >
      <img src={member.image} alt={`Staff${member.id}`} />
      <AnimatePresence mode="popLayout">
        {clicked && <motion.div
          key={`SC${member.id}`}
          variants={textVariants}
          initial='initial'
          animate='animate'
          exit='initial'
        >
          <motion.div
            variants={textVariants}
            initial='initial'
            animate='animate'
            exit='initial'
          >
            <h4>{member.name}</h4>
            <span>{member.position}</span>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </motion.div>
  );
}
