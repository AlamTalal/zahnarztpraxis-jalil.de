'use client'

import styles from './Staff.module.css';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { useState, forwardRef } from 'react';
import { useInView } from 'framer-motion';
import { staff } from '@/utils/data';
import { SCard } from '@/custom';

const Staff = forwardRef(function X({}, ref) {

  const [clickedIndex, setClickedIndex] = useState(null);
  const isSmall = useMediaQuery('(max-width: 768px)');
  const isInView = useInView(ref, {once: true});
  const handleClick = (memberId) => setClickedIndex(((memberId === clickedIndex)? null : memberId));
  return (
    <section id='staff' ref={ref} className={`${styles.main}`} data-cy='section-item'>
      <div><h2>Lernen Sie unser nettes Team kennen...</h2></div>
      <div>
        {staff.map((member) => {
          let transform, opacity;
          if(isInView) {
            opacity = 1;
            if(((member.id % 2) !== 0) || (isSmall && [4, 10].includes(member.id))) {
              transform = 'none';
            } else {
              transform = 'translateY(+3rem)';
            }
          } else {
            opacity = 0;
            if(((member.id % 2) !== 0)) {
              transform = 'translateX(-100vw)';
            } else if(isSmall && [4, 10].includes(member.id)) {
              transform = 'translateX(+100vw)';
            } else {
              transform = 'translateX(+100vw) translateY(+3rem)';
            }
          }
          return (
            <div key={member.id} style={{
              transform: transform,
              opacity: opacity,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s", 
            }}>
              <SCard member={member} handleClick={() => handleClick(member.id)} clicked={((member.id === clickedIndex)? true : false)} />
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Staff;
