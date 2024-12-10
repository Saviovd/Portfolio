import styled from 'styled-components';

export const ContactStyle = styled.section.attrs({ content: 'text' })`
   max-width: 1550px;
   padding: 10rem 3rem 0;

   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   .section-title {
      svg {
         fill: rgba(var(--light-green));
         stroke-width: 0;
         border: 0;
      }
   }
   .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      margin: 4rem 0 0;
      padding-top: 4rem;
      width: 100%;
      gap: 1rem 2rem;
      position: relative;

      .contact_card {
         height: auto;
         cursor: pointer;
         transition: border 0.3s ease;
         z-index: 1;
         display: flex;
         justify-content: center;
         border-radius: 1rem;
         border: 1px solid rgba(var(--light-green), 0.3);
         background-color: rgba(var(--light-green), 0.05);

         .contact_item {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 1rem;
            gap: 2rem;

            .icon_box {
               fill: rgba(var(--light-green));
               @media (max-width: 768px) {
                  width: 3rem;
               }
            }

            .name {
               grid-area: name;
               font-size: 1.7rem;
               margin: 0;

               @media (max-width: 768px) {
                  font-size: 1.2rem;
               }
            }

            &::after {
               content: attr(content);
               font-size: 1.8rem;
               font-weight: 400;
               color: rgba(var(--light-green));
               letter-spacing: 3px;
               background-color: rgba(var(--dark), 0.7);
               backdrop-filter: blur(6px);
               width: calc(100% - 2px);
               height: calc(100% - 2px);
               display: flex;
               align-items: center;
               justify-content: center;
               position: absolute;
               border-radius: 1rem;

               opacity: 0;
               visibility: hidden;
               transform: scale(0.9);
               transition: opacity 0.4s ease, transform 0.4s ease,
                  visibility 0s 0.4s;

               @media (max-width: 768px) {
                  font-size: 1.4rem;
               }
            }

            &:hover {
               &::after {
                  opacity: 1;
                  visibility: visible;
                  transform: scale(1);
                  transition: opacity 0.4s ease, transform 0.4s ease,
                     visibility 0s;
               }
            }

            @media (max-width: 768px) {
               padding: 0 1rem;
               gap: 5px;
            }
         }

         &:hover {
            border: 1px solid rgba(var(--light-green));
         }
         @media (max-width: 768px) {
            padding: 0;
         }
      }

      &::before {
         content: '';
         height: 1px;
         width: 80%;
         background-color: rgba(var(--light-green), .3);
         position: absolute;
         top: 0;
      }
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;
