import React from 'react';
import { AboutContent, AboutStyle } from './styles';
import Title from '../Title';
import { useTranslation } from 'react-i18next';
import { HiInformationCircle } from 'react-icons/hi';
import data from '@/data/personal-data.json';
import { Locale } from '@/types/types';
import i18next from 'i18next';
import AnimatedCounters from '../AnimatedCounters';

const about = data['personal-data'];

const About = () => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;

   return (
      <AboutStyle id='aboutme'>
         <AboutContent>
            <Title
               text={t('AboutMe.title')}
               icon={<HiInformationCircle />}
               className='section-title'
            />
            <div className='about-box who-am-i'>
               <h2 className='title'>{t('AboutMe.whoAmI')}</h2>
               <p
                  className='text'
                  dangerouslySetInnerHTML={{
                     __html: about['about'][locale].replace(
                        '[age]',
                        String(about.age)
                     ),
                  }}
               ></p>
            </div>
            <div className='about-box'>
               <h2 className='title'>{t('AboutMe.myTrajectory')}</h2>
               <p
                  className='text'
                  dangerouslySetInnerHTML={{
                     __html: about['trajectory'][locale],
                  }}
               ></p>
            </div>
         </AboutContent>
         <AnimatedCounters
            experience={about['experience-years']}
            certifications={about.courses.length}
         />
         {/* <Experiences /> */}
      </AboutStyle>
   );
};

export default About;
