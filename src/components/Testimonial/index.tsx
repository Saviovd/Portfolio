import React from 'react';
import Image from 'next/image';
import { GoPerson } from 'react-icons/go';
import { TestimonialStyle } from './styles';

interface ITestimonialProps {
   name: string;
   testimonial: string;
   photo: string;
   office: string;
}

const Testimonial = ({
   name,
   testimonial,
   photo,
   office,
}: ITestimonialProps) => {
   return (
      <TestimonialStyle>
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
            <h5 className='office'>{office}</h5>
         </div>
         <p className='testimonial'>
            {testimonial ? testimonial : name + ' ' + testimonial}
         </p>
      </TestimonialStyle>
   );
};

export default Testimonial;
