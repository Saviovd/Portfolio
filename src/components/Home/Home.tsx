import React from 'react';
import { HomeStyle, DrippingDown } from './homeStyles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Social from '../Social/Social';
import baffle from 'baffle';

const Intro = () => {
   const { t, i18n } = useTranslation();
   const [isLoaded, setIsloaded] = React.useState(false);
   const [currentLanguage, setCurrentLanguage] = React.useState('pt');
   const [words, setWords] = React.useState([t('Home.devfullstack')]);

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.1,
         duration: 2,
         delay: 1.5,
      },
   });

   React.useEffect(() => {
      if (!isLoaded) {
         const a = baffle('.calls_me');
         a.set({
            characters: '▓█>▒/▒░ █▒▓/',
            speed: 100,
         });
         a.start();
         a.reveal(500, 0);
         a.stop();
         const b = baffle('.my_name');
         b.set({
            characters: '█▓GET OUT!☠░▒▓/',
            speed: 100,
         });
         b.start();
         b.reveal(500, 0);
         b.stop();
      }
   });
   React.useEffect(() => {
      setCurrentLanguage(i18n.language);
      setIsloaded(false);
      if (i18n.language !== currentLanguage) {
         setWords([t('Home.devfullstack')]);
         setIsloaded(true);
      }
   }, [currentLanguage, i18n.language, t]);

   setTimeout(() => {
      setIsloaded(true);
   }, 2000);
   return (
      <>
         <HomeStyle id={t('Header.home')}>
            <div className='apresentation'>
               <span className='calls_me'>{t('Home.call')}</span>
               <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
               {isLoaded && currentLanguage === i18n.language ? (
                  <Loader words={words} />
               ) : (
                  <div className='loader-space'></div>
               )}
               <motion.div className='buttons' {...motionProps(200, 0)}>
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
               </motion.div>
               <Social />
            </div>
            <DrippingDown>
               <ScrollLink
                  to={`${t('Home.toAboutMe')}`}
                  smooth={true}
                  spy={true}
                  duration={700}
                  delay={100}
                  offset={
                     typeof window !== 'undefined' && window.innerWidth < 768
                        ? -100
                        : -80
                  }
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

export default Intro;
