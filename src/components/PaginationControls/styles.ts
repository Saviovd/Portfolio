import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PaginationControlsStyles = styled(motion.div)`
   width: 20rem;
   position: absolute;
   bottom: 0;
   left: calc(50% - 10rem);

   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   * {
      transition: 0.8s;
   }

   .previous,
   .next {
      border: 0;
      padding: 5px 1rem;
      font-size: 1.3rem;
      border-radius: 1rem;
      cursor: pointer;
      background-color: rgba(var(--light-blue));

      :disabled {
         background-color: rgba(var(--dark-blue));
         cursor: default;
      }
   }
   .pages {
      display: flex;
      gap: 5px;
      align-items: center;
      color: rgba(var(--light-blue));
      font-weight: 800;
      font-size: 1.5rem;
      .current,
      .total {
         font-size: 1.5rem;
         width: 15px;
         text-align: center;
      }
      .current {
         font-size: 2rem;
      }
   }
`;
