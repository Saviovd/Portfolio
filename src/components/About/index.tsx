import Image from 'next/image';
import { AboutContent, AboutStyle } from './styles';
import Title from '../Title';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { MdPermIdentity } from 'react-icons/md';
import Experiences from '../Experiences';
import data from '@/data/about.json';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import useWindowSize from '@/hooks/useWindowSize';

const { about } = data;

const About = () => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;
   const { width } = useWindowSize();

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

   const [isHovering, setIsHovering] = useState(false);

   const handleMouseEnter = () => {
      setIsHovering(true);
      setTimeout(() => {
         setIsHovering(false);
      }, 1000);
   };

   return (
      <AboutStyle id={t('Header.aboutme')}>
         <Title text={t('AboutMe.aboutme')} icon={<MdPermIdentity />} />
         <motion.div {...motionProps(100, 0)} className='about-container'>
            <AboutContent>
               <p className='description'>{about.description[locale]}</p>
               <ul className='qualities'>
                  {about.quality[locale].map((item) => (
                     <li className='quality-box' key={item.title}>
                        <span className='quality-title'>
                           {item.title}
                           {width > 900 ? ':' : ''}
                        </span>
                        {item.text}
                     </li>
                  ))}
               </ul>
            </AboutContent>
            {isHovering ? (
               <Image
                  src={'/assets/Photo/savio.gif'}
                  alt='Savio´s Photograph'
                  width={350}
                  height={350}
                  onMouseLeave={() => setIsHovering(false)}
                  className='photograph'
               />
            ) : (
               <Image
                  src={'/assets/Photo/savio.png'}
                  alt='Savio´s Photograph'
                  width={350}
                  height={350}
                  onMouseEnter={handleMouseEnter}
                  className='photograph'
                  quality={100}
               />
            )}
         </motion.div>
         <Experiences />
      </AboutStyle>
   );
};

export default About;
