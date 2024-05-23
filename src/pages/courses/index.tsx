import Button from '@/components/Button/Button';
import Title from '@/components/Title/Title';
import { CertificationsStyle } from '@/styles/certificationsPageStyles';
import Image from 'next/image';
import data from '../../data/data.json';
import Head from 'next/head';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Footer from '@/components/Footer/Footer';
import LanguageBar from '@/components/Languages/Languages';

const { experiences } = data;

const Certifications = () => {
   const { t } = useTranslation();
   return (
      <>
         <Head>
            <title>Sávio Almeida | Certificados</title>
         </Head>
         <CertificationsStyle>
            <div className='back'>
               <Button
                  className='button'
                  _blank={false}
                  title={t(`Courses.back`)}
                  url={`/${i18next.language}/#${t('Header.aboutme')}`}
               />
               <LanguageBar className='langs' />
            </div>
            <div className='container'>
               <Title
                  firstColor='rgb(var(--primary-pink))'
                  firstWord='Em'
                  secondWord='Andamento'
               />
               <div className='graduate_box'>
                  {experiences.formation.map(
                     ({ logo, course, institution, start, end, stacks }, i) => {
                        return (
                           <>
                              <div className='graduate' key={i}>
                                 <Image
                                    className='logo'
                                    src={logo}
                                    alt={`${institution} icon`}
                                    width={110}
                                    height={110}
                                 />
                                 <h3 className='course'>
                                    {t(`AboutMe.graduations.${i}.course`) !==
                                    `AboutMe.graduations.${i}.course`
                                       ? t(`AboutMe.graduations.${i}.course`)
                                       : course}
                                 </h3>
                                 <h5 className='university'>
                                    {t(
                                       `AboutMe.graduations.${i}.institution`
                                    ) !== `AboutMe.graduations.${i}.institution`
                                       ? t(
                                            `AboutMe.graduations.${i}.institution`
                                         )
                                       : institution}
                                 </h5>
                                 {start && end && (
                                    <p className='date'>08/2021 - 06/2024</p>
                                 )}
                                 {stacks ? (
                                    <ul className='stack_list'>
                                       {stacks.map(({ logo, name }) => {
                                          return (
                                             <li className='stack' key={name}>
                                                <Image
                                                   src={logo}
                                                   alt={`${name} logo`}
                                                   width={30}
                                                   height={30}
                                                />
                                             </li>
                                          );
                                       })}
                                    </ul>
                                 ) : (
                                    ''
                                 )}
                              </div>
                           </>
                        );
                     }
                  )}
               </div>
            </div>
            <div className='container'>
               <Title
                  firstColor='rgb(var(--primary-pink))'
                  firstWord='Cursos'
               />
               <div className='courses_box'>
                  {experiences.courses.map((course, i: number) => (
                     <div key={`${i}_${course.course}`} className='course'>
                        <div className='about_course'>
                           <p className='course_category'>{course.category}</p>
                           <p className='course_time'>{course.hours}</p>
                        </div>
                        <Image
                           className='icon'
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
                        <Button
                           _blank={true}
                           title={t(`Courses.certificate`)}
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
