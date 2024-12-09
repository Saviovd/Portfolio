import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const WhoAmIStyles = styled(motion.div)`
   background-color: rgba(var(--dark-green), 0.9);
   padding: 3rem 1rem;
`;

interface WhoAmIProps {
   whoAmIRef: React.RefObject<HTMLDivElement>;
   whoAmIInView: boolean;
   aboutText: string;
}

const WhoAmI: React.FC<WhoAmIProps> = ({
   whoAmIRef,
   whoAmIInView,
   aboutText,
}) => {
   const { t } = useTranslation();

   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <WhoAmIStyles
         ref={whoAmIRef}
         initial='hidden'
         animate={whoAmIInView ? 'visible' : 'hidden'}
         variants={fadeInUp}
         transition={{ duration: 0.5, delay: 0.3 }}
         className='about-box who-am-i'
      >
         <h2 className='title'>{t('AboutMe.whoAmI')}</h2>
         <p
            className='text'
            dangerouslySetInnerHTML={{ __html: aboutText }}
         ></p>
      </WhoAmIStyles>
   );
};

export default WhoAmI;
