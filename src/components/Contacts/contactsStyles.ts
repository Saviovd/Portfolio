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
   .social-media-title {
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin: 8rem 0 2rem;
      color: rgba(var(--light-blue));
   }
   .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 2rem 0;
      width: 100%;
      gap: 2rem;

      .contact_card {
         height: auto;
         cursor: pointer;
         transition: border 0.3s ease;
         z-index: 1;
         display: flex;
         justify-content: center;
         border-radius: 1rem;
         width: 24rem;
         border: 1px solid rgba(var(--light-green), 0.5);

         .contact_item {
            flex-direction: column;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 1rem;

            .icon_box {
               fill: rgba(var(--light-green));
               @media (max-width: 768px) {
                  width: 4rem;
               }
            }

            .name {
               grid-area: name;
               font-size: 1.7rem;
               margin: 0;
               padding: 0.5rem;

               @media (max-width: 768px) {
                  font-size: 1.2rem;
               }
            }

            &::after {
               content: attr(content);
               font-size: 2rem;
               color: rgba(var(--light-green));
               font-weight: 700;
               letter-spacing: 3px;
               background-color: rgba(var(--dark), 0.7);
               backdrop-filter: blur(6px);
               width: 100%;
               height: 100%;
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
               padding: 0;
            }
         }

         &:hover {
            border: 1px solid rgba(var(--light-green));
         }
         @media (max-width: 768px) {
            width: 16rem;
         }
      }
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;
