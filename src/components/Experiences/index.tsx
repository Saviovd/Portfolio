import { ExperiencesStyles } from './styles';
import ButtonLink from '../Buttons/ButtonLink';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import data from '@/data/about.json';
import JobItem from '../JobItem';
import GraduationItem from '../GraduationItem';
import CourseItem from '../CourseItem';
import { FaPlus } from 'react-icons/fa';

const { experiences } = data;

const Experiences: React.FC = () => {
   const { t } = useTranslation();

   return (
      <>
         <ExperiencesStyles>
            <div className='jobs'>
               <p className='title'>{t(`AboutMe.experienceTitle`)}</p>
               {experiences.jobs.map((job, i) => (
                  <JobItem key={job.company} job={job} index={i} />
               ))}
            </div>
            <div className='education'>
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
            </div>
         </ExperiencesStyles>
      </>
   );
};

export default Experiences;
