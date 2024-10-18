import React from 'react';
import Image from 'next/image';
import { CourseStyles } from './styles';
import { Course } from '@/types/personaldata';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import ButtonLink from '../Buttons/ButtonLink';

interface ICourseCardProps {
   course: Course;
}
const CourseCard = ({ course }: ICourseCardProps) => {
   const locale = i18next.language as Locale;

   return (
      <CourseStyles>
         <Image
            src={course.logo}
            alt={`${course.institution} logo`}
            width={50}
            height={50}
            className='logo'
            quality={100}
         />
         <div className='about-course'>
            <h4 className='course-name'>{course.course[locale]}</h4>
            <span className='institution'>{course.institution}</span>
         </div>
         <p className='hours'>{course.hours}</p>
         <span className='category'>{course.category}</span>
         <ButtonLink content='ver certificado' className='button' url={course.certificate} _blank/>
      </CourseStyles>
   );
};

export default CourseCard;
