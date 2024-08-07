import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Nav from '../Nav';
import { HeaderStyle } from './styles';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';

const Header = () => {
   const { t } = useTranslation();
   const [isMenuMobileActive, setIsActive] = useState(false);
   const { width } = useWindowSize();
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   useEffect(() => {
      if (width >= 1024) setIsActive(true);
      if (width < 1024) setIsActive(false);
   }, [width]);

   return (
      <>
         <HeaderStyle
            initial={{ y: '-120%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
         >
            <div className='header-container'>
               <Image
                  className='logo'
                  src={'/assets/logo.png'}
                  alt={t('Header.logoAlt')}
                  width={60}
                  height={60}
                  style={{width: 'auto', height: 'auto'}}
                  quality={100}
               />
               {/* Nav Bar */}
               <AnimatePresence>
                  {((width && width > 1024) || isMenuMobileActive) && (
                     <Nav isActive={isMenuMobileActive} key='nav' />
                  )}
               </AnimatePresence>
               {/* Hamburguer animated icon */}
               {width && width < 1024 && (
                  <div
                     className={isMenuMobileActive ? 'center active' : 'center'}
                     onClick={() => setIsActive(!isMenuMobileActive)}
                  >
                     <div></div>
                  </div>
               )}
               {/* progress bar */}
               {width > 1024 && (
                  <motion.div className='progress-bar' style={{ scaleX }} />
               )}
            </div>
            {isMenuMobileActive && width < 1024 && (
               <div
                  className='outside'
                  onClick={() => setIsActive(false)}
               ></div>
            )}
         </HeaderStyle>
      </>
   );
};

export default Header;
