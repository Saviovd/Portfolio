import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   width: 100%;
   max-width: 180rem;
   height: 10rem;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   position: fixed;
   padding-top: 1rem;
   backdrop-filter: blur(0.3rem);
   box-shadow: 0px .1px 0px 0px rgba(var(--secondary-white), .4);

   @media screen {
      @media (max-width: 1300px) {
         height: 8rem;
      }
      @media (max-width: 600px) {
         height: 5rem;
         padding: 0.5rem 0;
      }
   }

   .logo {
      position: absolute;
      left: 2rem;
      @media screen {
         @media (max-width: 1820px) {
            width: 6rem;
            height: 7rem;
         }
         @media (max-width: 1300px) {
            width: 5rem;
            height: 6rem;
         }
         @media (max-width: 600px) {
            width: 3rem;
            height: 4rem;
         }
      }
   }

   .center {
      z-index: 9;
      cursor: pointer;
      display: none;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      width: 5rem;

      @media screen {
         @media (max-width: 800px) {
            display: block;
         }
         @media (max-width: 600px) {
            width: 3rem;
         }
      }

      &::before,
      &::after,
      & div {
         background: rgb(var(--secondary-white));
         content: '';
         display: block;
         height: 6px;
         border-radius: 3px;
         margin: 7px 0;
         transition: 0.5s;

         @media screen {
            @media (max-width: 600px) {
               margin: 4px 0;
               height: 3px;
            }
         }
      }

      &.active::before {
         transform: translateY(12px) rotate(135deg);
         @media screen {
            @media (max-width: 600px) {
               transform: translateY(7px) rotate(135deg);
            }
         }
      }

      &.active::after {
         transform: translateY(-12px) rotate(-135deg);
         @media screen {
            @media (max-width: 600px) {
               transform: translateY(-7px) rotate(-135deg);
            }
         }
      }

      &.active div {
         transform: scale(0);
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

   .progress-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.3rem;
      background: rgb(var(--primary-pink));
      transform-origin: 0%;
   }
`;
