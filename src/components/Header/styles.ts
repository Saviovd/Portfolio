import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderStyle = styled(motion.header)`
   z-index: 10;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;

   .header-container {
      transition: 0.3s;
      border: 1px solid rgb(var(--light-green), 0.2);
      background-color: rgba(var(--dark-green), 0.05);
      border-radius: 1rem;
      backdrop-filter: blur(0.8rem);
      position: relative;
      margin: 1rem auto 0;
      max-width: 150rem;
      width: 96%;
      padding: 0 1rem;
      height: 8rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .logo {
         position: absolute;
         left: 2.5rem;
         object-fit: contain;
         transition: 0.3s;

         @media (max-width: 1024px) {
            position: static;
            margin: 0 auto;
            height: 3rem;
            width: 100%;
         }
      }

      .translations {
         position: absolute;
         right: 2.5rem;

         @media (max-width: 1024px) {
            display: flex;
            right: 1rem;
            justify-content: center;
            align-items: center;
         }
      }

      .center {
         cursor: pointer;
         position: absolute;
         left: 1rem;
         right: 2rem;
         width: 4rem;
         z-index: 10;

         &::before,
         &::after,
         & div {
            background: rgb(var(--light));
            content: '';
            display: block;
            height: 5px;
            border-radius: 3px;
            margin: 5px 0;
            transition: 0.5s;
            transition-delay: 0.2s;
         }

         &::before {
            margin-top: 0;
         }

         &::after {
            margin-bottom: 0;
         }

         &.active::before {
            transform: translateY(8px) rotate(135deg);
         }

         &.active::after {
            transform: translateY(-12px) rotate(-135deg);
         }

         &.active div {
            transform: scale(0);
         }
      }

      @media (max-width: 1024px) {
         border: 0 !important;
         background-color: transparent !important;
         height: 6rem !important;
         margin: 0 auto;
         width: 100%;
      }
   }

   .scrolled {
      margin-top: 0;
      border-radius: 0 0 1rem 1rem;
      width: 100%;
      height: 8rem;
      border: 1px solid rgb(var(--light-blue), 0.2);
      background-color: rgba(var(--dark-blue), 0.05);

      @media (max-width: 1024px) {
         border: 0 !important;
         background-color: transparent !important;
         height: 6rem !important;
      }
   }
   .outside {
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      position: absolute;
      top: 0;
      z-index: -1;
   }

   @media screen {
      @media (max-width: 1024px) {
         padding: 0;
         height: 7rem;
         background-color: transparent;
         backdrop-filter: blur(0);
      }
      @media (max-width: 768px) {
         height: 5rem;
      }
   }
`;
