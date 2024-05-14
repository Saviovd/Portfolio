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
   const { t } = useTranslation();
   const [isLoaded, setIsloaded] = React.useState(false);

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.1,
         duration: 5,
         delay: 2.5,
      },
   });

   React.useEffect(() => {
      const a = baffle('.calls_me');
      a.set({
         characters: '▓█>▒/▒░ █▒▓/',
         speed: 100,
      });
      a.start();
      a.reveal(500, 1000);
      a.stop();
      const b = baffle('.my_name');
      b.set({
         characters: '█▓☠ GET OUT! ☠░▒▓/',
         speed: 100,
      });
      b.start();
      b.reveal(900, 1400);
      b.stop();

      setTimeout(() => {
         setIsloaded(true);
      }, 4000);
   });

   return (
      <>
         <HomeStyle id={t('Header.home')}>
            <div className='apresentation'>
               <span className='calls_me'>{t('Home.call')}</span>
               <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
               {isLoaded ? <Loader /> : <div style={{ height: '5rem' }}></div>}
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
