import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import data from '@/data/testimonials.json';
import { TestimonialsStyle } from './testimonialStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { GoPerson } from 'react-icons/go';
import { BiMessageAltCheck } from 'react-icons/bi';

import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { testimonials } = data;

const Testimonials = () => {
   const { t } = useTranslation();

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2,
      },
   });

   return (
      <TestimonialsStyle id={t('Header.testimonials')}>
         <Title
            text={t('Testimonials.testimonialTitle')}
            icon={<BiMessageAltCheck />}
         />

         <motion.div
            {...motionProps(100, 0)}
            className='testimonials_container'
         >
            <Swiper
               className='swiper'
               spaceBetween={0}
               slidesPerView={1}
               speed={1000}
               loop={true}
               autoplay={{
                  delay: 5000,
               }}
               touchRatio={1.5}
               effect={'flip'}
               pagination={{ clickable: true }}
               modules={[Pagination, Autoplay]}
            >
               {testimonials.map(({ name, testimony, id, photo }) => (
                  <SwiperSlide key={id}>
                     <div className='testimony_box'>
                        <p className='testimony'>
                           {t(`Testimonials.${id}.testimony`)
                              ? t(`Testimonials.${id}.testimony`)
                              : name + ' ' + testimony}
                        </p>
                        <div className='person'>
                           {photo ? (
                              <Image
                                 className='photograph'
                                 src={photo}
                                 alt={`${name} photo`}
                                 width={120}
                                 height={120}
                                 quality={100}
                                 layout='intrinsic'
                              />
                           ) : (
                              <GoPerson className='noPhoto' />
                           )}
                           <h4 className='name'>{name}</h4>
                           <h5 className='office'>
                              {t(`Testimonials.${id}.office`)}
                           </h5>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </TestimonialsStyle>
   );
};

export default Testimonials;
