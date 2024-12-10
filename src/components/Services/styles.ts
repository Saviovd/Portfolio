import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesStyle = styled(motion.div)`
   padding: 10rem 3rem 0;

   .section-title {
      margin-bottom: 1rem;
      width: 100%;
      stroke-width: 0;
      border: 0;

      svg {
         stroke: transparent;
         fill: rgba(var(--light-green));
      }
   }

   .services-container {
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;

export const ServicesPresentation = styled(motion.div)`
   padding: 2rem 0;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   .title {
      font-size: 3rem;
      letter-spacing: 2px;
      font-weight: 600;

      .xp {
         background: linear-gradient(
            100deg,
            rgba(var(--dark-green)),
            rgba(var(--light-blue))
         );
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         font-size: 5rem;
      }
      @media (max-width: 768px) {
         text-align: center;
         font-size: 2rem;

         .xp {
            font-size: 2.8rem;
         }
      }
   }
   .text {
      font-size: 1.6rem;
      color: rgba(var(--light), 0.8);
      padding-left: 1rem;
      max-width: 120rem;
      letter-spacing: 1px;

      @media (max-width: 768px) {
         text-align: center;
         padding: 0;
         font-size: 1.2rem;
      }
   }
   .offer {
      font-size: 2rem;
      margin: 1rem 0;
      letter-spacing: 1px;
      color: rgba(var(--light-green));
      background-color: rgba(var(--light), 0.15);
      border-radius: 1rem;
      padding: 5px;
   }
`;

export const ServicesList = styled(motion.ul)`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;

   .item {
      width: fit-content;
      flex: 1 1 25rem;

      @media (max-width: 1024px) {
         display: flex;
         justify-content: center;
      }
      @media (max-width: 600px) {
         flex: none;
         width: 100%;
         min-width: 30rem;
      }
   }
   @media (max-width: 1024px) {
      justify-content: space-evenly;
   }
`;
