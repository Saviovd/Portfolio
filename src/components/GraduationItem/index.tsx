import React from 'react';
import Image from 'next/image';
import { Locale } from '@/types/types';
import { Graduation } from './styles';
import i18next from 'i18next';
import { FcGraduationCap } from 'react-icons/fc';

interface Graduation {
   UniversityEducation: boolean;
   course: Record<Locale, string>;
   institution: Record<Locale, string>;
   logo: string;
   category: Record<Locale, string>;
   start: string;
   end: string;
   concluded: Record<Locale, string>;
}

interface GraduationItemProps {
   education: Graduation;
   index: number;
}

const GraduationItem: React.FC<GraduationItemProps> = ({
   education,
   index,
}) => {
   const {
      UniversityEducation,
      course,
      institution,
      logo,
      category,
      start,
      end,
      concluded,
   } = education;
   const locale = i18next.language as Locale;

   if (!UniversityEducation) {
      return null;
   }

   return (
      <Graduation>
         <Image
            src={logo}
            key={index}
            alt={`${institution[locale]} logo`}
            width={70}
            height={70}
            className='logo'
         />
         <div className='about-gratuation'>
            <p className='course'>{course[locale]}</p>
            <p className='institution'>{institution[locale]}</p>
            <p className='period'>
               {start + ' '}-{' ' + end}
            </p>
         </div>
         <p className='category'>{category[locale]}</p>
         <p className='concluded'>
            {concluded[locale] ? concluded[locale] + '!' : null}
            <FcGraduationCap />
         </p>
      </Graduation>
   );
};

export default GraduationItem;
