import { createGlobalStyle } from 'styled-components';

const outfit = 'outfit';
const lightBlue = '67, 179, 255';
const darkBlue = '10, 152, 168';
const lightGreen = '24, 255, 133';
const darkGreen = '0, 181, 86';
const light = '230, 253, 236';
const dark = '6, 5, 12';

const GlobalStyle = createGlobalStyle`
   :root {
      --outfit: ${outfit};
      --light-blue: ${lightBlue};
      --dark-blue: ${darkBlue};
      --light-green: ${lightGreen};
      --dark-green: ${darkGreen};
      --light: ${light};
      --dark: ${dark};
   }


   html {
      font-size: 10px;
      min-height: 100vh;
      background-color: rgb(var(--dark));
      overflow-x: hidden;

      * {
         font-family: var(--outfit);
         padding: 0;
         margin: 0;
         box-sizing: border-box;
      }

      .progress-bar {
         position: fixed;
         bottom: 0;
         left: 0;
         right: 0;
         height: .5rem;
         background: rgb(var(--light-green));
         transform-origin: 0%;
      }

      body {
         animation: cursorAnimation 10s infinite ;
         scroll-behavior: smooth;
         margin: 0 auto;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         max-width: 180rem;
         overflow-x: hidden;

         font-family: var(--outfit);
         color: #f1f1f1;

         li {
            list-style-type: none;
         }
         a {
            color: inherit;
            text-decoration: none;
         }
         svg {
            fill: white;
            stroke: white;
         }

         &::-webkit-scrollbar {
            width: 0rem;
         }
         &::-webkit-scrollbar-track {
            background-color: transparent;
         }
         &::-webkit-scrollbar-thumb {
            background: linear-gradient(rgba(var(--primary-blue), .5), rgba(var(--primary-pink), .5));
            animation: gradient 5s ease alternate;
            border-radius: 2px;
            outline: 1px solid rgba(var(--primary-pink));

               @keyframes gradient {
               to {
                  background: linear-gradient(rgba(var(--primary-pink), .5), rgba(var(--primary-blue), .5));
               }
            }
         }
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
      50% {
         cursor: await;
      }
      55% {
         cursor: await;
      }
      60% {
         cursor: await;
      }
      65% {
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
      85% {
         cursor: pointer;
      }
      90% {
         cursor: await;
      }
      95% {
         cursor: url(https://cdn.custom-cursor.com/db/4731/32/arrow2699.png),
            pointer;
      }
      100% {
         cursor: pointer;
      }
   }
   @keyframes glitch-cursor-seta {
      0% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      5% {
         cursor: default;
      }
      10% {
         cursor: wait;
      }
      25% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      30% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      35% {
         cursor: wait;
      }
      40% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      45% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      50% {
         cursor: await;
      }
      55% {
         cursor: await;
      }
      60% {
         cursor: await;
      }
      65% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      70% {
         cursor: default;
      }
      75% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      80% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      85% {
         cursor: default;
      }
      90% {
         cursor: await;
      }
      95% {
         cursor: url(https://cdn.custom-cursor.com/db/4732/32/arrow2699.png),
            default;
      }
      100% {
         cursor: default;
      }
   }
`;
export default GlobalStyle;
