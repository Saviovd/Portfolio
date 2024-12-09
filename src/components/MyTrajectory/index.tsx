import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const MyTrajectoryStyles = styled(motion.div)`
   padding: 0;
`;

interface MyTrajectoryProps {
   myTrajectoryRef: React.RefObject<HTMLDivElement>;
   myTrajectoryInView: boolean;
   trajectoryText: string;
}

const MyTrajectory: React.FC<MyTrajectoryProps> = ({
   myTrajectoryRef,
   myTrajectoryInView,
   trajectoryText,
}) => {
   const { t } = useTranslation();
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <MyTrajectoryStyles
         ref={myTrajectoryRef}
         initial='hidden'
         animate={myTrajectoryInView ? 'visible' : 'hidden'}
         variants={fadeInUp}
         transition={{ duration: 0.4, delay: 0.6 }}
         className='about-box'
      >
         <h2 className='title'>{t('AboutMe.myTrajectory')}</h2>
         <p
            className='text'
            dangerouslySetInnerHTML={{ __html: trajectoryText }}
         ></p>
      </MyTrajectoryStyles>
   );
};

export default MyTrajectory;
