import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeStyle = styled.section`
   height: 100vh;
   max-width: 1550px;
   margin: 0 auto;
   padding: 9rem 2rem 0;
   position: relative;

   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-direction: column;

   .apresentation {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .name {
         font-size: 10rem;
         letter-spacing: 2px;
         font-weight: 600;
         background: linear-gradient(
            100deg,
            rgba(var(--dark-green)),
            rgba(var(--light-blue))
         );
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;

         @media (max-width: 1024px) {
            font-size: 8rem;
         }
         @media (max-width: 640px) {
            font-size: 6rem;
         }
         @media (max-width: 475px) {
            font-size: 4rem;
         }
      }

      .text {
         font-size: 1.5rem;
         font-weight: 300;
         color: rgba(var(--light), 0.6);
         width: 90%;
         max-width: 90rem;
         letter-spacing: 2px;
         line-height: 2rem;
         text-align: center;
         margin-top: 5rem;

         span {
            color: rgba(var(--light-green));
            font-size: 1.7rem;
            font-weight: 600;
         }

         @media (max-width: 768px) {
            font-size: 1.3rem;

            span {
               font-size: 1.5rem;
            }
         }

         @media (max-width: 540px) {
            font-size: 1.1rem;
            letter-spacing: 1px;

            span {
               font-size: 1.3rem;
            }
         }
         @media (max-width: 475px) {
            font-size: 1rem;
            letter-spacing: 0;
            width: 94%;
            line-height: 1.5rem;

            span {
               font-size: 1.2rem;
            }
         }
      }
   }

   @media (max-width: 1024px) {
      padding-top: 0;
   }
`;

export const DrippingDown = styled(motion.div)`
   width: 12rem;
   height: 5rem;
   position: absolute;
   right: calc(50% - 6rem);
   bottom: 3rem;
   border: 1px solid rgba(var(--dark-blue), 0.2);
   background-color: rgba(var(--dark-blue), 0.05);
   border-radius: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.4s;
   cursor: pointer;
   animation: pulse 2s infinite;

   svg {
      transition: 0.4s;
      font-size: 4rem;
      fill: rgba(var(--dark-blue));
      stroke: none;
   }

   &:hover {
      border: 1px solid rgba(var(--light-green), 0.2);
      background-color: rgba(var(--light-green), 0.05);
      transform: scale(1.1);

      svg {
         fill: rgba(var(--light-green));
      }
   }

   @media (max-width: 768px) {
      width: 8rem;
      height: 3rem;
      right: calc(50% - 4rem);
      svg {
         font-size: 2rem;
      }
   }

   @keyframes pulse {
      0% {
         transform: scale(1);
      }
      50% {
         transform: scale(1.05);
      }
      100% {
         transform: scale(1);
      }
   }
`;
