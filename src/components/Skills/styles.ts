import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   padding: 10rem 1rem 0;
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
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      height: auto;
      transition: 0.5s;

      .stack {
         min-width: 13rem;
         margin-right: 1rem;
         margin-bottom: 1rem;
      }

      @media (max-width: 1024px) {
         padding-bottom: 5rem;
         min-height: 30rem;
      }
      @media (max-width: 390px) {
         justify-content: space-evenly;
      }
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;
