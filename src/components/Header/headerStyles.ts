import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   max-width: 1700px;
   width: 100%;
   margin: 0 auto;
   padding: 0 2rem;

   display: flex;
   align-items: center;
   justify-content: flex-start;

   position: fixed;
   top: 3rem;
   right: 0%;
   left: 0%;

   background-color: transparent;

   .logo {
      position: absolute;
      left: 3rem;
      @media screen {
         @media (max-width: 1440px) {
            height: 3rem;
            width: 6rem;
            height: 6rem;
         }
         @media (max-width: 1024px) {
            height: 3rem;
            width: 5.5rem;
            height: 5.5rem;
         }
         @media screen {
            @media (max-width: 768px) {
               top: 2rem;
               left: 1.5rem;
               width: 5rem;
               height: 5rem;
            }
         }
      }
   }

   .burger_icon {
      cursor: pointer;
      position: absolute;
      right: 2rem;
      top: 2.5rem;
      font-size: 4rem;
      color: rgb(var(--secondary-white));
      z-index: 9;
      display: none;

      @media screen {
         @media (max-width: 768px) {
            display: initial;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         justify-content: flex-end;
         top: 2rem;
      }
      @media (max-width: 768px) {
         padding: 0;
         height: 7rem;
         top: 0;
      }
   }
`;
