import styled from 'styled-components';

export const TestimonialsStyle = styled.section`
   max-width: 155rem;
   margin: 0;
   padding: 10rem 3rem 0;
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   justify-content: flex-end;

   .container {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 4rem 0;

      .swiper {
         width: inherit;
         height: inherit;

         .swiper-pagination-bullet {
            background-color: rgb(var(--light-green));
            border-radius: 50%;
         }
      }
      .swiper-wrapper {
         align-items: center;
      }
      .swiper-pagination-bullet {
         width: 1.8rem;
         height: 1.8rem;
         border-radius: 0;
         border: 1px solid rgba(var(--light-green), 0.5);

         &:hover {
         }
      }

      @media (max-width: 768px) {
         margin: 3rem 0 2rem;
      }
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;
