import styled from 'styled-components';

interface LanguageStylesProps {
   currentLang?: string;
}

export const LanguageStyles = styled.div<LanguageStylesProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   width: auto;
   height: 2rem;
   font-size: 1.5rem;
   color: black;
   background-color: rgba(var(--primary-blue), 0.13);
   backdrop-filter: blur(5px);
   padding: 0.5rem;
   color: rgba(var(--primary-blue), 0.5);

   .language {
      cursor: pointer;
      padding: 0 0.5rem;
      font-weight: 900;
      color: rgba(var(--primary-pink), 0.4);
   }

   .currentLang {
      color: rgba(var(--primary-blue));
   }

   @media screen {
      @media (max-width: 1024px) {
         margin: 0 auto;
      }
   }
`;
