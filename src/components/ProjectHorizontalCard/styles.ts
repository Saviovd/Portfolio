import styled from 'styled-components';

export const HorizonntalContainer = styled.div`
   max-width: 32%;
   background-color: rgba(var(--primary-blue), 0.07);
   padding: 1rem 0 0;
   border-radius: 1px;
   transition: 0.3s;
   border: 1px solid rgba(var(--primary-blue), 0.5);
   border-bottom: none;
   cursor: pointer;

   .cover {
      width: 100%;
      height: auto;
      object-fit: contain;
   }

   .languages {
      height: calc(100% - 6rem);
      width: calc(100% - 2.2rem);
      background-color: rgba(var(--bg-black), 0.9);
      position: absolute;
      top: 0;
      left: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: 0.5rem 1rem;
      gap: 1rem;
      flex-wrap: wrap;
      opacity: 0;
      transition: 0.6s;

      image {
         object-fit: contain;
      }
   }

   .project-infos {
      border-radius: 0 0 1px 1px;
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background-color: rgba(var(--primary-blue), 0.2);
      padding: 0 1rem;

      .project-name {
         font-weight: 400;
         letter-spacing: 1px;
         font-size: 1.3rem;
      }

      .project-button {
         padding: 0.7rem 0.5rem;
         gap: 0.4rem;
         font-size: 1rem;
         transition: 0.3s;
         background-color: rgba(var(--primary-blue), 0.5);

         &:hover {
            background-color: rgba(var(--primary-blue), 0.9);
            scale: 1.05;
         }
      }
   }

   &:hover {
      scale: 1.05;
      border-color: rgba(var(--primary-blue), 0.5);

      .languages {
         opacity: 1;
      }
   }

   @media (max-width: 1024px) {
      max-width: 48%;
   }

   @media (max-width: 768px) {
      max-width: 85%;
      margin: 0 auto;

      &:hover {
         scale: 1.03;
      }
   }
   @media (max-width: 40px) {
      max-width: 90%;
   }
`;
