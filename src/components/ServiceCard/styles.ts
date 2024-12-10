import styled from 'styled-components';

export const ServiceCardStyles = styled.div`
   padding: 2rem 1rem;
   height: 100%;
   max-width: 60rem;
   width: fit-content;
   display: flex;
   flex-direction: column;
   position: relative;
   background-color: rgba(var(--light), 0.15);
   border-radius: 1rem;
   cursor: pointer;

   .icon {
      fill: rgba(var(--dark-green));
      stroke-width: 0;
      transition: 0.5s;

      @media (max-width: 7680px) {
         width: 4rem;
         height: 4rem;
      }
   }

   .service {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(var(--light-green));
      margin: 1rem 0 2rem;
      white-space: pre;

      @media (max-width: 7680px) {
         font-size: 1.7rem;
         margin: 5px 0 1rem;
         white-space: pre-wrap;
      }
   }
   .description {
      font-size: 1.6rem;
      color: rgba(var(--light), 0.7);
      @media (max-width: 7680px) {
         font-size: 1.25rem;
      }
   }
   &:hover {
      .icon {
         fill: rgba(var(--light-green));
      }
   }

   @media (max-width: 600px) {
      max-width: none;
   }
`;
