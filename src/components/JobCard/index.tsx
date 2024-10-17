import { AdditionalInfo, Job, MoreJobDetails } from './styles';
import { Experience } from '@/types/personaldata';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CompanyCard from '../CompanyCard';
import { DiScrum } from 'react-icons/di';
import { BsFillKanbanFill } from 'react-icons/bs';
import { ToolsList } from '../ToolsList';

const JobCard = (job: Experience) => {
   const locale = i18next.language as Locale;
   const [expanded, setExpanded] = useState(false);

   const getMethodology = (methodology: string) => {
      const lowerCaseMethodology = methodology.toLocaleLowerCase();

      if (lowerCaseMethodology.includes('kanban')) {
         return <BsFillKanbanFill className='kanban' />;
      } else if (lowerCaseMethodology.includes('scrum')) {
         return <DiScrum className='scrum' />;
      }

      return null;
   };
   const formatJobDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('pt-BR', {
         month: '2-digit',
         year: 'numeric',
      });
   };
   return (
      <>
         <Job
            onClick={() => {
               setExpanded(!expanded);
            }}
            style={{
               backgroundColor: expanded
                  ? 'rgba(var(--light), 0.1)'
                  : undefined,
            }}
         >
            <div className='job-details'>
               <BsPlusLg className={`plus ${expanded && 'close'}`} />
               <div className='job'>
                  <p className={`position ${expanded && 'emphasys'}`}>{job.position[locale]}</p>
                  <CompanyCard
                     company={job.company}
                     location={job.location}
                     logo={job['company-logo']}
                     social={job['company-linkedin']}
                  />
               </div>
               <div className='date'>
                  <span>{formatJobDate(job.start)}</span>-
                  <span>{job.end ? formatJobDate(job.end) : 'Atualmente'}</span>
               </div>
            </div>
            <AnimatePresence>
               {expanded && (
                  <MoreJobDetails
                     initial={{ height: 0 }}
                     animate={{ height: 'auto' }}
                     exit={{ height: 0 }}
                     transition={{ duration: 0.5 }}
                     className='more-details'
                  >
                     <div className='about-position'>
                        <div className='about-job'>
                           <p className='description'>
                              {job.description[locale]}
                           </p>
                           <ul className='assignments'>
                              {job.assignments[locale].map((assign, i) => (
                                 <li key={i}>
                                    <span className='marker'>0{i + 1}. </span>
                                    {assign}
                                 </li>
                              ))}
                           </ul>
                           <AdditionalInfo>
                              <div className='methodology'>
                                 {getMethodology(job.methodology)}
                                 <span>{job.methodology}</span>
                              </div>
                              <span className='regime'>
                                 {job.regime[locale]}
                              </span>
                           </AdditionalInfo>
                        </div>
                     </div>
                     <ToolsList job={job} />
                  </MoreJobDetails>
               )}
            </AnimatePresence>
         </Job>
      </>
   );
};

export default JobCard;
