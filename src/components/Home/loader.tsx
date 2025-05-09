import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { Locale } from '@/types/types';

const LoaderStyle = styled.div`
   color: rgb(var(--white));
   font-size: 3rem;
   color: rgb(var(--primary-pink));
   text-transform: uppercase;
   font-weight: 500;
   letter-spacing: 2px;
   align-self: center;
   justify-self: center;
   text-align: center;
   color: rgba(var(--dark-green));

   @media (max-width: 1024px) {
      font-size: 2rem;
   }
   @media (max-width: 475px) {
      font-size: 1.3rem;
   }
`;

const Loader = () => {
   const { i18n } = useTranslation();
   const [language, setLanguage] = useState<Locale>('en');

   const words: { en: string[]; pt: string[]; es: string[] } = {
      en: ['Front-End Developer', 'Back-End Developer', 'FullStack Developer'],
      pt: [
         'Desenvolvedor Front-End',
         'Desenvolvedor Back-End',
         'Desenvolvedor FullStack',
      ],
      es: [
         'Desarrollador Front-End',
         'Desarrollador Back-End',
         'Desarrollador FullStack',
      ],
   };

   useEffect(() => {
      const currentLanguage = (
         ['en', 'pt', 'es'].includes(i18n.language) ? i18n.language : 'en'
      ) as Locale;
      setLanguage(currentLanguage);
   }, [i18n.language]);

   return (
      <LoaderStyle className='loader' id='loader'>
         <Typewriter
            words={words[language] || words['en']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
         />
      </LoaderStyle>
   );
};

export default Loader;
