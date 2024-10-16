import styled from 'styled-components';

export const AboutStyle = styled.section`
   max-width: inherit;
   margin: 0 auto;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   align-content: flex-start;
   flex-direction: column;
   overflow: hidden;
   min-height: 100vh;

   position: relative;
`;

export const AboutContent = styled.div`
   padding: 10rem 3rem 1rem;
   background-image: linear-gradient(
      to bottom,
      rgba(var(--light-green), 0.1),
      rgba(var(--dark), 0.01)
   );
   border-top: 0;
   border-radius: 0 1rem 1rem 1rem;
   display: flex;
   flex-wrap: wrap;
   gap: 2rem 3rem;
   align-items: flex-start;
   justify-content: flex-start;

   .section-title {
      margin-bottom: 1rem;
      width: 100%;
   }

   .about-box {
      width: calc(50% - 1.5rem);
      padding: 1rem;
      border-radius: 1rem;

      .title {
         font-weight: 500;
         letter-spacing: 2px;
         font-size: 2.5rem;
         margin-bottom: 1rem;
      }

      .text {
         font-size: 1.5rem;
         letter-spacing: 1px;
         width: 100%;
         font-weight: 300;
         line-height: 2.5rem;

         @media (max-width: 768px) {
            font-size: 1.2rem;
            line-height: 1.6rem;
         }
      }

      @media (max-width: 1024px) {
         width: 100%;
         text-align: center;
         margin: 0 auto;
      }
   }
   .who-am-i {
      background-color: rgba(var(--dark-green), 0.9);
      padding: 3rem 1rem;
   }

   @media (max-width: 1024px) {
      padding: 9rem 3rem 1rem;
      gap: 2rem;
   }
   @media (max-width: 768px) {
      padding: 9rem 1rem 1rem;
   }
`;
