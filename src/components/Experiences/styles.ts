import styled from 'styled-components';

export const ExperiencesStyles = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 0 3rem;

   .sub-title {
      display: flex;
      align-items: center;
      gap: 5px;
      .title {
         font-size: 3rem;
         margin: 0;
         border-bottom: 1px solid rgba(var(--light-green));
      }
      @media (max-width: 768px) {
         .title {
            font-size: 2rem;
         }

         svg {
            width: 2rem;
         }
      }
   }

   .experiences {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
      .item {
         position: relative;
         padding-bottom: 1rem;
         &::after {
            content: '';
            width: 100%;
            height: 1px;
            background-color: rgba(var(--light), 0.5);
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.5s;
         }
      }
   }

   @media (max-width: 768px) {
      padding: 0 1rem;
   }
`;
