import Image from 'next/image';
import data from '../../data/data.json';
import { ExperiencesStyles } from './experiencesStyles';
import { TbArrowUpRhombus } from 'react-icons/tb';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const { experiences, habilities } = data;

const Experiences = () => {
   const { t } = useTranslation();
   return (
      <>
         <ExperiencesStyles>
            <div className='container jobs'>
               <p className='title' style={{marginBottom: '1.5rem'}}>{t(`AboutMe.experienceTitle`)}</p>
               {experiences.jobs.map(
                  (
                     {
                        icon,
                        company,
                        office,
                        start,
                        end,
                        stacks,
                        assignments,
                        id,
                     },
                     i
                  ) => {
                     return (
                        <>
                           {i !== 0 && <TbArrowUpRhombus className='line' />}
                           <div key={company} className='job'>
                              <Image
                                 src={icon}
                                 alt={`${company} logo`}
                                 width={75}
                                 height={75}
                                 className='logo'
                              />
                              <span className='company'>{company}</span>
                              <span className='office'>
                                 {id === Number(t(`AboutMe.jobs.${id}.id`))
                                    ? t(`AboutMe.jobs.${id}.office`)
                                    : office}
                              </span>
                              <span className='period'>
                                 {start + ' '} -{' '}
                                 {t(`AboutMe.jobs.${id}.currently`) !== ' '
                                    ? t(`AboutMe.jobs.${id}.currently`)
                                    : end}
                              </span>
                              <ul className='stacks'>
                                 {habilities[0].languages
                                    .filter((language) => {
                                       return stacks.some(
                                          (stack) =>
                                             stack.name ===
                                             language.language_name
                                       );
                                    })
                                    .map((language) => (
                                       <li key={language.id} className='stack'>
                                          <Image
                                             width={25}
                                             height={25}
                                             src={language.logo}
                                             alt={language.language_name}
                                             className='stack'
                                          />
                                       </li>
                                    ))}
                              </ul>
                              <ul className='assignments'>
                                 {assignments.map((assignment, i) => (
                                    <li key={i} className='assignment'>
                                       {id ===
                                       Number(t(`AboutMe.jobs.${id}.id`))
                                          ? t(
                                               `AboutMe.jobs.${id}.assignments.${i}.assignment`
                                            )
                                          : assignment}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </>
                     );
                  }
               )}
            </div>
            <div className='container formations'>
               {experiences.formation.map(
                  ({ course, institution, logo, category, start, end }, i) => {
                     return (
                        <>
                           <p className='title'>
                              {t(`AboutMe.graduationTitle`)}
                           </p>
                           <div className='graduation'>
                              <Image
                                 src={logo}
                                 key={course}
                                 alt={`${institution} logo`}
                                 width={70}
                                 height={70}
                                 className='logo'
                              />
                              <span className='course'>
                                 {t(`AboutMe.graduations.${i}.course`) ||
                                    course}
                              </span>
                              <span className='institution'>
                                 {t(`AboutMe.graduations.${i}.institution`) ||
                                    institution}
                              </span>
                              <span className='category'>
                                 {t(`AboutMe.graduations.${i}.category`) ||
                                    category}
                              </span>
                              <span className='period'>
                                 {start + ' '}-{' ' + end}
                              </span>
                           </div>
                        </>
                     );
                  }
               )}
               <div className='courses'>
                  <p className='title'>{t(`AboutMe.coursesTitle`)}</p>
                  {experiences.courses.map(
                     (
                        { course, logo, category, hours, institution, stacks },
                        i
                     ) => {
                        return (
                           i < 4 && (
                              <>
                                 <div className='course'>
                                    <Image
                                       src={logo}
                                       key={course}
                                       alt={`${institution} logo`}
                                       width={50}
                                       height={50}
                                       className='logo'
                                    />
                                    <span className='category'>{category}</span>
                                    <span className='course-name'>
                                       {t(`AboutMe.courses.${i}.course`)}
                                    </span>
                                    <span className='institution'>
                                       {institution}
                                    </span>
                                    <span className='hours'>{hours}</span>
                                    <ul className='stacks'>
                                       {habilities[0].languages
                                          .filter((language) => {
                                             return stacks.some(
                                                (stack) =>
                                                   stack.name ===
                                                   language.language_name
                                             );
                                          })
                                          .map((language) => (
                                             <li
                                                key={language.id}
                                                className='stack'
                                             >
                                                <Image
                                                   width={25}
                                                   height={25}
                                                   src={language.logo}
                                                   alt={language.language_name}
                                                   className='stack-logo'
                                                />
                                             </li>
                                          ))}
                                    </ul>
                                 </div>
                              </>
                           )
                        );
                     }
                  )}
               </div>
               <Button
                  _blank={false}
                  title={t('AboutMe.moreCourses')}
                  className='button'
                  url={`/${i18next.language}/certifications`}
               />
            </div>
         </ExperiencesStyles>
      </>
   );
};
export default Experiences;
