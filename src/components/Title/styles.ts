import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleStyle = styled(motion.div)`
   display: flex;
   align-items: flex-end;
   justify-content: flex-start;
   padding-left: 6rem;
   border-bottom: 1px solid rgba(var(--primary-blue));
   width: 90vw;
   margin: 0 auto;

   .title {
      font-size: 4.5rem;
      font-weight: 400;
      margin: 0;
      text-transform: capitalize;
   }
   svg {
      font-size: 5.5rem;
      fill: rgba(var(--primary-blue));
      stroke: rgba(var(--primary-blue));
   }
   @media screen {
      @media (max-width: 1024px) {
         padding-left: 1rem;
         width: 95vw;
         .title {
            font-size: 4rem;
         }
         svg {
            font-size: 5rem;
         }
      }
      @media (max-width: 720px) {
         padding-left: 0;
         .title {
            font-size: 3.5rem;
         }
         svg {
            font-size: 4.5rem;
         }
      }
      @media (max-width: 440px) {
         padding-left: 0;
         .title {
            font-size: 3rem;
         }
         svg {
            font-size: 4rem;
         }
      }
   }
`;
