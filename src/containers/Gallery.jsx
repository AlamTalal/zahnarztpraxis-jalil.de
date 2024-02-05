'use client'

import styles from './Gallery.module.css';
import { useEffect, useRef, useState, forwardRef } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryImages } from '@/utils/data';

const Gallery = forwardRef(function X({}, ref) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {

    const prevDiv = swiperRef.current.getElementsByClassName("swiper-button-prev")[0];
    const nextDiv = swiperRef.current.getElementsByClassName("swiper-button-next")[0];
    const newspaperTiming = { duration: 250, iterations: 1, };
    
    const newspaperSpinning = [
      { transform: "translateY(-50%) scale(1)" },
      { transform: "translateY(-50%) scale(0.75)" },
      { transform: "translateY(-50%) scale(1)" },
    ];

    prevDiv.addEventListener("click", () => {
      prevDiv.animate(newspaperSpinning, newspaperTiming);
    });

    nextDiv.addEventListener("click", () => {
      nextDiv.animate(newspaperSpinning, newspaperTiming);
    });

    return () => {
      prevDiv.removeEventListener("click", () => {
        prevDiv.animate(newspaperSpinning, newspaperTiming);
      });
  
      nextDiv.removeEventListener("click", () => {
        nextDiv.animate(newspaperSpinning, newspaperTiming);
      });
    };
  }, []);

  return (
    <section id='gallery' ref={ref} className={`${styles.main}`} data-cy='section-item'>
      <div>
        <div>
          <Swiper
            ref={swiperRef}
            loop={true}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Gallery${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={0}
            slidesPerView={4.3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`GalleryThumb${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
});

export default Gallery;
