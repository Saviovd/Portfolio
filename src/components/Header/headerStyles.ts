import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   width: 95%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   position: fixed;
   top: 6rem;

   .logo {
      position: absolute;
      left: 6rem;
   }

   .burger_icon {
      cursor: pointer;
      position: absolute;
      right: 3rem;
      top: -2rem;
      font-size: 6rem;
      color: rgb(var(--secondary-white));
      z-index: 9;
      display: none;

      @media screen {
         @media (max-width: 820px) {
            display: block;
         }
      }
   }
   .rotate {
      animation: rotation 400ms forwards;

      @keyframes rotation {
         0% {
            transform: rotate(0deg);
         }
         50% {
            transform: rotate(-360deg);
         }
         100% {
            transform: rotate(0deg);
         }
      }
   }

   @media screen {
      @media (max-width: 1440px) {
         top: 5rem;

         .logo {
            left: 5rem;
            width: 8rem;
            height: 8rem;
         }
      }
      @media (max-width: 1024px) {
         top: 5rem;
         width: 97%;

         .logo {
            left: 3.5rem;
            width: 7rem;
            height: 7rem;
         }
      }
      @media (max-width: 768px) {
         width: 100%;

         .logo {
            top: -1rem;
            width: 6rem;
            height: 6rem;
         }
      }
      @media (max-width: 490px) {
         .logo {
            top: -3rem;
            left: 2rem;
         }
         .burger_icon {
            right: 2rem;
            top: -3rem;
            font-size: 5rem;
         }
      }
   }
`;
