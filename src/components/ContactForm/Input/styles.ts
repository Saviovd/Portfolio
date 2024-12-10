import styled from 'styled-components';

export const InputStyle = styled.label`
   display: flex;
   flex-direction: column;
   gap: 5px;
   font-size: 2rem;
   color: rgba(var(--light-green));
   flex: 1 1 calc(50% - 1rem);
   max-width: calc(50% - 0.5rem);
   position: relative;

   input {
      border-radius: 1rem;
      border: 1px solid rgba(var(--light-green), 0.5);
      padding: 1.5rem 1rem;
      background-color: rgba(var(--light), 0.08);
      outline: none;
      transition: 0.3s;
      font-size: 1.8rem;
      letter-spacing: 1px;

      &:focus {
         border: 1px solid rgba(var(--light-green), 1);
      }
   }

   .error {
      position: absolute;
      color: red;
      top: 100%;
      font-size: 1.4rem;
   }
   .input-error {
      border: 1px solid red;
      &::placeholder {
         color: red;
      }
   }

   @media (max-width: 600px) {
      max-width: none;
      flex: none;
      width: 90%;
      margin: auto;
      font-size: 1.4rem;
      gap: 2px;

      input {
         font-size: 1.4rem;
         padding: 1rem;
      }

      .error {
         font-size: 1.2rem;
      }
   }
`;
