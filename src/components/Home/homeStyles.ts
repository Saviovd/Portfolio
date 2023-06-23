import styled from 'styled-components';
import bg from '../../../public/assets/bg-animation.gif';

export const HomeStyle = styled.section`
   height: 100vh;
   min-height: 55rem;
   max-width: 1750px;
   margin: 0 auto;
   position: relative;

   display: flex;
   align-items: center;
   padding: 0 0 0 5rem;

   .apresentation {
      width: 40%;
      padding: 0 5rem;
      height: 100vh;
      display: grid;
      grid-template-areas:
         '. .'
         'calls_me calls_me'
         'name name'
         'office loader'
         'left right'
         'dripping_down dripping_down';
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(2, 1fr);
      margin: 0;

      .calls_me {
         grid-area: calls_me;
         text-transform: uppercase;
         font-weight: 600;
         letter-spacing: 2px;
         font-size: 2rem;
         align-self: flex-end;
         @media screen {
            @media (max-width: 1024px) {
               font-size: 2rem;
            }
            @media (max-width: 550px) {
               font-size: 1.8rem;
            }
            @media (max-width: 550px) {
               font-size: 1.6rem;
            }
            @media (max-width: 375px) {
               font-size: 1.3rem;
               margin-left: 2rem;
            }
         }
      }
      .my_name {
         grid-area: name;
         color: rgb(var(--primary-blue));
         font-size: 5.5rem;
         text-transform: uppercase;
         letter-spacing: 3px;
         font-weight: 700;

         align-self: center;
         justify-self: center;
         margin: 0;
         @media screen {
            @media (max-width: 1600px) {
               font-size: 4.6rem;
            }
            @media (max-width: 900px) {
               font-size: 4rem;
            }
            @media (max-width: 550px) {
               font-size: 2.7rem;
            }
            @media (max-width: 340px) {
               font-size: 2.4rem;
            }
         }
      }
      .office {
         grid-area: office;
         letter-spacing: 3px;
         font-size: 2.5rem;
         text-transform: uppercase;
         font-weight: 500;
         align-self: flex-start;
         justify-self: flex-end;
         margin: 0;

         @media screen {
            @media (max-width: 1600px) {
               font-size: 2.2rem;
            }
            @media (max-width: 1024px) {
               font-size: 2rem;
            }
            @media (max-width: 768px) {
               font-size: 1.7rem;
            }
            @media (max-width: 550px) {
               font-size: 1.5rem;
            }
            @media (max-width: 400px) {
               font-size: 1.1rem;
            }
         }
      }
      .loader {
         grid-area: loader;
         color: rgb(var(--primary-pink));
         font-size: 3rem;
         text-transform: uppercase;
         font-weight: 600;
         transform: translate(2rem, -0.5rem);
         align-self: flex-start;
         @media screen {
            @media (max-width: 1024px) {
               font-size: 2.6rem;
            }
            @media (max-width: 550px) {
               font-size: 2rem;
               transform: translate(1rem, -0.5rem);
            }
            @media (max-width: 375px) {
               font-size: 1.6rem;
            }
         }
      }
      .left {
         align-self: flex-start;
         grid-area: left;
         @media screen {
            @media (max-width: 700px) {
               align-self: center;
            }
         }
      }
      .right {
         align-self: flex-start;
         grid-area: right;
         @media screen {
            @media (max-width: 700px) {
               align-self: center;
            }
         }
      }
      .dripping_down {
         grid-area: dripping_down;
         transform: translateX(-60%);
         position: relative;
         width: 3.5rem;
         height: 5rem;
         align-self: center;
         justify-self: center;
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

         @media screen {
            @media (max-width: 7000px) {
               align-self: flex-end;
               margin-bottom: 10%;
            }
         }
      }

      @media screen {
         @media (max-width: 1400px) {
            width: 50%;
         }
         @media (max-width: 1145px) {
            width: 65%;
         }
         @media (max-width: 900px) {
            padding: 0 1.5rem;
         }
         @media (max-width: 700px) {
            width: 80%;
            z-index: 1;
            grid-template-areas:
               'calls_me calls_me'
               'name name'
               'office loader'
               'left right'
               'dripping_down dripping_down';
            grid-template-rows: auto 15% 10% 15% 25%;
            align-items: center;
         }
         @media (max-width: 500px) {
            width: 100%;
         }
      }
   }

   .animated_bg {
      width: 60%;
      height: 100vh;
      background-image: url(${bg.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      z-index: -2;

      @media screen {
         @media (max-width: 1400px) {
            width: 50%;
         }
         @media (max-width: 1145px) {
            width: 35%;
            background-size: cover;
         }
         @media (max-width: 700px) {
            display: none;
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

   @media screen {
      @media (max-width: 1400px) {
         padding: 0;
      }
      @media (max-width: 700px) {
         justify-content: center;

         background-image: url(${bg.src});
         background-repeat: no-repeat;
         background-size: 100% 100%;

         &::after {
            content: '';
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.9);
            position: absolute;
            min-height: inherit;
         }
      }
   }
`;
