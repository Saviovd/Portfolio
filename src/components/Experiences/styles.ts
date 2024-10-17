import styled from 'styled-components';

export const ExperiencesStyles = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   padding: 0 3rem;

   .title {
      margin-bottom: 2rem;
   }

   .experiences {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
