import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   max-width: 1700px;
   width: 100%;
   margin: 0 auto;
   padding: 0 2rem;

   display: flex;
   align-items: center;
   justify-content: flex-start;

   position: fixed;
   top: 3rem;
   right: 0%;
   left: 0%;

   background-color: transparent;

   .logo {
      position: absolute;
      left: 2rem;
      top: 2rem;
   }

   .burger_icon {
      position: absolute;
      right: 2rem;
      top: 3rem;
      font-size: 3rem;
      color: #FFF;
      z-index: 9;
   }

   @media screen {
      @media (max-width: 1024px) {
         justify-content: flex-end;
      }
      @media (max-width: 768px) {
         top: 0;
         padding: 0;
         height: 15rem;
      }
   }

`;
