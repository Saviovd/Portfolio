import styled from 'styled-components';

export const HomeStyle = styled.section`
   height: 99vh;
   max-width: 1800px;
   margin: 0 auto;
   position: relative;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .apresentation {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      .calls_me {
         font-size: 3rem;
         text-transform: uppercase;
         font-weight: 500;
         letter-spacing: 2px;
         align-self: flex-start;

         @media screen {
            @media (max-width: 520px) {
               font-size: 2rem;
            }
            @media (max-width: 410px) {
               font-size: 1.7rem;
               align-self: center;
            }
         }
      }
      .my_name {
         font-size: 5rem;
         color: rgb(var(--primary-blue));
         text-transform: uppercase;
         letter-spacing: 2px;
         font-weight: 600;

         align-self: center;
         justify-self: center;
         margin: 0;

         @media screen {
            @media (max-width: 520px) {
               font-size: 3.5rem;
            }
            @media (max-width: 410px) {
               font-size: 3rem;
               align-self: center;
            }
         }
      }
      .loader {
         font-size: 3rem;
         color: rgb(var(--primary-pink));
         text-transform: uppercase;
         font-weight: 600;
         align-self: center;
         justify-self: center;
         text-align: center;
         @media screen {
            @media (max-width: 520px) {
               font-size: 2rem;
            }
            @media (max-width: 410px) {
               font-size: 1.7rem;
               align-self: center;
            }
         }
      }
      transition: 0.3s;
      &:hover {
         scale: 1.01;
      }

      @media screen {
         @media (max-width: 768px) {
            scale: 0.8;
            &:hover {
               scale: 0.81;
            }
         }
         @media (max-width: 520px) {
            scale: 1;
            width: 94%;
            gap: 0.5rem;
            white-space: nowrap;

            &:hover {
               scale: 1.01;
            }
         }
      }
   }

   .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 5rem;
      margin-top: 5rem;

      .button {
         padding: 1rem 2.5rem;
         font-size: 1.4rem;
         border-radius: 1px;
         transition: 0.5s;
         border: 1px solid rgb(var(--primary-blue));
         gap: 1rem;

         &:hover {
            scale: 1.05;
            background-color: rgb(var(--primary-pink), 0.2);
            border: 1px solid rgb(var(--primary-pink));
         }
      }

      @media screen {
         @media (max-width: 768px) {
            scale: 0.8;
            &:hover {
               scale: 0.85;
            }
         }
      }
   }
`;

export const DrippingDown = styled.div`
   position: absolute;
   width: 20rem;
   height: 8rem;
   top: calc(100% - 8rem);
   left: calc(50% - 10rem);

   .dripping_down {
      height: 100%;
      width: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: center;

      .chevron {
         position: absolute;
         width: 6.5rem;
         height: 0.8rem;
         opacity: 0;
         transform: scale3d(1, 1, 1);
         animation: move 3s ease-out infinite;
         &:first-child {
            animation: move 3s ease-out 1s infinite;
         }

         &:nth-child(2) {
            animation: move 3s ease-out 2s infinite;
         }
         &:before,
         &:after {
            content: ' ';
            position: absolute;
            top: 0;
            height: 100%;
            width: 51%;
            background: rgb(var(--primary-pink));
         }

         &:before {
            left: 0;
            transform: skew(0deg, 30deg);
         }

         &:after {
            right: 0;
            width: 50%;
            transform: skew(0deg, -30deg);
         }
      }
   }
   @keyframes move {
      25% {
         opacity: 1;
      }
      33% {
         opacity: 1;
         transform: translateY(30px);
      }
      67% {
         opacity: 1;
         transform: translateY(40px);
      }
      100% {
         opacity: 0;
         transform: translateY(55px) scale3d(1, 1, 1);
      }
   }
`;
