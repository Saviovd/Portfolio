import React from 'react';
import Title from '../Title';
import data from '@/data/testimonials.json';
import { TestimonialsStyle } from './testimonialStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { LuMessageSquare } from 'react-icons/lu';

import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import Testimonial from '../Testimonial';

const { testimonials } = data;

const Testimonials = () => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;

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
      <TestimonialsStyle id='testimonials'>
         <Title
            text={t('Testimonials.testimonialTitle')}
            icon={<LuMessageSquare />}
         />

         <motion.div {...motionProps(100, 0)} className='container'>
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
               {testimonials.map(
                  ({ name, testimonial, photo, office }, index) => (
                     <SwiperSlide key={index}>
                        <Testimonial
                           name={name}
                           office={office[locale]}
                           testimonial={testimonial[locale]}
                           photo={photo}
                        />
                     </SwiperSlide>
                  )
               )}
            </Swiper>
         </motion.div>
      </TestimonialsStyle>
   );
};

export default Testimonials;
