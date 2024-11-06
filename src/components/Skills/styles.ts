import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   width: 100%;
   padding: 10rem 3rem 0;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   position: relative;
   .section-title {
      width: 100%;
      svg {
         fill: rgba(var(--light-green));
         stroke: none;
      }
   }
   .stacks {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, 6rem);
      align-items: center;
      justify-content: center;
      justify-items: stretch;
      align-content: flex-start;
      transition: 0.5s;

      @media (max-width: 1024px) {
         padding-bottom: 4rem;
         min-height: 20rem;
      }
   }

   @media (max-width: 1024px) {
      padding: 8rem 1rem 0;
   }
   @media (max-width: 1024px) {
      padding: 5rem 1rem 0;
   }
`;
