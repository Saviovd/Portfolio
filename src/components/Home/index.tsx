import React, { useEffect } from 'react';
import { HomeStyle, DrippingDown } from './styles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import baffle from 'baffle';
import { useTranslation } from 'react-i18next';

const Home = () => {
   const { t } = useTranslation();
   useEffect(() => {
      const myNameBaffle = baffle('.name', {
         characters: '█SAVIO▓ALMEIDA░▒/',
         speed: 40,
      });
      myNameBaffle.text(() => 'Sávio Almeida').reveal(1000);
   });
   return (
      <>
         <HomeStyle id='home'>
            <div className='apresentation'>
               <h3 className='name'>Sávio Almeida</h3>
               <Loader />
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className='text'
               >
                  {t('Home.ctaText')}
                  <br />
                  <span>{t('Home.cta')}</span>
               </motion.p>
            </div>

            <ScrollLink
               to={`aboutme`}
               href='aboutme'
               smooth={true}
               spy={true}
               duration={700}
               delay={100}
               offset={0}
            >
               <DrippingDown
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  exit={{ y: 200 }}
                  transition={{ duration: 0.5, delay: 1 }}
               >
                  <FaChevronDown />
               </DrippingDown>
            </ScrollLink>
         </HomeStyle>
      </>
   );
};

export default Home;
