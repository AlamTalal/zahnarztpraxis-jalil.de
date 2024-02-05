'use client'

import styles from './Hero.module.css';
import { motion, useAnimationControls } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { heroSlides } from '@/utils/data';
import { HeroInfoBox } from '@/custom';

export default function Hero() {

  const motionController = useAnimationControls();
  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);

  const changCaption = () => {
    
    motionController.start('exit');
    if((heroSlides[swiperRef.current.swiper.activeIndex].caption)) {
      setTimeout(() => {
        setIndex(swiperRef.current.swiper.activeIndex);
        motionController.start('enter');
      }, 600);
    }
  }

  useEffect(() => {
    motionController.start('first');
  }, [motionController]);

  return (
    <section id='hero' className={`${styles.main}`}>
      <Swiper
        slidesPerView={1}
        onSlideChange={changCaption}
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.caption} />
          </SwiperSlide>
        ))}
        <div>
          {(heroSlides[index].caption) && (
            <motion.div
              variants={{
                initial: {scale: 0},
                first: {scale: 1, transition: { duration: 1.2, bounce: 0.25, type: "spring" }},
                enter: {scale: 1, transition: { duration: 0.6, bounce: 0.25, type: "spring" }},
                exit : {scale: 0, transition: { duration: 0.6, bounce: 0.25, type: "spring" }},
              }}
              initial='initial'
              animate={motionController}
              className={`${styles.heroCaption}`}
            >
              <p>{heroSlides[index].caption}</p>
            </motion.div>
          )}
          <motion.div
            initial={{x: '-700px'}}
            animate={{x: '0', transition: { duration: 1, bounce: 0.25, type: "spring" }}}
          >
            <HeroInfoBox />
          </motion.div>
        </div>
        <div>
          <a href='#home'>↓</a>
        </div>
      </Swiper>
    </section>
  );
}
