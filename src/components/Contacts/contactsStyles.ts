import styled from 'styled-components';

export const ContactStyle = styled.section.attrs({ content: 'text' })`
   max-width: 1700px;
   padding-bottom: 6rem;
   margin: 0 auto;
   margin-top: 15rem;

   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;

   .contact_container {
      display: flex;
      justify-content: space-around;
      width: 100%;

      .contact_card {
         width: 35rem;
         display: grid;
         height: 10rem;
         grid-template-areas:
            'icon type'
            'icon name';
         grid-template-rows: 40% auto;
         grid-template-columns: 33% auto;
         border: 2px solid rgba(var(--primary-blue), 0.5);
         cursor: pointer;
         transition: 0.3s;

         .icon_box {
            grid-area: icon;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 10rem;
            color: white;

            @media screen {
               @media screen and (max-width: 1130px) {
                  width: 7rem;
               }
               @media screen and (max-width: 1024px) {
                  width: 10rem;
               }
               @media screen and (max-width: 400px) {
                  width: 9rem;
               }
            }
         }

         .type {
            grid-area: type;
            font-size: 1.4rem;
            padding-top: 1rem;
            color: rgba(var(--primary-blue));
         }

         .name {
            grid-area: name;
            font-size: 1.7rem;
            margin: 0;
            padding: 0.5rem;

            @media screen {
               @media screen and (max-width: 400px) {
                  font-size: 1.5rem;
               }
            }
         }
         position: relative;
         z-index: 1;
         &:hover {
            border: 2px solid rgba(var(--primary-pink), 0.5);
            transform: scale(1.1);
            &::after {
               transition: 0.4s;
               content: attr(content);
               font-size: 2rem;
               color: rgba(var(--primary-pink));
               font-weight: 700;
               letter-spacing: 3px;

               background-color: rgba(0, 0, 0, 0.7);
               backdrop-filter: blur(6px);

               width: 100%;
               height: 100%;

               display: flex;
               align-items: center;
               justify-content: center;
               position: absolute;
            }
         }
         @media screen {
            @media screen and (max-width: 1130px) {
               width: 30rem;
               grid-template-columns: 25% auto;
            }
            @media screen and (max-width: 1024px) {
               grid-template-columns: 31% auto;
               width: 40rem;
            }
            @media screen and (max-width: 768px) {
               width: 80%;
            }
            @media screen and (max-width: 530px) {
               width: 90%;
            }
            @media screen and (max-width: 420px) {
               width: 100%;
               min-width: 290px;
               height: 9rem;
               grid-template-columns: 32% auto;
            }
         }
      }

      @media screen and (max-width: 1024px) {
         flex-direction: column;
         align-items: center;
         gap: 2rem;
      }
   }

   @media screen and (max-width: 1024px) {
      width: 80%;
   }
   @media screen and (max-width: 768px) {
      margin-top: 6rem;
   }
   @media screen and (max-width: 455px) {
      width: 85%;
   }
`;
