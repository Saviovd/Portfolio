import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { LanguageStyles } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { MdLanguage } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';

interface ILanguagesProps {
   className?: string;
}

const LanguageBar = ({ className }: ILanguagesProps) => {
   const router = useRouter();
   const [currentLang, setCurrentLang] = useState(i18next.language);
   const [isDropdownOpen, setDropdownOpen] = useState(false);

   useEffect(() => {
      setCurrentLang(i18next.language);
   }, [i18next.language]);

   const handleLanguageChange = (newLocale: string) => {
      router.replace(router.asPath, router.asPath, {
         locale: newLocale,
         shallow: true,
      });
      i18next.changeLanguage(newLocale);
      setCurrentLang(newLocale);
      setDropdownOpen(false);
   };

   const dropdownVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
   };

   const arrowVariants = {
      closed: { rotate: 0 },
      open: { rotate: 180 },
   };

   return (
      <LanguageStyles
         className={className}
         currentLang={currentLang}
         onMouseEnter={() => setDropdownOpen(true)}
         onMouseLeave={() => setDropdownOpen(false)}
      >
         <div className='dropdown'>
            <button
               className='dropdown-btn'
               aria-expanded={isDropdownOpen}
               onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
               <MdLanguage className='globe' />
               <motion.div
                  animate={isDropdownOpen ? 'open' : 'closed'}
                  variants={arrowVariants}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
               >
                  <TiArrowSortedDown className='arrow' />
               </motion.div>
            </button>

            <AnimatePresence>
               {isDropdownOpen && (
                  <motion.ul
                     className='dropdown-content'
                     initial='hidden'
                     animate='visible'
                     exit='exit'
                     variants={dropdownVariants}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                     <li
                        onClick={() => handleLanguageChange('pt')}
                        className={currentLang === 'pt' ? 'currentLang' : ''}
                     >
                        PT
                     </li>
                     <li
                        onClick={() => handleLanguageChange('en')}
                        className={currentLang === 'en' ? 'currentLang' : ''}
                     >
                        EN
                     </li>
                     <li
                        onClick={() => handleLanguageChange('es')}
                        className={currentLang === 'es' ? 'currentLang' : ''}
                     >
                        ES
                     </li>
                  </motion.ul>
               )}
            </AnimatePresence>
         </div>
      </LanguageStyles>
   );
};

export default LanguageBar;
