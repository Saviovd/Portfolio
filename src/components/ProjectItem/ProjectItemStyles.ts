import styled from 'styled-components';

export const Project = styled.div`
   width: 31%;
   display: flex;
   justify-self: flex-start;
   backdrop-filter: blur(5px);
   position: relative;
   cursor: pointer;
   transition: 0.5s;
   border: 1px solid rgba(var(--primary-blue));
   &:hover {
      scale: 1.05;
      border: 1px solid rgba(var(--primary-blue));

      .project-infos {
         background-color: rgba(var(--bg-black), 0.8);
         border-color: rgba(var(--primary-blue));
      }
   }

   .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      bottom: 0;
      background-color: black;
   }

   .project-infos {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: calc(100% - 2rem);
      background-color: rgba(var(--bg-black), 0.5);
      backdrop-filter: blur(2rem);
      border-top: 1px solid rgba(var(--primary-blue), 0.9);
      overflow: hidden;
      padding: 1rem;
      transition: 0.5s;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .project-name {
         font-size: 2.5rem;
         font-weight: 300;
         margin: 0;

         @media screen {
            @media (max-width: 1250px) {
               font-size: 2rem;
            }
         }
      }

      .buttons {
         display: flex;
         width: 100%;
         justify-content: flex-end;
         align-items: flex-end;
         gap: 1rem;
         .project-button {
            height: 100%;
            padding: 0.5rem 1rem;
            gap: 0.5rem;
         }
      }

      @media screen {
         @media (max-width: 768px) {
            background-color: rgba(var(--bg-black), 0.7);
         }
         @media (max-width: 560px) {
            padding: 0.5rem;
            width: calc(100% - 1rem);
         }
      }
   }
   @media screen {
      @media (max-width: 1024px) {
         width: 45%;
      }
      @media (max-width: 900px) {
         width: 48%;
      }
      @media (max-width: 768px) {
         width: 80%;
         margin: 0 auto;
      }
      @media (max-width: 560px) {
         width: 90%;
      }
   }
`;
