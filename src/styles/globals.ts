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
      overflow-x: hidden;
      background-color: rgb(var(--dark));
      * {
         color: rgba(var(--light));
         font-family: var(--outfit), sans-serif;
         padding: 0;
         margin: 0;
         box-sizing: border-box;
         transition: 0.5s;

         &::selection {
            background-color: rgba(var(--light-blue));
            color: rgba(var(--light));
         }

         &::-moz-selection {
            background-color: rgba(var(--light-blue));
            color: rgba(var(--light));
         }

         &::-webkit-scrollbar {
            position: absolute;
            width: 4px;
            background-color: transparent;
            transition: 0.5s;
            &:hover {
               width: 6px;
            }
         }

         &::-webkit-scrollbar-track {
            background-color: transparent;
         }

         &::-webkit-scrollbar-thumb {
            background: linear-gradient(rgba(var(--light-blue), 0.4), rgba(var(--light-green), 0.4));
            opacity: 0.2;
            animation: gradient 5s ease alternate infinite;
            border-radius: 5px;
            outline: none;
            transition: 4s;
            &:hover {
               width: 6px;
               background: linear-gradient(rgba(var(--light-blue)), rgba(var(--light-green)));
            }
         }
      }

      body {
         margin: 0 auto;
         padding: 0;
         max-width: 155rem;
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

      }

      .progress-bar {
         position: fixed;
         bottom: 0;
         left: 0;
         right: 0;
         height: 0.5rem;
         background: rgb(var(--light-green));
         transform-origin: 0%;
      }

      #particles canvas {
      z-index: -2;
      opacity: 0.2;
   }
}
`;

export default GlobalStyle;
