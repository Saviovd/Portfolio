import { ProjectServices } from '@/types/project';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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

export const ModalContent = styled(motion.div)<{ services: ProjectServices[] }>`
   background: rgba(var(--bg-black), 0.7);
   border: 1px solid rgba(var(--primary-blue));
   backdrop-filter: blur(2rem);
   padding: 2rem;
   border-radius: 0.3rem;
   position: relative;
   width: 75%;
   max-width: 95rem;
   height: 75%;
   min-height: 47.5rem;
   max-height: 55rem;
   overflow: hidden;

   display: grid;
   grid-template-areas:
      'title title'
      'description description'
      'stacks features'
      'image services'
      'image buttons';
   grid-template-columns: 4fr 1fr;
   grid-template-rows: 5.5rem auto auto 25rem 5rem;

   .title {
      grid-area: title;
      font-size: 4rem;
      margin: 0;
      letter-spacing: 1px;
      color: rgba(var(--primary-blue));

      @media screen {
         @media (max-width: 1024px) {
            font-size: 3rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1300px) {
         width: 85%;
      }
      @media (max-width: 1024px) {
         width: 90%;
         grid-template-areas: ${(props) =>
            props.services
               ? `
               'title title'
               'description description'
               'stacks stacks'
               'image image'
               'services features'
               'buttons buttons'`
               : `
               'title title'
               'description description'
               'stacks stacks'
               'image image'
               'features features'
               'buttons buttons'
         `};
         max-height: none;
         grid-template-rows: auto;
         grid-template-columns: 1fr 1fr;
         grid-template-rows: 4rem auto auto 30rem auto 5rem;
         padding: 2rem 1rem;
         width: 60rem;
         max-height: 75rem;
         position: fixed;
         position: absolute;
      }
      @media (max-width: 700px) {
         width: 90%;
         grid-template-rows: 4rem auto auto auto auto 4rem;
         padding: 1rem .7rem;
      }
      @media (max-width: 370px) {
         width: 92%;
      }
   }
`;

export const CloseButton = styled.button`
   position: absolute;
   top: 1rem;
   right: 0.5rem;
   background: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   cursor: pointer;
   font-size: 3.5rem;
   transition: 0.5s ease-in-out;
   svg {
      fill: rgba(var(--primary-blue), 0.9);
      width: 100%;
      height: 100%;
   }

   &:hover {
      svg {
         fill: rgba(var(--primary-blue));
         scale: 1.05;
      }
   }
`;

export const ProjectImage = styled(Image)`
   grid-area: image;
   height: auto;
   width: 100%;
   max-width: 900px;
   align-self: center;
   justify-self: flex-start;
   object-fit: contain;
   border-radius: 0.5rem;

   @media screen {
      @media (max-width: 1024px) {
         width: 100%;
         margin: 0 auto;
      }
   }
`;

export const Description = styled.p`
   grid-area: description;
   margin: 0 0 0 0.5rem;
   font-size: 1.7rem;
   font-weight: 200;
   width: 95%;
   height: auto;
   @media screen {
      @media (max-width: 1024px) {
         font-size: 1.5rem;
      }
      @media (max-width: 700px) {
         font-size: 1.3rem;
         width: 100%;
      }
   }
`;

export const FeatureList = styled.ul`
   grid-area: features;
   list-style-type: disc;
   padding: 0;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   align-content: flex-start;
   flex-wrap: wrap;
   gap: 0 0.8rem;
   margin: 0 0 0 2rem;

   .features-title {
      transform: translateX(-2rem);
      font-size: 2rem;
      font-weight: 400;
      margin: 0;
      width: 100%;
      color: rgba(var(--primary-blue));
      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.8rem;
         }
         @media (max-width: 700px) {
            font-size: 1.6rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1024px) {
         margin-top: 1rem;
      }
      @media (max-width: 700px) {
         transform: translateX(2rem);
         width: 90%;
         margin: 0;
      }
   }
`;

export const FeatureItem = styled.li`
   font-size: 1.5rem;
   font-weight: 200;
   width: 100%;
   list-style-type: circle;

   &::marker {
      color: rgba(var(--primary-blue));
   }
   &::after {
      content: ',';
   }
   &:nth-last-child(1) {
      margin: 0;
      &::after {
         content: '.';
      }
   }
   @media screen {
      @media (max-width: 700px) {
         font-size: 1.3rem;
      }
   }
`;

export const StackContainer = styled.div`
   grid-area: stacks;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   align-self: flex-start;
   justify-self: flex-start;
   flex-wrap: wrap;
   gap: 0;
   width: 100%;
`;

export const StackItem = styled.div<{
   background: boolean;
   rounded: boolean;
   padding: boolean;
}>`
   display: flex;
   align-items: center;
   justify-content: center;
   height: auto;
   background-color: ${({ background }) =>
      background ? 'white' : 'transparent'};
   border-radius: ${({ rounded }) => (rounded ? '50%' : '0')};
   padding: ${({ padding }) => (padding ? '0.3rem' : '0')};
   transition: 0.5s;
   scale: 0.5;

   .stack-logo {
      width: 100%;
   }

   &:hover {
      scale: 1;
   }

   @media (max-width: 700px) {
      scale: 0.6;
      margin: 0 auto;
      &:hover {
         scale: 0.8;
      }
   }
`;

export const StackImage = styled(Image)`
   object-fit: contain;
   max-width: 12rem;
   max-height: 6rem;
`;

export const BackEndContainer = styled.div`
   grid-area: services;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: flex-start;

   .services-title {
      margin: 0;
      text-align: left;
      font-size: 2rem;
      font-weight: 400;
      color: rgba(var(--primary-blue));
      margin-bottom: 0.5rem;
      @media screen {
         @media (max-width: 1024px) {
            font-size: 1.8rem;
         }
         @media (max-width: 700px) {
            font-size: 1.6rem;
         }
      }
   }
   @media screen {
      @media (max-width: 1024px) {
         margin: 1rem 0 0 1rem;
      }
      @media (max-width: 700px) {
         margin: 0 0 0 1rem;
      }
   }
`;

export const ServiceCard = styled(Link)`
   font-size: 1.5rem;
   padding: 0 0 0.5rem;

   .service-name {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 1px;
      background-color: rgba(var(--primary-blue), 0.8);
      padding-left: 0.5rem;
   }
   .service-description {
      margin: 0;
      font-weight: 200;
   }

   &:hover {
      background-color: rgba(var(--primary-blue), 0.5);
   }

   @media screen {
      @media (max-width: 700px) {
         .service-name {
            font-size: 1.4rem;
         }
         font-size: 1.2rem;
      }
   }
`;

export const Buttons = styled.div`
   grid-area: buttons;
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
   gap: 2rem;

   .project-button {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;

      svg {
         font-size: 2rem;
         margin-right: 0.5rem;
      }

      &:hover {
         scale: 1.05;
      }
   }

   @media screen {
      @media (max-width: 700px) {
         justify-content: center;
         gap: 1rem;
         .project-button {
            padding: 0.5rem 1rem;
            font-size: 1.1rem;
         }
      }
   }
`;
