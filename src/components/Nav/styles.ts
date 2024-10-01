import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavStyle = styled(motion.nav)`
   margin: 0 auto;
   z-index: 1;
   .nav_list {
      transition: 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 2.5rem;

      .cv-btn {
         font-size: 1.6rem;

         svg {
            font-size: 2rem;
         }

         @media (max-width: 1150px) {
            font-size: 1.5rem;
            padding: 5px 1rem;
         }
      }

      @media (max-width: 1024px) {
         flex-direction: column;
         justify-content: center;
         height: 100vh;
         width: 55vw;
         background-color: rgba(var(--dark), 0.9);
         backdrop-filter: blur(8px);
         border-left: 2px solid rgba(var(--light-green), 0.8);
         position: fixed;
         top: 0;
         right: 0;
         padding: 0;
         margin: 0;
      }

      @media (max-width: 768px) {
         width: 75%;
      }
   }

   @media (max-width: 1250px) {
      .nav_list {
         gap: 2rem;
      }
   }

   @media (max-width: 1150px) {
      .nav_list {
         gap: 1.5rem;
         backdrop-filter: blur(8px);
      }
   }
`;
