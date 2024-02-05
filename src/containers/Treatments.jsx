"use client"
// 'use client' so I can pass a function (SVGs Components) to TCard which is a server component
import styles from './Treatments.module.css';
import { treatments } from '@/utils/data';
import { forwardRef } from 'react';
import { TCard } from '@/custom';

const Treatments = forwardRef(function X({}, ref) {
  return (
    <section id='services' ref={ref} className={`${styles.main}`} data-cy='section-item'>
      <div>
        <h2>Ein kleiner Einblick, wie wir uns um Sie kümmern...</h2>
      </div>
      <div>
        {treatments.map((card) => <TCard key={card.id} card={card} />)}
      </div>
    </section>
  );
})

export default Treatments;
