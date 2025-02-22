import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeaderStyle = styled(motion.header)`
   z-index: 70;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;

   .header-container {
      transition: 0.3s;
      border: 1px solid rgba(var(--light-green), 0.2);
      background-color: rgba(var(--dark-green), 0.05);
      border-radius: 1rem;
      backdrop-filter: blur(0.4rem);
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
         display: flex;
         align-items: center;
         width: 100%;

         @media (max-width: 1024px) {
            justify-content: center;
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
         width: 3.5rem;
         z-index: 10;

         &::before,
         &::after,
         & div {
            background: rgb(var(--light));
            content: '';
            display: block;
            height: 4px;
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
            transform: translateY(6px) rotate(135deg);
         }

         &.active::after {
            transform: translateY(-12px) rotate(-135deg);
         }

         &.active div {
            transform: scale(0);
         }
      }

      @media (max-width: 1024px) {
         border-top: 0 !important;
         border-radius: 0;
         height: 6rem !important;
         margin: 0 auto;
         width: 100%;
         border: 0;
         backdrop-filter: blur(0);
         background-color: transparent;
      }
   }

   .scrolled {
      margin-top: 0;
      border-radius: 0 0 0.5rem 0.5rem;
      width: 100%;
      height: 8rem;
      background-color: rgba(var(--dark), 0.05);

      @media (max-width: 1024px) {
         position: relative;
         backdrop-filter: blur(0.4rem);
         height: 6rem !important;
         &::after {
            content: '';
            height: 2px;
            width: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(var(--light-green), 0.2);
         }
      }
   }

   .bottom {
      position: absolute;
      height: 2px;
      background-color: rgba(var(--light-green), 1);
      z-index: -1;
   }
   .outside {
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      position: absolute;
      top: 0;
      z-index: -1;
   }

   @media (max-width: 1024px) {
      padding: 0;
      height: 7rem;
      background-color: transparent;
   }

   @media (max-width: 768px) {
      height: 5rem;
   }
`;
