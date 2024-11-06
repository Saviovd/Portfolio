import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled.div`
   transition: 0.5s;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
   gap: 1rem;
   cursor: pointer;
   .icon {
      border: 1px solid rgb(var(--light-blue), 0.2);
      background-color: rgba(var(--dark-blue), 0.05);
      fill: rgba(var(--light-blue));
      stroke: rgba(var(--dark));
      border-radius: 5px;
      object-fit: contain;
      padding: 5px;
      transition: 0.5s;
   }
   .name {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 200;
      transition: 0.5s;
      white-space: nowrap;
   }

   &:hover {
      .name {
         color: rgba(var(--light-green));
      }
      .icon {
         border: 1px solid rgba(var(--light-green), 0.5);
         border-radius: 1rem;
         background-color: rgba(var(--light-green), 0.1);
         backdrop-filter: blur(10px);
         fill: rgba(var(--light-green));
      }
   }
`;

export const ToolModal = styled(motion.div)`
   position: fixed;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(var(--dark-blue), 0.01);
   backdrop-filter: blur(5px);
   z-index: 10;

   .tool-details {
      overflow: hidden;
      width: 90%;
      max-width: 80rem;
      border: 1px solid rgb(var(--light-green), 0.2);
      background-color: rgba(var(--dark-green), 0.05);
      backdrop-filter: blur(15px);
      border-radius: 1rem;
      padding: 2rem 1rem;

      display: grid;
      grid-template-areas:
         'icon name'
         'icon description';
      grid-template-columns: 14rem auto;

      .icon {
         grid-area: icon;
         fill: rgba(var(--light-green));
         stroke: rgba(var(--dark));
         object-fit: contain;
         justify-self: center;
         align-self: center;

         @media (max-width: 768px) {
            align-self: auto;
            justify-self: auto;
         }
      }

      .name {
         grid-area: name;
         font-size: 2.5rem;
         letter-spacing: 2px;
         font-weight: 400;
         align-self: center;

         @media (max-width: 768px) {
            align-self: auto;
            justify-self: auto;
            font-weight: 800;
         }
      }

      .description {
         grid-area: description;
         font-size: 2rem;
         letter-spacing: 1px;
         align-self: flex-start;
         color: rgb(var(--light), 0.8);

         @media (max-width: 768px) {
            align-self: auto;
            justify-self: auto;
            text-align: center;
            font-size: 1.8rem;
            margin-top: 2rem;
         }
      }

      @media (max-width: 768px) {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         max-width: 30rem;
      }
   }
`;
