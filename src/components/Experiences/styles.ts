import styled from 'styled-components';

export const ExperiencesStyles = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 4rem;

   .title {
      width: 100%;
      margin: 1rem 0 2rem ;
      font-size: 2.7rem;
      text-transform: capitalize;
      font-weight: 400;
      letter-spacing: 3px;
      text-align: center;
   }
   .jobs {
      width: 45%;

      @media screen {
         @media (max-width: 1024px) {
            width: 55%;
            min-width: 34rem;
         }
         @media (max-width: 870px) {
            width: 90%;
            max-width: 50rem;
         }
         @media (max-width: 500px) {
            width: 95%;
         }
      }
   }
   .education {
      width: 46%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      gap: 1rem;
      position: relative;
      padding-bottom: 4rem;

      .university {
         width: 100%;
      }

      .courses {
         width: 100%;
         display: flex;
         justify-content: flex-start;
         flex-wrap: wrap;
      }
      .button {
         background-color: rgba(var(--primary-blue), 0.1);
         border: 1px solid rgba(var(--primary-blue));
         font-size: 1.3rem;
         padding: 0.5rem 1rem;
         display: flex;
         align-items: center;
         justify-content: center;
         position: absolute;
         gap: 1rem;
         right: 0;
         bottom: 0;
         transition: 0.6s;

         &:hover {
            scale: 1.08;
            border: 1px solid rgba(var(--primary-pink));
            background-color: rgba(var(--primary-pink), 0.1);
         }
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 40%;
            min-width: 34rem;
         }
         @media (max-width: 870px) {
            width: 90%;
            max-width: 50rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         gap: 2rem;
      }
   }
`;
