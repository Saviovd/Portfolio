import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   width: 95%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   position: fixed;
   top: 6rem;

   @media screen {
      @media (max-width: 1024px) {
         top: 5rem;
         width: 97%;
      }
      @media (max-width: 768px) {
         /* top: 4rem; */
         width: 100%;
      }
   }

   .logo {
      position: absolute;
      left: 6rem;

      @media screen {
         @media (max-width: 1440px) {
            left: 5rem;
            width: 8rem;
            height: 8rem;
         }
      }
      @media (max-width: 1024px) {
         left: 4rem;
         width: 7rem;
         height: 7rem;
      }
      @media (max-width: 768px) {
         width: 6rem;
         height: 6rem;
      }
   }

   .burger_icon {
      cursor: pointer;
      position: absolute;
      right: 2rem;
      top: -2rem;
      font-size: 4rem;
      color: rgb(var(--secondary-white));
      z-index: 9;
      display: none;

      @media screen {
         @media (max-width: 768px) {
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
`;
