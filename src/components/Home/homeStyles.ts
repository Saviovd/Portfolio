import styled from 'styled-components';

export const HomeStyle = styled.section`
   height: calc(100vh - 5rem);
   min-height: 55rem;
   max-width: 1750px;
   margin: 0 auto;
   padding-top: 5rem;
   position: relative;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .apresentation {
      height: 60%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      .calls_me {
         text-transform: uppercase;
         font-weight: 500;
         letter-spacing: 2px;
         font-size: 6rem;
         align-self: flex-start;
      }
      .my_name {
         color: rgb(var(--primary-blue));
         font-size: 10rem;
         text-transform: uppercase;
         letter-spacing: 3px;
         font-weight: 600;

         align-self: center;
         justify-self: center;
         margin: 0;
      }
      .loader {
         color: rgb(var(--primary-pink));
         font-size: 5rem;
         text-transform: uppercase;
         font-weight: 600;
         transform: translate(2rem, -0.5rem);
         align-self: center;
         justify-self: center;
         text-align: center;
         min-width: 40rem;
      }

      &:hover {
         animation: glitch-cursor 700ms forwards;
         animation-delay: ${Math.random() * 5000 + 1000}ms;
      }

      @media screen {
         @media (max-width: 2048px) or (max-height: 1152px) {
            .calls_me {
               font-size: 5rem;
            }
            .my_name {
               font-size: 9rem;
            }
            .loader {
               font-size: 4rem;
            }
         }
         @media (max-width: 1728px) or (max-height: 1085px) {
            .calls_me {
               font-size: 4rem;
            }
            .my_name {
               font-size: 7rem;
            }
            .loader {
               font-size: 3rem;
            }
         }
         @media (max-width: 1024px) {
            .calls_me {
               font-size: 3rem;
            }
            .my_name {
               font-size: 6rem;
            }
            .loader {
               font-size: 2.5rem;
            }
         }
         @media (max-width: 768px) {
            .calls_me {
               font-size: 2.5rem;
               align-self: center;
            }
            .my_name {
               font-size: 5rem;
            }
            .loader {
               font-size: 2rem;
            }
         }
         @media (max-width: 620px) {
            .calls_me {
               font-size: 2rem;
            }
            .my_name {
               font-size: 4rem;
            }
            .loader {
               font-size: 1.7rem;
            }
         }
         @media (max-width: 620px) {
            .my_name {
               font-size: 3.2rem;
            }
            .loader {
               font-size: 1.5rem;
            }
         }
         @media (max-width: 390px) {
            .my_name {
               font-size: 2.7rem;
            }
            .loader {
               font-size: 1.3rem;
            }
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
export const Buttons = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   transform: translateY(100px);
   .left,
   .right {
      margin: 0 auto;
   }

   @media screen {
      @media (max-width: 1728px) or (max-height: 1085px) {
         margin: 0 auto;
         width: 80%;
         transform: translateY(70px);
      }
      @media (max-width: 1024px) {
         transform: translateY(60px);
      }
      @media (max-width: 768px) {
         width: 100%;
      }
      @media (max-width: 390px) {
         /* margin: 0; */
         justify-content: center;
         .left,
         .right {
            margin: 0 5px;
         }
      }
   }
`;

export const DrippingDown = styled.div`
   height: 20%;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   .dripping_down {
      position: relative;
      margin: 0 auto;
      width: 3.5rem;
      height: 5rem;
      cursor: pointer;

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

   @media screen {
      @media (max-width: 2048px) or (max-height: 1152px) {
      }
   }
`;
