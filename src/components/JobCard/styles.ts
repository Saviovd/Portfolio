import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Job = styled.div`
   width: inherit;
   padding: 2rem 1rem;
   border-radius: 1rem;

   transition: 0.5s;
   height: auto;

   .job-details {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      position: relative;
   }

   .plus {
      font-size: 4.5rem;
      margin-right: 2rem;
      transition: 0.6s;
      transition-delay: 0.1s;
      cursor: pointer;

      @media (max-width: 768px) {
         margin-right: 1rem;
      }
      @media (max-width: 600px) {
         margin-right: 5px;
         font-size: 4rem;
      }
      @media (max-width: 500px) {
         font-size: 3rem;
      }
   }
   .close {
      transform: rotate(45deg);
      fill: rgba(var(--light-green));
   }

   .job {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .position {
         font-size: 2rem;
         letter-spacing: 2px;
         transition: 0.5s;
      }
      .emphasys {
         font-size: 3rem;
         color: rgba(var(--light-green));
         margin-bottom: 5px;
      }

      @media (max-width: 768px) {
         .position {
            font-size: 1.9rem;
         }
         .emphasys {
            font-size: 2.8rem;
         }
      }
      @media (max-width: 600px) {
         .position {
            font-size: 1.7rem;
         }
         .emphasys {
            font-size: 2.4rem;
         }
      }
      @media (max-width: 460px) {
         .position {
            font-size: 1.4rem;
         }
         .emphasys {
            font-size: 1.8rem;
         }
      }
   }

   .date {
      position: absolute;
      right: 0;
      font-size: 1.7rem;
      font-weight: 200;
      letter-spacing: 1px;
      display: flex;
      gap: 0.5rem;

      @media (max-width: 768px) {
         font-size: 1.5rem;
      }
      @media (max-width: 600px) {
         font-size: 1.3rem;
         top: -1rem;
      }
      @media (max-width: 500px) {
         font-size: 1rem;
      }
   }

   &:hover {
      background-color: rgba(var(--light), 0.1);

      .plus {
         fill: rgba(var(--light-green));
      }

      .company {
         color: rgba(var(--light-blue));
      }
   }
   @media (max-width: 768px) {
      padding: 2rem 5px 1rem;
   }
   @media (max-width: 500px) {
      padding: 2rem 5px 1rem;
   }
`;

export const MoreJobDetails = styled(motion.div)`
   overflow: hidden;
   width: 100%;

   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 1rem 3rem;

   .title {
      font-size: 2rem;
      font-weight: 500;
      color: rgba(var(--light-blue));
      margin-bottom: 1rem;
      text-align: center;

      @media (max-width: 768px) {
         font-size: 1.75rem;
      }
   }

   .about-position {
      width: 100%;
      background-color: rgba(var(--dark), 0.1);
      padding: 1rem 1rem 0;
      border-radius: 1rem;
      margin-top: 3rem;
      .description {
         padding-left: 1rem;
         font-size: 1.8rem;
         font-weight: 800;
         margin-bottom: 1rem;
         color: rgba(var(--light));
         @media (max-width: 768px) {
            font-size: 1.5rem;
            width: 94%;
         }
         @media (max-width: 500px) {
            font-size: 1.3rem;
         }
      }

      .assignments {
         padding-left: 2rem;
         font-size: 1.6rem;
         letter-spacing: 1px;
         line-height: 2.5rem;
         margin: 1rem 0;
         li {
            padding-left: 1rem;
            .marker {
               color: rgba(var(--light-blue));
            }
         }

         @media (max-width: 768px) {
            font-size: 1.3rem;
            padding-left: 1.5rem;
         }
         @media (max-width: 500px) {
            font-size: 1.2rem;
            line-height: 2rem;

            li {
               padding-left: 0;
            }
         }
      }

      @media (max-width: 768px) {
         margin-top: 0;
         padding: 2rem 0 0;
      }
   }
`;

export const AdditionalInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   .methodology {
      width: fit-content;
      padding: 2px 5px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      text-transform: capitalize;

      svg,
      span {
         color: rgba(var(--light));
         fill: rgba(var(--light-green));
      }
      .kanban {
         font-size: 2rem;
      }
      .scrum {
         font-size: 3rem;
      }

      @media (max-width: 768px) {
         font-size: 1.3rem;

         .kanban {
            font-size: 1.5rem;
         }
         .scrum {
            font-size: 2.2rem;
         }
      }
   }

   .regime {
      font-size: 2rem;
      color: rgba(var(--light));
      font-weight: 500;
      padding: 0 5px;
      letter-spacing: 1px;

      @media (max-width: 768px) {
         font-size: 1.5rem;
      }
   }
`;
