import React from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import data from '@/data/data.json';
import { TestimonialsStyle } from './testimonialStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const { testimonials } = data;

const Testimonials = () => {

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2
      },
   });

   return (
      <TestimonialsStyle id='depoimentos'>
         <Title firstColor='rgb(var(--first-primary-color))' firstWord='Depoimentos' />

         <motion.div {...motionProps(100, 0)} className='testimonials_container'>
            <Swiper
               className='swiper'
               spaceBetween={0}
               slidesPerView={1}
               speed={500}
               loop={true}
               autoplay={{
                  delay: 5000
               }}
               touchRatio={1.5}
               effect={'flip'}
               pagination={{ clickable: true }}
               modules={[Pagination, Autoplay]}
            >
               {testimonials.map(({ name, office, testimony, id, photo }) => (
                  <SwiperSlide key={id}>
                     <div className='testimony_box'>
                        <Image className='photograph' src={photo} alt='ok' width={80} height={80} />
                        <h4 className='name'>{name}</h4>
                        <h5 className='office'>{office}</h5>
                        <p className='testimony'>
                           {testimony}
                        </p>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </TestimonialsStyle>
   );
};

export default Testimonials;
