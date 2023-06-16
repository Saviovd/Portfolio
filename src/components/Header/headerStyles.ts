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

      @media screen {
         @media (max-width: 768px) {
            top: 2rem;
         }
      }
   }

   .burger_icon {
      cursor: pointer;
      position: absolute;
      right: 2rem;
      top: 3rem;
      font-size: 3rem;
      color: #fff;
      z-index: 9;
      display: none;

      @media screen {
         @media (max-width: 768px) {
            display: initial;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         justify-content: flex-end;
         top: 0;
      }
      @media (max-width: 768px) {
         padding: 0;
         height: 11rem;
      }
   }
`;
