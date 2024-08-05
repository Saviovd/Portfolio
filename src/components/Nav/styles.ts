import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavStyle = styled(motion.nav)`
   .nav_list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 1rem 0 0;
      gap: 1.5rem;

      @media (max-width: 1024px) {
         flex-direction: column;
         justify-content: center;
         height: 100vh;
         width: 55vw;
         background-color: rgba(var(--bg-black), 0.95);
         border-left: 2px solid rgba(var(--primary-pink), 0.8);
         position: fixed;
         top: 0;
         right: 0;
         padding: 0;
         margin: 0;
         backdrop-filter: blur(5px);
         -webkit-backdrop-filter: blur(5px);
      }

      @media (max-width: 768px) {
         width: 70vw;
      }
   }

   @keyframes enterList {
      from {
         right: -100%;
      }
      to {
         right: 0;
      }
   }

   @keyframes quitMenu {
      from {
         right: 0%;
      }
      to {
         right: -100%;
      }
   }
`;
