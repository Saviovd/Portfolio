import { ExperiencesStyles } from './styles';
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';
import JobCard from '../JobCard';
import { Experience } from '@/types/personaldata';
import Title from '../../components/Title';
import { BsStars } from 'react-icons/bs';

interface IExperiencesData {
   experiences: Experience[];
}

const Experiences = ({ experiences }: IExperiencesData) => {
   const { t } = useTranslation();

   return (
      <>
         <ExperiencesStyles>
            <Title text={t(`Experiences.title`)} icon={<BsStars />} className='title'/>
            <ul className='experiences'>
               {experiences.map((job, i) => (
                  <li className='item' key={i}>
                     <JobCard
                        company={job.company}
                        position={job.position}
                        assignments={job.assignments}
                        company-linkedin={job['company-linkedin']}
                        company-logo={job['company-logo']}
                        description={job.description}
                        regime={job.regime}
                        location={job.location}
                        methodology={job.methodology}
                        still-works
                        tools={job.tools}
                        start={job.start}
                        end={job.end}
                     />
                  </li>
               ))}
            </ul>
         </ExperiencesStyles>
      </>
   );
};

export default Experiences;
