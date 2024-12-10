import styled from 'styled-components';

export const Form = styled.form`
   margin-top: 4rem;
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: center;
   gap: 3rem 1rem;

   .select {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 2rem;
      color: rgba(var(--light-green));
      width: calc(50% - 0.5rem);

      @media (max-width: 600px) {
         max-width: none;
         width: 90%;
         margin: auto;
         gap: 2px;
         font-size: 1.4rem;
      }
   }
   .text-area {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 2rem;
      color: rgba(var(--light-green));
      position: relative;
      textarea {
         border-radius: 1rem;
         border: 1px solid rgba(var(--light-green), 0.5);
         padding: 1.5rem 1rem;
         background-color: rgba(var(--light), 0.08);
         outline: none;
         transition: 0.3s;
         font-size: 1.8rem;
         letter-spacing: 1px;
         resize: none;
         height: 15rem;

         &:focus {
            border: 1px solid rgba(var(--light-green), 1);
         }
         @media (max-width: 600px) {
            height: 12rem;
            font-size: 1.4rem;
         }
      }

      .textarea-error {
         border: 1px solid red;
         ::placeholder {
            color: red;
         }
      }
      .error {
         position: absolute;
         color: red;
         top: 100%;
         font-size: 1.4rem;
      }

      @media (max-width: 600px) {
         max-width: none;
         width: 90%;
         margin: auto;
         gap: 2px;
         font-size: 1.4rem;

         .error {
            font-size: 1.2rem;
         }
      }
   }

   .button {
      margin: 0 auto;
      font-size: 2rem;
      padding: 1rem 5rem;

      @media (max-width: 600px) {
         padding: 5px 2rem;
         margin-top: 1rem;
      }
   }

   @media (max-width: 600px) {
      margin-top: 2rem;
      gap: 2rem 0;
   }
`;
