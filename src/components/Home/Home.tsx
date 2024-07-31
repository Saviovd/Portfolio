import React, { useEffect, useState } from 'react';
import { HomeStyle, DrippingDown } from './homeStyles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
import ButtonLink from '../Buttons/ButtonLink';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Social from '../Social/Social';
import baffle from 'baffle';
import { MdSimCardDownload } from 'react-icons/md';

const Home = () => {
   const { t, i18n } = useTranslation();
   const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
   const [words, setWords] = useState([t('Home.devfullstack')]);

   useEffect(() => {
      const callsMeBaffle = baffle('.calls_me', {
         characters: '█_$▓░▒/<',
         speed: 40,
      });
      callsMeBaffle.text(() => t('Home.call')).reveal(1200);

      const myNameBaffle = baffle('.my_name', {
         characters: '█SAVIO▓ALMEIDA░▒/',
         speed: 40,
      });
      myNameBaffle.text(() => 'Sávio Almeida < />').reveal(1200);
   });
   useEffect(() => {
      setCurrentLanguage(i18n.language);
      if (i18n.language !== currentLanguage) {
         setWords([t('Home.devfullstack')]);
      }
   }, [currentLanguage, i18n.language, t]);
   return (
      <>
         <HomeStyle id={t('Header.home')}>
            <div className='apresentation'>
               <span className='calls_me'>{t('Home.call')}</span>
               <h3 className='my_name'>Sávio Almeida ._.</h3>
               <Loader words={words} />
            </div>
            <motion.div
               initial={{ y: 0, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 0, opacity: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className='buttons'
            >
               <ButtonLink
                  fontSize={2}
                  className='button'
                  content='Download CV'
                  download={true}
                  _blank={false}
                  icon={<MdSimCardDownload style={{fontSize: '1.5rem'}} />}
                  border='1px solid rgba(var(--primary-blue))'
                  url='/documents/Curriculum.pdf'
               />
            </motion.div>
            <Social />
            <DrippingDown>
               <ScrollLink
                  to={`${t('Home.toAboutMe')}`}
                  smooth={true}
                  spy={true}
                  duration={700}
                  delay={100}
                  offset={0}
                  className='dripping_down'
               >
                  <div className='chevron'></div>
                  <div className='chevron'></div>
                  <div className='chevron'></div>
               </ScrollLink>
            </DrippingDown>
         </HomeStyle>
      </>
   );
};

export default Home;
