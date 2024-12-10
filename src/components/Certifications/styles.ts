import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CertificationsStyle = styled.div`
   padding: 5rem 3rem 0;
   width: 100%;
   transition: 0.5s;

   .title {
      margin-bottom: 2rem;
      .icon {
         fill: rgba(var(--light-green));
      }
   }
   .list-box {
      min-height: 31rem;
      transition: 0.5s;
      padding: 2rem 0;
      transition: 0.5s;
      position: relative;

      .list {
         display: flex;
         flex-direction: row;
         align-content: flex-start;
         justify-content: flex-start;
         align-items: flex-start;
         flex-wrap: wrap;
         gap: 1rem;
         transition: 0.5s;

         .graduation {
            width: calc(50% - 1rem);

            @media (max-width: 1024px) {
               width: calc(100% - 1rem);
            }
         }

         .course {
            width: calc(32% + 0.45rem);

            @media (max-width: 1024px) {
               width: calc(48% + 0.45rem);
            }
            @media (max-width: 640px) {
               width: calc(98% + 0.45rem);
            }
         }
         @media (max-width: 1024px) {
            padding: 1rem 0;
         }
      }

      @media (max-width: 1024px) {
         min-height: 45rem;
      }
      @media (max-width: 640px) {
         min-height: 60rem;
      }
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;

export const Menu = styled(motion.div)`
   display: flex;
   padding: 1rem;
   gap: 2rem;
   border-bottom: 1px solid rgba(var(--dark-green), 0.1);

   .menu-item {
      font-size: 2rem;
      color: rgba(var(--dark-green));
      letter-spacing: 1px;
      position: relative;
      cursor: pointer;
      transition: 0.5s;

      &::after {
         content: '';
         width: 0;
         height: 2px;
         background-color: rgba(var(--light));
         position: absolute;
         bottom: 0;
         left: 0;
         transition: 0.5s;
      }

      &:hover {
         color: rgba(var(--light-blue));
         &::after {
            width: 25%;
         }
      }

      @media (max-width: 768px) {
         font-size: 1.5rem;
      }
   }
   .active {
      color: rgba(var(--light-green));
      &::after {
         width: 100%;
      }
      &:hover {
         color: rgba(var(--light-green));
         &::after {
            width: 100%;
         }
      }
   }
   @media (max-width: 768px) {
      gap: 1.5rem;
   }
`;
