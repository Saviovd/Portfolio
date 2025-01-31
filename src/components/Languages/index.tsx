import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { LanguageStyles } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { MdLanguage } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import Image from 'next/image';

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

   const arrowVariants = {
      closed: { rotate: 0 },
      open: { rotate: 180 },
   };

   const languages = [
      {
         label: 'English',
         code: 'en',
         flag: 'https://www.svgrepo.com/show/508668/flag-us.svg',
      },
      {
         label: 'Português',
         code: 'pt',
         flag: 'https://www.svgrepo.com/show/405433/flag-for-flag-brazil.svg',
      },
      {
         label: 'Español',
         code: 'es',
         flag: 'https://www.svgrepo.com/show/248935/spain.svg',
      },
   ];

   return (
      <LanguageStyles className={className} currentLang={currentLang}>
         <div className='dropdown'>
            <button
               className='dropdown-btn'
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
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                     {languages.map((lang) => (
                        <li
                           key={lang.code}
                           onClick={() => handleLanguageChange(lang.code)}
                           className={
                              currentLang === lang.code ? 'currentLang' : ''
                           }
                        >
                           <Image src={lang.flag} alt={`${lang.code} flag`} width={20} height={20} />
                           {lang.label}
                        </li>
                     ))}
                  </motion.ul>
               )}
            </AnimatePresence>
         </div>
      </LanguageStyles>
   );
};

export default LanguageBar;
