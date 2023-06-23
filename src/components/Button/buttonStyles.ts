import styled from 'styled-components';

export const ButtonStyle = styled.a`
   align-self: center;
   justify-self: center;

   display: block;
   position: relative;
   background: none;
   border: none;
   outline: none;
   padding: 1rem 3rem;
   font-size: 1.5rem;
   letter-spacing: 0.3rem;
   text-align: center;
   text-transform: uppercase;
   border: 1px solid rgb(var(--primary-blue));
   transition: all 0.2s ease;
   white-space: nowrap;
   cursor: default;
   z-index: 0;

   &:before,
   &:after {
      content: '☠ GET OUT! ☠';
      position: absolute;
      top: 0;
      left: 0;
      padding: 8px 0;
      width: 100%;
      -webkit-clip: rect(0px, 0px, 0px, 0px);
      clip: rect(0px, 0px, 0px, 0px);
      background: rgb(var(--primary-blue));
      color: rgb(var(--secundary-white));
   }

   &:before {
      left: -3px;
      top: -2px;
      text-shadow: 2px 0 rgb(var(--primary-blue));
      box-shadow: 2px 0 rgb(var(--primary-blue));
   }

   &:after {
      left: 2px;
      bottom: -2px;
      text-shadow: -1px 0 rgb(var(--primary-blue));
      box-shadow: -1px 0 rgb(var(--primary-blue));
   }

   &:hover {
      cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png), pointer;
   }

   &:hover:before {
      animation: glitch-button 1.5s forwards linear alternate-reverse;
   }

   &:hover:after {
      animation: glitch-button 2s forwards linear alternate;
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

   @media screen {
      @media (max-width: 1600px) {
         padding: 1rem 2rem;
         font-size: 1.4rem;
      }
      @media (max-width: 775px) {
         padding: 1rem 1.5rem;
         font-size: 1.2rem;
      }
      @media (max-width: 440px) {
         padding: 1rem 1rem;
         font-size: 1rem;
      }
   }
`;
