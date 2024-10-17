import styled from 'styled-components';

export const Tools = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   align-content: flex-start;
   flex-wrap: wrap;
   gap: 3rem;
   padding: 2rem 0 0;
   width: 80%;
   border-top: 1px solid rgba(var(--light-green), .2);

   .stack {
      height: auto;
   }

   @media (max-width: 1380px) {
      width: 96%;
   }

   @media (max-width: 1024px) {
      width: 100%;
      gap: 2rem;
      .stack {
         width: 3rem;
      }
   }
   @media (max-width: 768px) {
      padding: 1rem 0 0;
      .stack {
         width: 2.5rem;
      }
   }
`;
