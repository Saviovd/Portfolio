import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectContainer = styled.div`
   position: relative;
   width: 100%;
   font-size: 1.6rem;

   @media (max-width: 600px) {
      font-size: 1.4rem;
   }
`;
interface ISelectorProps {
   isOpen: boolean;
}
export const Selector = styled.div`
   height: 5.5rem;
   background-color: rgba(var(--light), 0.08);
   border: 1px solid rgba(var(--light-green), 0.5);
   color: rgba(var(--light));
   letter-spacing: 1px;
   border-radius: 1rem;
   padding: 1.5rem 1rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-between;
   user-select: none;
   position: relative;
   transition: 0.3s;
   ${({ isOpen }: ISelectorProps) =>
      isOpen &&
      `
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  `}
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;

   &:focus {
      border: 1px solid rgba(var(--light-green), 1);
   }

   @media (max-width: 600px) {
      height: 4rem;
   }
`;

export const Arrow = styled.span`
   font-size: 1.6rem;
   transform: ${({ isOpen }: ISelectorProps) =>
      isOpen ? 'rotate(180deg)' : 'rotate(0)'};
   transition: transform 0.3s ease;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: 1rem;
   svg {
      fill: rgba(var(--light-green), 0.6);
   }
`;

export const Options = styled(motion.div)`
   position: absolute;
   width: 100%;
   background-color: rgba(var(--light), 0.8);
   border: 1px solid rgba(var(--light-green), 1);
   border-radius: 0.6rem;
   margin-top: 0.5rem;
   z-index: 1000;
   max-height: 200px;
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 0rem;
   }
   &::-webkit-scrollbar-track {
      background-color: transparent;
   }
   &::-webkit-scrollbar-thumb {
      background: linear-gradient(
         rgba(var(--light-green), 0.5),
         rgba(var(--light-green), 0.5)
      );
      animation: gradient 5s ease alternate;
      border-radius: 2px;
      outline: 1px solid rgba(var(--light-green));

      @keyframes gradient {
         to {
            background: linear-gradient(
               rgba(var(--light-green), 0.5),
               rgba(var(--light-green), 0.5)
            );
         }
      }
   }
`;

export const Option = styled.div`
   padding: 1rem;
   font-size: 1.5rem;
   background-color: rgba(var(--dark), 0.9);
   color: rgba(var(--light), 1);
   cursor: pointer;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   transition: 0.3s;

   &:hover {
      background-color: rgba(var(--dark));
      color: rgba(var(--light-green), 1);
   }

   @media (max-width: 600px) {
      font-size: 1.3rem;
   }
`;
