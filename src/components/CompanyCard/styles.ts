import Link from 'next/link';
import styled from 'styled-components';

export const Company = styled(Link)`
   width: fit-content;
   background-color: rgba(var(--light), 0.05);
   padding: 1px 1rem;
   height: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1rem;
   border-radius: 5px;
   margin-bottom: 5px;
   transition: 0.5s;
   .logo {
      border-radius: 1rem;
      object-fit: contain;

      @media (max-width: 600px) {
         width: 2rem;
      }
   }
   .company-name {
      font-size: 1.5rem;
      color: rgba(var(--light-blue));
      font-weight: 500;

      @media (max-width: 600px) {
         font-size: 1rem;
      }
      @media (max-width: 460px) {
         font-size: 0.9rem;
      }
   }

   @media (max-width: 600px) {
      gap: 5px;
   }

   &:hover {
      background-color: rgba(var(--dark-green), 0.1);
   }
`;
