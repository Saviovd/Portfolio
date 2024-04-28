import styled from 'styled-components';

export const SocialStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   position: absolute;
   right: 0;

   .social {
      width: 90px;
      height: 90px;
   }

   @media screen {
      @media (max-width: 2048px) or (max-height: 1152px) {
         right: 2.5rem;

         .social {
            width: 80px;
            height: 80px;
         }
      }
      @media (max-width: 1728px) or (max-height: 1085px) {
         right: 2rem;

         .social {
            width: 65px;
            height: 65px;
         }
      }
      @media (max-width: 1024px) {
         gap: 1rem;
         right: 0;
         top: 0;
         position: static;
         flex-direction: row;
         transform: translateY(20rem);

         .social {
            width: 60px;
            height: 60px;
         }
      }
      @media (max-height: 930px) {
         transform: translateY(12rem);
      }
      @media (max-height: 800px) {
         transform: translateY(10rem);
      }
      @media (max-width: 768px) {
         top: auto;
         bottom: 10rem;
         .social {
            width: 50px;
            height: 50px;
         }
      }
      @media (max-width: 500px) {
         top: 7rem;
         gap: .8rem;
         .social {
            width: 40px;
            height: 40px;
         }
      }
      @media (max-width: 390px) {
         .social {
            width: 35px;
            height: 35px;
         }
      }
   }
`;
