import Image from 'next/image';
import { AboutStyle } from './aboutStyles';
import Title from '../Title/Title';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Experiences from '../Experiences/Experiences';

const About = () => {
   const { t } = useTranslation();

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2,
      },
   });

   const [isHovering, setIsHovering] = React.useState(false);

   const handleMouseEnter = () => {
      setIsHovering(true);
      setTimeout(() => {
         setIsHovering(false);
      }, 1000);
   };

   return (
      <AboutStyle id={t('Header.aboutme')}>
         <Title
            firstColor='rgb(var(--primary-pink))'
            secondColor='#FFFFFF'
            firstWord={t('AboutMe.about')}
            secondWord={t('AboutMe.me')}
         />
         <motion.div {...motionProps(100, 0)} className='about_content'>
            {isHovering ? (
               <Image
                  src={'/assets/photo.gif'}
                  alt='Savio´s Photograph'
                  width={450}
                  height={580}
                  onMouseLeave={() => setIsHovering(false)}
                  className='photograph'
               />
            ) : (
               <Image
                  src={'/assets/Photo/savio.jpg'}
                  alt='Savio´s Photograph'
                  width={450}
                  height={580}
                  onMouseEnter={handleMouseEnter}
                  className='photograph'
               />
            )}
            <div className='content'>
               <p className='about_me'>{t('AboutMe.apresentation')}</p>
               <div className='qualities'>
                  <p className='qualities_title'>{t('AboutMe.obs')}</p>
                  <ul>
                     <li>
                        <span className='emphasis'>
                           {t('AboutMe.emphasis1')}
                        </span>
                        {t('AboutMe.text1')}
                     </li>
                     <li>
                        <span className='emphasis'>
                           {t('AboutMe.emphasis2')}
                        </span>
                        {t('AboutMe.text2')}
                     </li>
                     <li>
                        <span className='emphasis'>
                           {t('AboutMe.emphasis3')}
                        </span>
                        {t('AboutMe.text3')}
                     </li>
                  </ul>
               </div>
            </div>
         </motion.div>
            <Experiences />
      </AboutStyle>
   );
};

export default About;
