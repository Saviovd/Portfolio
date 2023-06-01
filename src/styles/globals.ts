import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      max-width: 100vw;

      font-size: 10px;
      background-color: #000000;
      color: #f1f1f1;

      li {
         list-style-type: none;
      }
      a {
         color: inherit;
         text-decoration: none;
      }
   }
`;
export default GlobalStyle;
