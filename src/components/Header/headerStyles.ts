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
   backdrop-filter: blur(0.6rem);

   @media screen {
      @media (max-width: 1300px) {
         height: 8rem;
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
      }
   }

   .center {
      z-index: 9;
      cursor: pointer;
      display: none;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      width: 50px;

      @media screen {
         @media (max-width: 800px) {
            display: block;
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
      }

      &.active::before {
         transform: translateY(12px) rotate(135deg);
      }

      &.active::after {
         transform: translateY(-12px) rotate(-135deg);
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
      background: rgb(var(--secondary-white));
      transform-origin: 0%;
   }
`;
