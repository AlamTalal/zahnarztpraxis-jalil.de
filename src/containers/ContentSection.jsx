'use client'

import styles from './ContentSection.module.css';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const ContentSection = forwardRef(function X({ id, contentData, additionalStyles = {} }, ref) {

  const cardVariants = {
    offscreen: {opacity: 0},
    onscreen:  {opacity: 1, transition: {duration: 0.8}},
  };

  return (
    <section 
      id={id} ref={ref} 
      className={`${styles.main}`} style={additionalStyles} 
      data-cy={(Object.keys(additionalStyles).length === 0)? 'section-item' : ''}
    >
      <motion.div 
        variants={cardVariants}
        initial='offscreen' 
        whileInView='onscreen' 
        viewport={{ once: true, amount: 0.8 }} 
      >
        <figure>
          <img src={`${contentData.image}`} alt='Welcome1' />
        </figure>
      </motion.div>
      <div>
        <h1 className={styles.large_text}>{contentData.title}</h1>
        {contentData.content.map((sentence, i) => (
          (sentence.text)?
            ((sentence.size === 'M')? 
                <h3 key={i} className={styles.medium_text}>{sentence.text}</h3> 
              : <p key={i} className={styles.small_text}>{sentence.text}</p>)
          : <div key={i} className={styles.empty_line}></div>
        ))}
      </div>
    </section>
  );
});

export default ContentSection;
