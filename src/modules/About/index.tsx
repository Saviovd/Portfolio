import React from 'react';
import { AboutContent, AboutStyle } from './styles';
import Title from '../../components/Title';
import { useTranslation } from 'react-i18next';
import { HiInformationCircle } from 'react-icons/hi';
import data from '@/data/personal-data.json';
import { Locale } from '@/types/types';
import i18next from 'i18next';
import AnimatedCounters from '../../components/AnimatedCounters';
import Experiences from '../../components/Experiences';

const allMyInfo = data['personal-data'];

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
                     __html: allMyInfo['about'][locale].replace(
                        '[age]',
                        String(allMyInfo.age)
                     ),
                  }}
               ></p>
            </div>
            <div className='about-box'>
               <h2 className='title'>{t('AboutMe.myTrajectory')}</h2>
               <p
                  className='text'
                  dangerouslySetInnerHTML={{
                     __html: allMyInfo['trajectory'][locale],
                  }}
               ></p>
            </div>
         </AboutContent>
         <AnimatedCounters
            experience={allMyInfo['experience-years']}
            certifications={allMyInfo.courses.length}
         />
         <Experiences experiences={allMyInfo.experiences}/>

         {/* <div className='education'>
               <div className='university'>
                  <p className='title'>{t(`AboutMe.graduationTitle`)}</p>
                  {experiences.formation.map((education, i) => (
                     <GraduationItem key={i} education={education} index={i} />
                  ))}
               </div>
               <div className='courses'>
                  <p className='title'>{t(`AboutMe.coursesTitle`)}</p>
                  {experiences.courses.map(
                     (course, i) =>
                        i < 4 && (
                           <CourseItem
                              key={course.course}
                              course={course}
                              index={i}
                           />
                        )
                  )}
               </div>
               <ButtonLink
                  _blank={false}
                  content={t('AboutMe.moreCourses')}
                  className='button'
                  url={`/${i18next.language}/courses/`}
                  textTransform='capitalize'
                  icon={<FaPlus />}
               />
            </div> */}
      </AboutStyle>
   );
};

export default About;
