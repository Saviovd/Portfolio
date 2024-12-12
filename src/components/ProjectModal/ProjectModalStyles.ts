import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

export const ModalContainer = styled(motion.div)`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   min-height: 61.5rem;
   background: rgba(0, 0, 0, 0.9);
   display: flex;
   align-items: center;
   justify-content: center;
   overflow: hidden;
   z-index: 100;
`;

export const ModalContent = styled(motion.div)`
   backdrop-filter: blur(1rem);
   border-radius: 1rem;
   position: relative;
   overflow: hidden;
   width: 90%;
   height: 80%;
   background: rgba(var(--light), 0.1);

   display: flex;

   .infos {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .title {
         font-size: 4.5rem;
         font-weight: 700;
         margin: 0;
         letter-spacing: 1px;
         color: rgba(var(--light-green));

         @media (max-width: 1280px) {
            font-size: 4rem;
         }
         @media (max-width: 1024px) {
            font-size: 3.5rem;
            font-weight: 600;
         }
         @media (max-width: 600px) {
            font-size: 3rem;
            font-weight: 500;
         }
         @media (max-width: 390px) {
            font-size: 2.5rem;
            font-weight: 400;
         }
      }
      .description {
         width: 90%;
         font-size: 1.8rem;
         font-weight: 200;
         line-height: 2.5rem;
         letter-spacing: 2px;

         @media (max-width: 1280px) {
            font-size: 1.4rem;
            line-height: 2rem;
         }
         @media (max-width: 600px) {
            font-size: 1.1rem;
            line-height: normal;
            letter-spacing: 1px;
         }
      }

      @media (max-width: 1280px) {
         padding: 1rem;
      }
      @media (max-width: 1024px) {
         gap: 5px;
         padding-bottom: 6rem;
         overflow: scroll;
      }
   }

   @media (max-width: 1024px) {
      flex-direction: column;
      height: 95%;
   }
   @media (max-width: 600px) {
      width: 94%;
      height: auto;
   }
`;

export const CloseButton = styled.button`
   position: absolute;
   top: 1rem;
   right: 1rem;
   background: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   cursor: pointer;
   font-size: 3.5rem;
   transition: 0.5s ease-in-out;
   svg {
      fill: rgba(var(--light-green), 0.9);
      width: 100%;
      height: 100%;
   }

   &:hover {
      svg {
         fill: rgba(var(--light-green));
         scale: 1.05;
      }
   }

   @media (max-width: 1024px) {
      background-color: rgba(var(--dark));
      top: 0;
      right: 0;
      padding: 1rem;
      border-radius: 0 1rem 0 1rem;
   }
   @media (max-width: 600px) {
      font-size: 2rem;
      padding: 0.8rem;
   }
`;

const gradientAnimation = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const ProjectImage = styled(Image)`
   align-self: center;
   justify-self: flex-start;
   object-fit: contain;
   height: 100%;
   width: 40%;
   background-image: linear-gradient(
      to bottom left,
      rgba(var(--light-green), 1),
      rgba(var(--light-blue), 0.5)
   );
   background-size: 200% 200%;
   animation: gradientAnimation 5s ease infinite;
   ${gradientAnimation}

   @media (max-width: 1024px) {
      width: 100%;
      height: fit-content;
      padding: 1.5rem 0;
      background-image: linear-gradient(
         to bottom left,
         rgba(var(--light-blue), 0.5),
         rgba(var(--light-green), 1)
      );
   }
`;

export const FeatureList = styled.ul`
   margin-top: 2rem;
   background-color: rgba(var(--light), 0.03);
   list-style-type: none;
   padding: 1rem;
   border-radius: 1rem;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   align-content: flex-start;
   flex-wrap: wrap;
   gap: 5px;

   .features-title {
      font-size: 2.5rem;
      font-weight: 500;
      letter-spacing: 1px;

      @media (max-width: 1280px) {
         font-size: 2rem;
      }
      @media (max-width: 600px) {
         font-size: 1.6rem;
      }
   }

   @media (max-width: 1280px) {
      margin-top: 1rem;
      gap: 3px;
   }
`;

export const FeatureItem = styled.li`
   font-size: 1.8rem;
   font-weight: 200;
   width: 100%;
   margin-left: 5px;
   color: rgba(var(--light-green));

   &::after {
      content: ',';
   }
   &:nth-last-child(1) {
      &::after {
         content: '.';
      }
   }

   @media (max-width: 1280px) {
      font-size: 1.4rem;
   }
   @media (max-width: 600px) {
      font-size: 1.2rem;
   }
`;

export const StackContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   align-self: center;
   justify-self: flex-start;
   gap: 2.5rem;
   width: 100%;
   @media (max-width: 1280px) {
      gap: 2rem;
   }
   @media (max-width: 600px) {
      gap: 1.5rem;
   }
`;

export const StackItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: auto;
   transition: 0.5s;

   .icon {
      transition: 0.3s ease-in-out;
      fill: rgba(var(--light));
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
         fill: rgba(var(--light-green));
      }
   }
   .next {
      fill: transparent;
      stroke: rgba(var(--light));
      stroke-width: 1px;
      &:hover {
         fill: transparent;
         stroke: rgba(var(--light-green));
      }
   }
   @media (max-width: 1280px) {
      .icon,
      .next {
         width: 3rem;
         height: 3rem;
      }
   }
   @media (max-width: 600px) {
      .icon,
      .next {
         width: 2rem;
         height: 2rem;
      }
   }
`;

export const Buttons = styled.div`
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
   gap: 2rem;
   position: absolute;
   right: 2rem;
   bottom: 2rem;

   .project-button {
      padding: 1rem 2rem 1rem 1rem;
      font-size: 2rem;
      text-transform: capitalize;
      background-color: rgba(var(--light-green), 0.2);
      gap: 5px;

      svg {
         font-size: 2.8rem;
         margin-right: 0.5rem;
      }

      @media (max-width: 1024px) {
         font-size: 1.5rem;
         svg {
            font-size: 2rem;
         }
      }
   }
   @media (max-width: 600px) {
      gap: 1rem;
   }
`;
