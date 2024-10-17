import React from 'react';
import Image from 'next/image';
import { Locale } from '@/types/types';
import { GraduationStyles } from './styles';
import i18next from 'i18next';
import { Graduation } from '@/types/personaldata';
import { formatMonthDate } from '@/utils/formatMonthDate';

interface IGraduationCardProps {
   graduation: Graduation;
}

const GraduationCard = ({ graduation }: IGraduationCardProps) => {
   const locale = i18next.language as Locale;
   return (
      <GraduationStyles>
         <Image
            src={graduation.logo}
            alt={`${graduation.institution[locale]} logo`}
            width={200}
            height={100}
            className='logo'
         />
         <div className='about-gratuation'>
            <p className='course'>{graduation.course[locale]}</p>
            <p className='institution'>{graduation.institution[locale]}</p>
            <p className='period'>
               <span>{formatMonthDate(graduation.start) + ' '}</span>-
               <span>{' ' + formatMonthDate(graduation.end)}</span>
            </p>
         </div>
         <p className='category'>{graduation.category[locale]}</p>
         <p className='concluded'>
            {graduation.concluded ? 'concluído' + '!' : null}
         </p>
      </GraduationStyles>
   );
};

export default GraduationCard;
