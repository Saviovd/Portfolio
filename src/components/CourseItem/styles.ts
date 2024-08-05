import styled from 'styled-components';

export const Course = styled.div`
   height: calc(6rem + 2px);
   max-width: 40rem;
   width: 90%;
   margin: 0 auto;
   position: relative;
   display: flex;
   border: 1px solid rgba(var(--primary-blue), 1);
   border-radius: 2px;
   padding: 0.3rem;
   margin-bottom: 1rem;

   .category {
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      background-color: rgba(var(--primary-pink), 1);
      padding: 0.3rem;

      @media screen {
         @media (max-width: 480px) {
            bottom: 1rem;
            top: auto;
         }
      }
   }
   .logo {
      object-fit: contain;
      margin-right: 1rem;
      @media screen {
         @media (max-width: 480px) {
            width: 5.5rem;
            align-self: center;
         }
      }
   }
   .about-course {
      .course-name {
         font-size: 1.5rem;
         padding-top: 0.2rem;
         font-weight: 300;
      }
      .institution {
         font-size: 1.3rem;
         font-weight: 200;
         letter-spacing: 1px;
         border-bottom: 1px solid rgba(var(--primary-blue), 1);
         width: min-content;
      }
      .hours {
         grid-area: hours;
         font-size: 1.5rem;
         background-color: rgba(var(--primary-blue), 1);
         font-weight: 500;
         display: flex;
         justify-content: center;
         align-items: center;

         position: absolute;
         left: 0;
         bottom: 0;
         padding: 0.2rem 1.5rem;
         border-radius: 1px;
         @media (max-width: 480px) {
            font-size: 1.3rem;
         }
      }
      p {
         margin: 0;
      }
   }
   &:nth-last-child(1) {
      margin-bottom: 0;
   }

   @media screen {
      @media (max-width: 440px) {
         width: 95%;
      }
   }
`;
