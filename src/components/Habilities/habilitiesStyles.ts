import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto;
   min-height: 640px;
   padding: 0 2rem;

   height: 72vh;
   text-align: center;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;

   .stacks {
      width: 60%;
      min-width: 75rem;

      display: flex;
      align-items: center;

      .habilities_title {
         font-size: 2.2rem;
         letter-spacing: 3px;
         width: 25%;
         margin: 0;
         border-radius: 2px 2px 0 0;
         padding: 1.5rem 0.5rem;
         white-space: nowrap;
         background-color: rgb(var(--first-primary-color));
         border-right: 1px solid rgb(var(--white-unification));
         transition: 1s;

         @media screen {
            @media (max-width: 1600px) {
               font-size: 2rem;
            }
         }
      }

      .is_Open {
         border-bottom: 0;
         background-color: rgb(var(--second-primary-color));
         box-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 4px #fff,
            0 0 10px rgb(var(--second-primary-color)),
            0 0 20px rgb(var(--second-primary-color)),
            0 0 30px rgb(var(--second-primary-color));
         z-index: 2;
      }
   }

   .stack_container {
      min-width: 75rem;
      border: 1px solid rgba(var(--second-primary-color), 0.3);
      width: 60%;
      height: 30%;
      min-height: 22rem;
      background-color: rgba(var(--second-primary-color), 0.2);

      display: flex;
      justify-content: flex-start;
      padding: 1.5rem 0;
      flex-wrap: wrap;

      border-top: 0;

      .stack {
         margin: 0 1.5rem;
      }
   }

   .grid_IsOpen {
      grid-template-rows: 20% auto;
      grid-template-areas:
         '. . . .'
         'is_Open is_Open is_Open is_Open';
   }

   @media screen {
      @media (max-width: 1600px) {
         height: 80vh;
      }
   }
`;
