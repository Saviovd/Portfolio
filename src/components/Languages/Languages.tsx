import React, { useState } from 'react';
import { useRouter } from 'next/router';
import i18n from 'i18next';
import { LanguageStyles } from './LanguageStyles';

const LanguageBar = () => {
   const router = useRouter();
   const [currentLang, setCurrentLang] = useState('pt');

   const handleLanguageChange = (newLocale: string) => {
      router.push('/', '/', { locale: newLocale });
      i18n.changeLanguage(newLocale);
      setCurrentLang(newLocale);
   };

   return (
      <LanguageStyles currentLang={currentLang}>
         <span className={`language ${currentLang === 'pt' ? 'currentLang' : ''}`} onClick={() => handleLanguageChange('pt')}>
            PT
         </span>
         |
         <span className={`language ${currentLang === 'en' ? 'currentLang' : ''}`} onClick={() => handleLanguageChange('en')}>
            EN
         </span>
         |
         <span className={`language ${currentLang === 'es' ? 'currentLang' : ''}`} onClick={() => handleLanguageChange('es')}>
            ES
         </span>
      </LanguageStyles>
   );
};

export default LanguageBar;
