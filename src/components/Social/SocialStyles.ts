import styled from 'styled-components';

export const SocialStyle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   height: 20rem;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: 3rem;
   top: calc(50% - 10rem);

   .social-box {
      background-color: rgba(var(--primary-pink), 0.2);
      border: 1px solid rgba(var(--primary-pink));
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 7rem;
      height: 7rem;
      transition: 0.3s;
      .social-icon {
         font-size: 4.5rem;
         fill: black;
         stroke-width: 1rem;
         stroke: rgba(var(--primary-pink));
      }
      &:hover {
         scale: 1.1;
         background-color: rgba(var(--primary-blue), 0.2);
         border: 1px solid rgba(var(--primary-blue));
         animation: glitch-cursor 1.5s forwards;
         .social-icon {
            fill: rgba(250, 250, 250, 0.9);
            stroke: rgba(var(--primary-blue));
         }
      }

      @media screen {
         @media (max-width: 1024px) {
            width: 6rem;
            height: 6rem;
            .social-icon {
               font-size: 3.6rem;
            }
         }
         @media (max-width: 520px) {
            width: 5rem;
            height: 5rem;
            .social-icon {
               font-size: 3rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         right: 4rem;
      }
      @media (max-width: 680px) {
         position: initial;
         flex-direction: row;
         height: auto;
         width: 20rem;
         margin: 0 auto;
      }
   }

   @media screen {
      @media (max-width: 680px) {
         transform: translateY(4rem);
      }
   }
`;
