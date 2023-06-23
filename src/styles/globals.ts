import { createGlobalStyle } from 'styled-components';

const outfit = 'outfit';
const firstPrimaryColor = '49, 156, 234';
const secondPrimaryColor = '173, 22, 184';
const whiteUnification = '255, 255, 255';
const blackBG = '0, 0, 0';
// rgb(241, 4 ,143)
const GlobalStyle = createGlobalStyle`
   :root {
      --outfit: ${outfit};
      --primary-blue: ${firstPrimaryColor};
      --primary-pink: ${secondPrimaryColor};
      --secondary-white: ${whiteUnification};
      --bg-black: ${blackBG};
   }


   html {
      font-size: 10px;
      min-height: 100vh;

      body {
         animation: cursorAnimation 10s infinite ;
         scroll-behavior: smooth;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         max-width: 100vw;
         overflow-x: hidden;

         font-family: var(--outfit);
         background-color: rgb(var(--bg-black));
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
            width: .5rem;
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


`;
export default GlobalStyle;
