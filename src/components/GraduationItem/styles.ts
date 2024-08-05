import styled from 'styled-components';

export const Graduation = styled.div`
   background-color: rgba(var(--primary-blue), 0.3);
   padding: 1rem 2rem 1rem 1rem;
   position: relative;
   width: 90%;
   height: 9rem;
   margin: 0 auto;

   display: flex;

   .logo {
      object-fit: contain;
      margin-right: 1rem;
      @media screen {
         @media (max-width: 480px) {
            width: 6rem;
         }
      }
   }

   .course {
      font-size: 1.5rem;
      font-weight: 400;
   }
   .institution {
      font-size: 1.3rem;
      font-weight: 300;
      letter-spacing: 1px;
      border-bottom: 1px solid rgba(var(--primary-blue));
      width: min-content;
      white-space: nowrap;
   }
   .period {
      font-size: 1.4rem;
      font-weight: 300;
   }
   .category {
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      font-size: 1.5rem;
      background-color: rgba(var(--primary-blue), 1);
      padding: 0.1rem 0.3rem;
      font-weight: 200;
   }
   .concluded {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 1.8rem;
      letter-spacing: 1px;
      background-color: rgba(var(--primary-pink), 1);
      padding: 0.1rem 3rem;
      font-weight: 200;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      svg {
         font-size: 2rem;
      }
   }
   p {
      margin: 0;
   }
`;
