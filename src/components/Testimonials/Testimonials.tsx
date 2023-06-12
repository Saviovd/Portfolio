import Image from 'next/image';
import Title from '../Title/Title';
import data from '@/data/data.json';
import { TestimonialsStyle } from './testimonialStyles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const { testimonials } = data

const Testimonials = () => {
   return (<>
      <TestimonialsStyle id='depoimentos'>
         <Title firstColor='rgb(var(--first-primary-color))' firstWord='Depoimentos' />

         <div className='testimonials_container'>
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
               {testimonials.map(({name, office, testimony, id}) => {
                  return (
                  <SwiperSlide key={id}>
                     <div className='testimony_box'>
                        <Image className='photograph' src={'/assets/savio.jpg'} alt='ok' width={90} height={90} />
                        <h4 className='name'>{name}</h4>
                        <h5 className='office'>{office}</h5>
                        <p className='testimony'>
                           {testimony}
                        </p>
                     </div>
                  </SwiperSlide>
                  )
               })}
            </Swiper>
         </div>
      </TestimonialsStyle >
   </>)
}

export default Testimonials;
