import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Nav from '../Nav';
import { HeaderStyle } from './styles';
import { AnimatePresence } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';
import useScrollPosition from '@/hooks/useScrollPosition';
import LanguageBar from '../Languages';

const Header = () => {
   const { t } = useTranslation();
   const [isMenuMobileActive, setIsActive] = useState(false);
   const { width } = useWindowSize();
   const position = useScrollPosition();

   useEffect(() => {
      const isDesktop = width > 1024;
      setIsActive(isDesktop);
   }, [width]);

   const toggleMenu = () => setIsActive(!isMenuMobileActive);

   const showNavBar = (width && width > 1024) || isMenuMobileActive;

   return (
      <>
         <HeaderStyle
            initial={{ y: '-120%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
         >
            <div
               className={`header-container ${position > 50 ? 'scrolled' : ''}`}
            >
               <Image
                  className='logo'
                  src='/assets/logo.png'
                  alt={t('Header.logoAlt')}
                  width={40}
                  height={40}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
               />

               <AnimatePresence>
                  {showNavBar && (
                     <Nav isActive={isMenuMobileActive} key='nav' />
                  )}
               </AnimatePresence>

               <LanguageBar className='translations' />

               {width && width <= 1024 && (
                  <div
                     className={`center ${isMenuMobileActive ? 'active' : ''}`}
                     onClick={toggleMenu}
                  >
                     <div></div>
                  </div>
               )}
            </div>

            {isMenuMobileActive && width <= 1024 && (
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
