import styled from 'styled-components';

interface LanguageStylesProps {
   currentLang?: string;
}

export const LanguageStyles = styled.div<LanguageStylesProps>`
   z-index: 10000;
   display: flex;
   align-items: center;
   justify-content: center;
   width: auto;
   height: 2rem;
   font-size: 1.5rem;
   color: black;
   background-color: rgba(var(--primary-blue), 0.13);
   transform: translateX(-4rem);

   .language {
      cursor: pointer;
      margin: 0 5px;
      font-weight: 900;
      color: rgba(var(--primary-pink), 0.4);
   }

   .currentLang {
      color: rgba(var(--primary-blue));
   }

   @media screen {
      @media (max-width: 1440px) {
         transform: translateX(-2rem);
      }
      @media (max-width: 1160px) {
         margin-left: 0rem;
      }
      @media (max-width: 1024px) {
         font-size: 1.2rem;
      }
      @media (max-width: 768px) {
         background-color: rgba(var(--primary-blue), 0.8);
         margin: 0 auto;
         transform: translate(0);
         .currentLang {
            color: rgba(var(--primary-pink));
         }
      }
   }
`;
