import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Locale } from '@/types/types';
import i18next from 'i18next';
import { Job } from './styles';
import Link from 'next/link';

interface Stack {
   name: string;
}

interface Assignment {
   assignment: string;
}

interface Job {
   id: number;
   icon: string;
   company: string;
   office: Record<Locale, string>;
   start: string;
   end: string;
   stacks: Stack[];
   assignments: Record<Locale, Assignment[]>;
   working: boolean;
   regime: Record<Locale, string>;
   location: string;
   companyLinkedin: string
}

interface JobItemProps {
   job: Job;
   index: number;
}

const JobItem: React.FC<JobItemProps> = ({ job, index }) => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;
   const {
      icon,
      company,
      office,
      start,
      end,
      working,
      assignments,
      regime,
      companyLinkedin
   } = job;

   return (
      <>
         <Job key={index}>
            <div className='office'>
               <p className='office-title'>{office[locale]}</p>
               <div className='separator'></div>
               <p className='period'>
                  <span>{working && t('AboutMe.since')}</span>
                  {start + ' '}
                  {end ? '- ' + end : ''}
               </p>
            </div>
            <Link href={companyLinkedin} className='company'>
               <Image
                  src={icon}
                  alt={`${company} logo`}
                  width={25}
                  height={25}
                  className='logo'
               />
               <p className='company-title'>{company}</p>
            </Link>
               <p className='regime'>{regime[locale]}</p>
            <ul className='assignments'>
               {assignments[locale].map((assignment, i) => (
                  <li key={i} className='assignment'>
                     {assignment.assignment}
                  </li>
               ))}
            </ul>
         </Job>
      </>
   );
};

export default JobItem;
