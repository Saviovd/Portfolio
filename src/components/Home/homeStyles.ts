import styled from 'styled-components';
import bg from '../../../public/assets/bg-animation.gif';

export const HomeStyle = styled.section`
   height: 100vh;
   max-width: 1700px;
   margin: 0 auto;
   padding: 0 1rem;
   position: relative;

   display: flex;
   transform: translate(10rem, 0rem);

   .apresentation {
      width: 40%;
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
      /* position: absolute; */
      .hello_world {
         grid-area: hello;
         font-size: 5.2rem;
         margin: 0;
         letter-spacing: 0.6rem;
         white-space: nowrap;
         justify-self: center;
      }
      .calls_me {
         grid-area: calls_me;
         text-transform: uppercase;
         font-weight: 600;
         letter-spacing: 2px;
         font-size: 2rem;
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
      }
      .loader {
         grid-area: loader;
         color: rgb(var(--second-primary-color));
         font-size: 3rem;
         text-transform: uppercase;
         font-weight: 700;
         transform: translate(2.5rem, -2rem);
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
         margin: 0 auto;
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
      }
   }

   .animated_bg {
      width: 60%;
      height: 100vh;

      background-image: url(${bg.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      /* transform: translateX(25rem); */

      z-index: -2;
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
         transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
      }
   }

   @keyframes glitch-button {
      0% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      5.88235% {
         clip: rect(0px, 600px, 0px, 0px);
      }
      11.76471% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      17.64706% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      23.52941% {
         clip: rect(100px, 600px, 100px, 0px);
      }
      29.41176% {
         clip: rect(0px, 600px, 600px, 0px);
      }
      35.29412% {
         clip: rect(100px, 600px, 0px, 0px);
      }
      41.17647% {
         clip: rect(0px, 600px, 600px, 0px);
      }
      47.05882% {
         clip: rect(100px, 600px, 0px, 0px);
      }
      52.94118% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      58.82353% {
         clip: rect(100px, 450px, 100px, 0px);
      }
      64.70588% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      70.58824% {
         clip: rect(100px, 450px, 100px, 0px);
      }
      76.47059% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      82.35294% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      88.23529% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      94.11765% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      100% {
         clip: rect(0px, 450px, 0px, 0px);
      }
   }
`;
