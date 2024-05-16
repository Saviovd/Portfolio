import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Nav from '../Nav/Nav';
import { HeaderStyle } from './headerStyles';
import { motion, useScroll, useSpring } from 'framer-motion';

const Header = () => {
   const { t } = useTranslation();
   const [isActive, setIsActive] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   React.useEffect(() => {
      if (window !== undefined && window.innerWidth <= 800) {
         setTimeout(() => {
            setIsLoaded(true);
         }, 2000);
      }
      if (window !== undefined && window.innerWidth > 800) {
         setIsLoaded(true);
      }
   }, []);
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   return (
      <>
         <HeaderStyle onClick={() => setIsActive(!isActive)}>
            <Image
               className='logo'
               src={'/assets/logo.svg'}
               alt={t('Header.logoAlt')}
               width={75}
               height={80}
            />
            {isLoaded && <Nav isVisible={isActive} />}
            <div
               className={isActive ? 'center active' : 'center'}
               onClick={() => setIsActive(!isActive)}
            >
               <div></div>
            </div>
            <motion.div className='progress-bar' style={{ scaleX }} />
         </HeaderStyle>
      </>
   );
};

export default Header;
