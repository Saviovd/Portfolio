import React, { useState } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { LanguageStyles } from './styles';

interface ILanguagesProps {
   className?: string
}

const LanguageBar = ({className}: ILanguagesProps) => {
   const router = useRouter();
   const [currentLang, setCurrentLang] = useState(i18next.language);

   const handleLanguageChange = (newLocale: string) => {
      router.replace(router.asPath, router.asPath, { locale: newLocale, shallow: true });
      i18next.changeLanguage(newLocale);
      setCurrentLang(newLocale);
   };

   return (
      <LanguageStyles className={className} currentLang={currentLang}>
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
