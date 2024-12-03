import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectsStyle = styled.section`
   width: 100%;
   max-width: 170rem;
   margin: 0 auto;
   padding: 10rem 3rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   overflow: hidden;

   .section-title {
      gap: 1rem;
   }
   .more {
      margin-top: 3rem;
      font-size: 2rem;
   }
   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;

export const ProjectsContainer = styled(motion.ul)`
   width: 100%;
   height: auto;
   margin: 3rem auto 0;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   align-content: flex-start;
   flex-wrap: wrap;
   gap: 2rem 1rem;

   .item {
      height: 100%;
      flex: 1 1 300px;
      min-width: 300px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media (max-width: 1024px) {
         flex: 1 1 250px;
         min-width: 250px;
      }
   }
   @media (max-width: 768px) {
      gap: 2rem;
   }
`;
