import styled from 'styled-components';

export const AnimatedCountersStyles = styled.div`
   display: flex;
   margin: 5rem auto;
   .counter-box {
      padding: 1rem 3rem;
      border-right: 1px solid rgba(var(--light-green), 0.5);
      width: fit-content;
      text-align: center;

      .number {
         font-weight: 600;
         letter-spacing: 2px;
         font-size: 3rem;
         color: rgba(var(--light-blue));

         @media (max-width: 1440px) {
            font-size: 2.5rem;
         }
         @media (max-width: 600px) {
            font-size: 2rem;
         }
      }

      .title {
         color: rgba(var(--light), 0.5);
         font-size: 1.3rem;
         text-align: left;
         text-transform: uppercase;
         font-weight: 500;
         letter-spacing: 1px;

         @media (max-width: 1440px) {
            font-size: 1.2rem;
         }
         @media (max-width: 600px) {
            font-size: 1rem;
            text-align: center;
         }
         @media (max-width: 480px) {
            font-size: 0.8rem;
         }
      }

      :nth-last-child(1) {
         border-right: 0;
      }

      @media (max-width: 600px) {
         padding: 1rem 2rem;
      }
      @media (max-width: 480px) {
         padding: 0.5rem 1rem;
      }
   }
   position: relative;
   &::before {
      content: '';
      width: 30rem;
      height: 1px;
      background-color: rgba(var(--light-green), 0.5);
      position: absolute;
      right: 100%;
      top: 50%;
   }
   &::after {
      content: '';
      width: 30rem;
      height: 1px;
      background-color: rgba(var(--light-green), 0.5);
      position: absolute;
      left: 100%;
      top: 50%;
   }

   @media (max-width: 1440px) {
      &::before,
      &::after {
         width: 15rem;
      }
   }
   @media (max-width: 1024px) {
      &::before,
      &::after {
         display: none;
      }
   }
`;
