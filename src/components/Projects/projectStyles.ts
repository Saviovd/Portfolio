import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectsStyle = styled.section`
   width: 100%;
   max-width: 170rem;
   margin: 0 auto;
   margin-top: 13rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-content: center;
   .swiper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding-bottom: 5rem;
      position: relative;
      .swiper-slide {
         width: 100%;
      }
      .swiper-button-prev,
      .swiper-button-next {
         color: white;
         background-color: rgba(var(--primary-pink));
         top: calc(100% - 1.5rem);
         z-index: 11;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 1rem;
         width: 2rem;
         height: 1.8rem;

         &::after {
            font-size: medium;
            font-weight: bold;
         }

         @media screen {
            @media (max-width: 560px) {
               padding: 0.5rem;
               top: calc(100% - 0.5rem);

               &::after {
                  font-size: small;
               }
            }
         }
      }
      .swiper-button-prev {
         left: calc(50% - 16.2rem);
         @media screen {
            @media (max-width: 560px) {
               left: calc(50% - 15.2rem);
            }
         }
      }
      .swiper-button-next {
         right: calc(50% - 16.2rem);
         @media screen {
            @media (max-width: 560px) {
               right: calc(50% - 15.2rem);
            }
         }
      }

      .swiper-pagination {
         width: 24rem;
         height: 3.7rem;
         left: calc(50% - 12rem);
         margin: 0 auto;
         display: flex;
         justify-content: center;
         align-items: center;
         bottom: 0;
         .swiper-pagination-bullet {
            margin: 0;
            transition: 0.5s;
            background-color: rgba(var(--primary-blue));
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0;
            font-weight: 500;
            padding: 0 1rem;
            font-size: 1.3rem;
            height: 100%;
         }
         @media screen {
            @media (max-width: 560px) {
               width: 20rem;
               left: calc(50% - 10rem);
               height: 2.7rem;
            }
         }
      }
      @media screen {
         @media (max-width: 768px) {
            padding: 4rem 0 5rem;
         }
      }
   }
`;

export const ProjectsContainer = styled(motion.div)`
   width: 90%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   align-content: flex-start;
   gap: 5rem 0;
   flex-wrap: wrap;

   @media screen {
      @media (max-width: 1250px) {
         width: 95%;
         gap: 3rem 0;
      }
      @media (max-width: 1024px) {
         width: 85%;
         gap: 2.5rem 0;
      }
   }
`;
