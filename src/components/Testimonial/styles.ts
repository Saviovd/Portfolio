import styled from 'styled-components';

export const TestimonialStyle = styled.div`
   width: 75%;
   height: auto;
   margin: 0 auto;
   padding: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid rgb(var(--light-green), 0.2);
   border-radius: 1rem;
   margin-bottom: 4rem;
   .testimonial {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0 auto;
      text-align: left;

      &::before {
         content: '"';
         color: rgb(var(--light-green));
         font-size: 2.5rem;
         margin: 0 0.2rem;
      }
      &::after {
         content: '"';
         color: rgb(var(--light-green));
         font-size: 2.5rem;
         margin: 0 0.2rem;
      }

      @media (max-width: 700px) {
         text-align: center;
         width: 96%;
         font-size: 1.2rem;
         padding-bottom: 1rem;
      }
   }
   .person {
      min-width: 20rem;
      width: 35%;
      border-right: 1px solid rgb(var(--light-green), 0.5);
      padding-right: 2rem;
      margin-right: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .photograph {
         border-radius: 50%;
         object-fit: contain;
         width: 10rem;
         height: 10rem;

         @media (max-width: 700px) {
            width: 8rem;
            height: 8rem;
         }
      }

      .noPhoto {
         width: 10rem;
         height: 10rem;
         padding: 1rem;
         font-size: 10rem;
         fill: rgb(var(--light-green));
         border: 1px solid rgba(var(--light-green), 0.5);
         border-radius: 50%;
         margin: 0;
         @media (max-width: 700px) {
            width: 8rem;
            height: 8rem;
         }
      }

      .name {
         margin: 0;
         font-size: 1.9rem;
         font-weight: 500;
         letter-spacing: 1px;
         @media (max-width: 700px) {
            font-size: 1.6rem;
         }
      }

      .office {
         margin: 0;
         font-size: 1.3rem;
         font-weight: 400;
         white-space: nowrap;
         color: rgba(var(--light-green), 0.75);
         text-overflow: ellipsis;
         overflow-x: hidden;
         width: 100%;
         @media (max-width: 700px) {
            font-size: 1.2rem;
         }
      }

      @media (max-width: 700px) {
         border-right: 0;
         margin-right: 0;
         padding-right: 0;
         border-bottom: 1px solid rgb(var(--light-green), 0.5);
         margin-bottom: 2rem;
         padding-bottom: 2rem;
         width: 90%;
      }
   }
   @media (max-width: 1024px) {
      width: 85%;
   }
   @media (max-width: 880px) {
      width: 90%;
   }
   @media (max-width: 700px) {
      flex-direction: column;
      padding: 1rem;
   }
`;
