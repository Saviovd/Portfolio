import React from 'react';
import { HomeStyle, Buttons, DrippingDown } from './homeStyles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Social from '../Social/Social';

const Intro = () => {
   const { t } = useTranslation();

   const motionProps = (initialX: number, finalX: number) => ({
      initial: { opacity: 0, x: initialX },
      whileInView: { opacity: 1, x: finalX },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 1,
         delay: 0.2
      },
   });


   return (
      <>
         <HomeStyle id={t('Header.home')}>
            <motion.div {...motionProps(-100, 0)} className='apresentation'>
               <span className='calls_me'>{t('Home.call')}</span>
               <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
               <Loader />
               <Buttons>
                  <Button
                     className='left'
                     title={t('Home.github')}
                     url='https://github.com/Saviovd'
                     bgColor='rgba(var(--primary-pink), 0.6)'
                     _blank={true}
                  />
                  <Button
                     className='right'
                     title='Download CV'
                     download={true}
                     _blank={false}
                     url='/documents/curriculum.pdf'
                  />
               </Buttons>
            </motion.div>
            <DrippingDown>
               <ScrollLink
                  to={`${t('Home.toAboutMe')}`}
                  smooth={true}
                  spy={true}
                  duration={700}
                  delay={100}
                  offset={typeof window !== 'undefined' && window.innerWidth < 768 ? -90 : -150}
                  className='dripping_down'
               >
                  <div className='chevron'></div>
                  <div className='chevron'></div>
                  <div className='chevron'></div>
               </ScrollLink>
            </DrippingDown>
            <Social />
         </HomeStyle>
      </>
   );
};

export default Intro;
