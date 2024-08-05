import ButtonLink from '@/components/Buttons/ButtonLink';
import Title from '@/components/Title';
import { CertificationsStyle } from '@/styles/certificationsPageStyles';
import Image from 'next/image';
import data from '@/data/about.json';
import Head from 'next/head';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer/Footer';
import LanguageBar from '@/components/Languages';
import { Experiences } from '@/types/education';
import { Formation } from '@/types/education';
import { Locale } from '@/types/types';

const { experiences }: { experiences: Experiences } = data;

const Certifications = () => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;

   return (
      <>
         <Head>
            <title>Sávio Almeida | Certificados</title>
         </Head>
         <CertificationsStyle>
            <div className='back'>
               <ButtonLink
                  className='button'
                  _blank={false}
                  content={t(`Courses.back`)}
                  url={`/${i18next.language}/#${t('Header.aboutme')}`}
               />
               <LanguageBar className='langs' />
            </div>
            <div className='container'>
               <Title className='title' text={t(`Courses.inProgress`)} />
               <div className='graduate_box'>
                  {experiences.formation.map(
                     (
                        {
                           logo,
                           course,
                           institution,
                           start,
                           end,
                           stacks,
                        }: Formation,
                        i: number
                     ) => {
                        return (
                           <div className='graduate' key={i}>
                              <Image
                                 className='logo'
                                 src={logo}
                                 alt={`${institution} icon`}
                                 width={110}
                                 height={110}
                              />
                              <h3 className='course'>{course[locale]}</h3>
                              <h5 className='university'>
                                 {institution[locale]}
                              </h5>
                              {start && end && (
                                 <p className='date'>
                                    {start} - {end}
                                 </p>
                              )}
                              {stacks && (
                                 <ul className='stack_list'>
                                    {stacks.map(
                                       (
                                          stack: { name: string },
                                          index: number
                                       ) => (
                                          <li className='stack' key={index}>
                                             <Image
                                                src={stack.name}
                                                alt={`${stack.name} logo`}
                                                width={30}
                                                height={30}
                                             />
                                          </li>
                                       )
                                    )}
                                 </ul>
                              )}
                           </div>
                        );
                     }
                  )}
               </div>
            </div>
            <div className='container'>
               <Title className='title' text={t(`Courses.courses`)} />
               <div className='courses_box'>
                  {experiences.courses.map((course, i) => (
                     <div key={`${i}_${course.course}`} className='course'>
                        <div className='about_course'>
                           <p className='course_category'>{course.category}</p>
                           <p className='course_time'>{course.hours}</p>
                        </div>
                        <Image
                           className='logo'
                           src={course.logo}
                           alt='course icon'
                           width={90}
                           height={90}
                        />
                        <h3 className='course_name'>
                           {t(`AboutMe.courses.${i}.course`) !==
                           `AboutMe.courses.${i}.course`
                              ? t(`AboutMe.courses.${i}.course`)
                              : course.course}
                        </h3>
                        <h5 className='school'>{course.institution}</h5>
                        <ButtonLink
                           _blank={true}
                           content={t(`Courses.certificate`)}
                           url={course.certificate}
                           className='button'
                        />
                     </div>
                  ))}
               </div>
            </div>
         </CertificationsStyle>
         <Footer />
      </>
   );
};

export default Certifications;
