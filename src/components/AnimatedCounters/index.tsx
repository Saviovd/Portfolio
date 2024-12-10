import data from '@/data/testimonials.json';
import AnimatedCounter from '../AnimatedCounter';
import { AnimatedCountersStyles } from './styles';
import { useTranslation } from 'react-i18next';

const { testimonials } = data;
interface INumberProps {
   experience: number;
   projects?: number;
   certifications: number;
}

const AnimatedCounters = ({ experience, certifications }: INumberProps) => {
   const { t } = useTranslation();

   return (
      <AnimatedCountersStyles>
         <div className='counter-box'>
            <p className='number'>
               <AnimatedCounter from={0} to={experience} />+
            </p>
            <p className='title'>{t('AboutMe.experienceYears')}</p>
         </div>
         <div className='counter-box'>
            <AnimatedCounter from={0} to={testimonials.length} />
            <p className='title'>{t('AboutMe.positiveFeedbacks')}</p>
         </div>
         <div className='counter-box'>
            <p className='number'>
               <AnimatedCounter from={0} to={certifications} />+
            </p>
            <p className='title'>{t('AboutMe.certifications')}</p>
         </div>
         <div className='counter-box'>
            <p className='number'>
               <AnimatedCounter from={0} to={40} />+
            </p>
            <p className='title'>{t('AboutMe.finishedProjects')}</p>
         </div>
      </AnimatedCountersStyles>
   );
};

export default AnimatedCounters;
