import styled from 'styled-components';

export const SocialStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   position: absolute;
   right: 4rem;
   top: 46%;

   @media screen {
      @media (max-width: 1024px) {
         top: 6rem;
         position: relative;
         flex-direction: row;
         width: 100%;
         right: 0;
         align-items: center;
         justify-content: center;
      }
   }

   .social {
      width: 70px;
      height: 70px;

      @media screen {
         @media (max-width: 1440px) {
            width: 60px;
            height: 60px;
         }
         @media (max-width: 510px) {
            width: 50px;
            height: 50px;
         }
      }
   }
`;
