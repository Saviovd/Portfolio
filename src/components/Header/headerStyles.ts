import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 3;
   width: 95%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   position: fixed;
   top: 6rem;

   .logo {
      position: absolute;
      left: 6rem;
   }

   .burger_icon {
      cursor: pointer;
      position: absolute;
      right: 3rem;
      top: -2rem;
      font-size: 6rem;
      color: rgb(var(--secondary-white));
      z-index: 9;
      display: none;
   }
   .rotate {
      animation: rotation 400ms forwards;

      @keyframes rotation {
         0% {
            transform: rotate(0deg);
         }
         50% {
            transform: rotate(-360deg);
         }
         100% {
            transform: rotate(0deg);
         }
      }
   }
`;
