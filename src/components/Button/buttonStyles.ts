import styled from 'styled-components';

export const ButtonStyle = styled.a`
   align-self: center;
   justify-self: center;

   display: block;
   position: relative;
   background: none;
   outline: none;
   padding: 1.5rem 4.5rem;
   font-size: 2.2rem;
   letter-spacing: 0.3rem;
   text-align: center;
   text-transform: uppercase;
   border: 1px solid rgb(var(--primary-blue));
   transition: all 0.2s ease;
   white-space: nowrap;
   cursor: default;
   z-index: 0;
   @media screen {
      @media (max-width: 1600px) {
         font-size: 2rem;
         padding: 1.1rem 4rem;
      }
      @media (max-width: 830px) {
         font-size: 1.8rem;
      }
      @media (max-width: 590px) {
         font-size: 1.5rem;
         padding: 1rem 3rem;
      }
      @media (max-width: 430px) {
         font-size: 1.2rem;
         padding: 0.8rem 2rem;
      }
      @media (max-width: 370px) {
         font-size: 1.1rem;
         padding: 0.8rem 1.8rem;
      }
   }
   &:before,
   &:after {
      content: '☠ GET OUT! ☠';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
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
      animation: glitch-cursor 500ms forwards;
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

   @keyframes glitch-cursor {
      0% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      5% {
         cursor: default;
      }
      10% {
         cursor: wait;
      }
      25% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      30% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      35% {
         cursor: wait;
      }
      40% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      45% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      70% {
         cursor: pointer;
      }
      75% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      80% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      100% {
         cursor: pointer;
      }
   }
`;
