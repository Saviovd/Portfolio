import React from 'react';
import { AboutContent, AboutStyle } from './styles';
import Title from '../../components/Title';
import { useTranslation } from 'react-i18next';
import { HiInformationCircle } from 'react-icons/hi';
import data from '@/data/personal-data.json';
import { Locale } from '@/types/types';
import i18next from 'i18next';
import AnimatedCounters from '../../components/AnimatedCounters';
import Experiences from '../../components/Experiences';
import Certifications from '@/components/Certifications';
import { useInView } from 'framer-motion';
import WhoAmI from '@/components/WhoAmI';
import MyTrajectory from '@/components/MyTrajectory';

const allMyInfo = data['personal-data'];

const About = () => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;

   const whoAmIRef = React.useRef(null);
   const myTrajectoryRef = React.useRef(null);

   const whoAmIInView = useInView(whoAmIRef, { once: true });
   const myTrajectoryInView = useInView(myTrajectoryRef, {
      once: true,
   });

   return (
      <AboutStyle id='aboutme'>
         <AboutContent>
            <Title
               text={t('AboutMe.title')}
               icon={<HiInformationCircle />}
               className='section-title'
            />

            <WhoAmI
               whoAmIRef={whoAmIRef}
               whoAmIInView={whoAmIInView}
               aboutText={allMyInfo['about'][locale].replace(
                  '[age]',
                  String(allMyInfo.age)
               )}
            />

            <MyTrajectory
               myTrajectoryRef={myTrajectoryRef}
               myTrajectoryInView={myTrajectoryInView}
               trajectoryText={allMyInfo['trajectory'][locale]}
            />
         </AboutContent>

         <AnimatedCounters
            experience={allMyInfo['experience-years']}
            certifications={allMyInfo.courses.length}
         />
         <Experiences experiences={allMyInfo.experiences} />
         <Certifications
            graduations={allMyInfo.graduation}
            courses={allMyInfo.courses}
         />
      </AboutStyle>
   );
};

export default About;
