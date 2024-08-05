import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1800px;
   padding: 15rem 0 0;
   text-align: center;

   .section-title {
      gap: 1rem;
   }

   .stacks {
      width: 95%;
      margin: 5rem auto 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      justify-items: center;
      gap: 1rem;
      overflow: hidden;
      .stack {
         width: calc(100% / 10);
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 0.5rem;
         padding: 1rem 1rem 0.5rem;
         border: 1px solid rgba(var(--primary-blue), 0.9);
         border-radius: 3px;
         background-color: rgba(250, 250, 250, 0.25);
         color: rgba(var(--primary-blue));
         overflow: hidden;

         .logo {
            object-fit: contain;
         }

         .name {
            font-size: 1.2rem;
            font-weight: 500;
            letter-spacing: 1px;
            margin: 0;
            white-space: nowrap;
         }
         &:hover {
            animation: glitch-cursor-seta 800ms forwards;
            background-color: rgba(var(--primary-blue), 0.5);
            scale: 1.1;
         }

         @media screen {
            @media (max-width: 660px) {
               width: calc(100% / 6);
            }
            @media (max-width: 420px) {
               width: calc(100% / 6.2);
            }
         }
      }
      @media screen {
         @media (max-width: 768px) {
            width: 92%;
         }
         @media (max-width: 520px) {
            width: 100%;
         }
      }
   }

   .button {
      margin: 3rem auto 0;
      background-color: rgba(var(--primary-blue), 0.2);
      border: 1px solid rgba(var(--primary-blue));
      padding: 0.5rem 1rem;
      border-radius: 1px;
      gap: 0.5rem;

      &:hover {
         background-color: rgba(var(--primary-pink), 0.2);
         border: 1px solid rgba(var(--primary-pink));
         scale: 1.05;
      }
   }
   @media screen {
      @media (max-width: 768px) {
         padding: 13rem 0 0;
         margin-bottom: 2rem;
      }
   }
`;
