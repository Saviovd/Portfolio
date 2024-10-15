import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleStyle = styled(motion.div)`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   margin: 0 auto;

   .title {
      font-size: 4.5rem;
      font-weight: 400;
      margin: 0;
      text-transform: capitalize;

      @media (max-width: 1024px) {
         font-size: 4rem;
      }
      @media (max-width: 768px) {
         font-size: 3rem;
      }
   }
   svg {
      font-size: 3rem;
      fill: rgba(var(--light-green), 0.1);
      stroke: rgba(var(--light-green));
      stroke-width: 1px;

      @media (max-width: 1024px) {
         font-size: 2.5rem;
      }
      @media (max-width: 768px) {
         font-size: 2rem;
      }
   }
`;
