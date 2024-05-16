import styled from 'styled-components';

export const HomeStyle = styled.section`
   height: 100vh;
   min-height: 55rem;
   max-width: 1800px;
   margin: 0 auto;
   padding: 0 5rem;
   position: relative;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media screen {
      @media (max-width: 730px) {
         padding: 0 1rem;
      }
   }
   div {
      margin: 0;
      padding: 0;
   }

   .apresentation {
      height: 60vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      @media screen {
         @media (max-width: 1640px) {
            gap: 0.5rem;
         }
         @media (max-width: 640px) {
            text-align: center;
         }
      }

      .loader-space {
         height: 5rem;
         @media screen {
            @media (max-width: 650px) {
               height: 2.5rem;
            }
         }
      }
      .calls_me {
         text-transform: uppercase;
         font-weight: 500;
         letter-spacing: 2px;
         font-size: 5rem;
         align-self: flex-start;
         @media screen {
            @media (max-width: 1640px) {
               font-size: 4.5rem;
            }
            @media (max-width: 830px) {
               font-size: 4rem;
            }
            @media (max-width: 650px) {
               font-size: 3rem;
               align-self: auto;
            }
            @media (max-width: 510px) {
               font-size: 2.5rem;
            }
            @media (max-width: 380px) {
               font-size: 2.2rem;
            }
         }
      }
      .my_name {
         color: rgb(var(--primary-blue));
         font-size: 8rem;
         text-transform: uppercase;
         letter-spacing: 3px;
         font-weight: 600;

         align-self: center;
         justify-self: center;
         margin: 0;
         @media screen {
            @media (max-width: 1640px) {
               font-size: 7rem;
            }
            @media (max-width: 830px) {
               font-size: 6rem;
            }
            @media (max-width: 650px) {
               font-size: 4rem;
            }
            @media (max-width: 510px) {
               font-size: 3rem;
            }
            @media (max-width: 380px) {
               font-size: 2.7rem;
            }
         }
      }
      .loader {
         color: rgb(var(--primary-pink));
         font-size: 4rem;
         text-transform: uppercase;
         font-weight: 600;
         align-self: center;
         justify-self: center;
         text-align: center;
         @media screen {
            @media (max-width: 1640px) {
               font-size: 3rem;
            }
            @media (max-width: 830px) {
               font-size: 2.5rem;
            }
            @media (max-width: 650px) {
               font-size: 2rem;
            }
            @media (max-width: 510px) {
               font-size: 1.7rem;
            }
         }
      }

      &:hover {
         animation: glitch-cursor 700ms forwards;
         animation-delay: ${Math.random() * 5000 + 1000}ms;
      }
   }

   .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 8rem;

      .left,
      .right {
         margin: 0 auto;

         @media (max-width: 510px) {
            margin: 0;
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

export const DrippingDown = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   justify-self: flex-end;
   transform: translate(-2rem, 5rem);

   @media screen {
      @media (max-width: 1024px) {
         transform: translate(-2rem, 8rem);
      }
      @media (max-width: 1024px) {
         transform: translate(-2rem, 5rem);
      }
   }
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
`;
