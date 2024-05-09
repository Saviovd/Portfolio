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
   @media screen {
      @media (max-width: 1440px) {
         margin: 0 1.4rem 0 0;
      }
      @media (max-width: 1300px) {
         font-size: 1.4rem;
      }
      @media (max-width: 1024px) {
         height: 1.8rem;
         font-size: 1.3rem;
      }
      @media (max-width: 800px) {
         margin: 0 auto 2rem;
         height: 2rem;
         font-size: 1.5rem;
         background-color: transparent;
      }
   }
   .language {
      cursor: pointer;
      margin: 0 0.5rem;
      font-weight: 900;
      color: rgba(var(--primary-pink), 0.4);
      @media screen {
         @media (max-width: 800px) {
            margin: 0 1rem;
         }
      }
   }

   .currentLang {
      color: rgba(var(--primary-blue));
   }
`;
