import styled from 'styled-components';
import bg from '../../../public/assets/bg-animation.gif';

export const HomeStyle = styled.section`
   height: 100vh;
   min-height: 545px;
   max-width: 1900px;
   margin: 0 auto;
   position: relative;

   display: flex;
   padding: 0 0 0 5rem;
   justify-content: space-between;

   .apresentation {
      width: 35%;
      height: calc(100vh - 15rem);
      min-height: 48rem;
      align-self: flex-end;
      display: grid;
      grid-template-areas:
         'hello hello'
         'calls_me calls_me'
         'name name'
         'office loader'
         'left right'
         'dripping_down dripping_down';
      grid-template-rows: 30% 4% 14% 8% 15% auto;
      grid-template-columns: repeat(2, 1fr);

      justify-content: center;
      align-items: center;

      margin: 0;
      .hello_world {
         grid-area: hello;
         font-size: 5.2rem;
         margin: 0;
         letter-spacing: 0.6rem;
         white-space: nowrap;
         justify-self: center;

         @media screen {
            @media (max-width: 1600px) {
               font-size: 4rem;
            }
            @media (max-width: 1100px) {
               font-size: 3rem;
            }
         }
      }
      .calls_me {
         grid-area: calls_me;
         text-transform: uppercase;
         font-weight: 600;
         letter-spacing: 2px;
         font-size: 2rem;
         @media screen {
            @media (max-width: 1600px) {
               font-size: 1.8rem;
            }
         }
      }
      .my_name {
         grid-area: name;
         color: rgb(var(--first-primary-color));
         font-size: 4rem;
         text-transform: uppercase;
         letter-spacing: 3px;
         font-weight: 700;

         align-self: center;
         justify-self: center;
         margin: 0;
         @media screen {
            @media (max-width: 1600px) {
               font-size: 3.3rem;
            }
            @media (max-width: 1600px) {
               font-size: 3rem;
            }
         }
      }
      .office {
         grid-area: office;
         letter-spacing: 3px;
         font-size: 2.5rem;
         text-transform: uppercase;
         font-weight: 600;

         align-self: center;
         justify-self: center;
         margin: 0;
         transform: translate(2.5rem, -2rem);
         @media screen {
            @media (max-width: 1600px) {
               font-size: 1.7rem;
            }
            @media (max-width: 1600px) {
               font-size: 1.5rem;
            }
         }
      }
      .loader {
         grid-area: loader;
         color: rgb(var(--second-primary-color));
         font-size: 3rem;
         text-transform: uppercase;
         font-weight: 700;
         transform: translate(2.5rem, -2rem);
         @media screen {
            @media (max-width: 1600px) {
               font-size: 2.4rem;
            }
            @media (max-width: 1600px) {
               font-size: 2rem;
            }
         }
      }

      .left {
         grid-area: left;
      }
      .right {
         grid-area: right;
      }
      .dripping_down {
         grid-area: dripping_down;
         position: relative;
         width: 24px;
         height: 24px;
         align-self: center;
         justify-self: center;
         margin: 8rem auto 0 auto;
         cursor: pointer;
         .chevron {
            position: absolute;
            width: 8rem;
            height: 0.8rem;
            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
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
               background: rgb(var(--second-primary-color));
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
            @media (max-width: 1600px) {
               margin: 4rem 25rem 0 auto;
            }
            @media (max-width: 1600px) {
               margin: 2rem 24rem 0 auto;
            }
         }
      }
   }

   .animated_bg {
      width: 60%;
      height: 100vh;
      scale: 1;

      align-self: flex-end;

      background-image: url(${bg.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      z-index: -2;
   }
   position: relative;

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
         transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
      }
   }
`;
