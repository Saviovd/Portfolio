import { createGlobalStyle } from 'styled-components';

const outfit = 'outfit';
const firstPrimaryColor = '43, 157, 222';
const secondPrimaryColor = '43, 32, 106';
const whiteUnification = '255, 255, 255';
const blackBG = '0, 0, 0';
// rgb(241, 4 ,143)
const GlobalStyle = createGlobalStyle`
   :root {
      --outfit: ${outfit};
      --first-primary-color: ${firstPrimaryColor};
      --second-primary-color: ${secondPrimaryColor};
      --white-unification: ${whiteUnification};
      --bg-black: ${blackBG};
   }


   html {

      font-size: 10px;
      min-height: 100vh;

      body {
         scroll-behavior: smooth;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         max-width: 100vw;

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
      }
   }
`;
export default GlobalStyle;
