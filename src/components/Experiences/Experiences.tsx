import Image from 'next/image';
import data from '../../data/data.json';
import { ExperiencesStyles } from './experiencesStyles';
import { TbArrowUpRhombus } from 'react-icons/tb';
import Button from '../Button/Button';

const { experiences, habilities } = data;

const Experiences = () => {
   return (
      <>
         <ExperiencesStyles>
            <div className='container jobs'>
               {experiences.jobs.map(
                  (
                     { icon, company, office, start, end, stacks, assignments },
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
                              <span className='office'>{office}</span>
                              <span className='period'>
                                 {start} - {end}
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
                                          />
                                       </li>
                                    ))}
                              </ul>
                              <ul className='assignments'>
                                 {assignments.map((assignment, i) => (
                                    <li key={i} className='assignment'>
                                       {assignment}
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
                  ({ course, instituition, logo, category, start, end }) => {
                     return (
                        <>
                           <p className='title'>graduação</p>
                           <div className='graduation'>
                              <Image
                                 src={logo}
                                 key={course}
                                 alt={`${course} logo`}
                                 width={70}
                                 height={70}
                                 className='logo'
                              />
                              <span className='course'>{course}</span>
                              <span className='instituition'>
                                 {instituition}
                              </span>
                              <span className='category'>{category}</span>
                              <span className='period'>
                                 {start + ' '}-{' ' + end}
                              </span>
                           </div>
                        </>
                     );
                  }
               )}
               <div className='courses'>
                  <p className='title'>cursos</p>
                  {experiences.courses.map(
                     (
                        { course, logo, category, hours, instituition, stacks },
                        i
                     ) => {
                        return (
                           i < 4 && (
                              <>
                                 <div className='course'>
                                    <Image
                                       src={logo}
                                       key={course}
                                       alt={`${course} logo`}
                                       width={50}
                                       height={50}
                                       className='logo'
                                    />
                                    <span className='category'>{category}</span>
                                    <span className='course-name'>{course}</span>
                                    <span className='instituition'>
                                       {instituition}
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
                                                   className='language-logo'
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
               <Button _blank={false} title='Mais cursos' className='button' url='/certifications' />
            </div>
         </ExperiencesStyles>
      </>
   );
};
export default Experiences;
