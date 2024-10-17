import { ExperiencesStyles } from './styles';
import { useTranslation } from 'react-i18next';
import JobCard from '../JobCard';
import { Experience } from '@/types/personaldata';
import Title from '../../components/Title';
import { BsStars } from 'react-icons/bs';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface IExperiencesData {
   experiences: Experience[];
}

const Experiences = ({ experiences }: IExperiencesData) => {
   const { t } = useTranslation();
   const containerRef = useRef(null);

   const isInView = useInView(containerRef, { once: true });

   return (
      <>
         <ExperiencesStyles>
            <Title text={t(`Experiences.title`)} icon={<BsStars />} className='title'/>
            <ul className='experiences' ref={containerRef}>
               {experiences.map((job, i) => (
                  <motion.li
                     className='item'
                     key={i}
                     initial={{ opacity: 0, y: 50 }}
                     animate={isInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
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
                  </motion.li>
               ))}
            </ul>
         </ExperiencesStyles>
      </>
   );
};

export default Experiences;
