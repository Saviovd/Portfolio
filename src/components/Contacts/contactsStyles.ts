import styled from 'styled-components';

export const ContactStyle = styled.section`
   max-width: 1700px;
   padding-bottom: 6rem;
   margin: 0 auto;
   margin-top: 6rem;

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
         background-color: rgba(var(--second-primary-color), 0.5);

         .icon {
            grid-area: icon;
            background-color: rgba(var(--first-primary-color), 0.8);
            padding: 0.5rem;
            width: 10rem;

            @media screen and (max-width: 1440px) {
               width: 8rem;
            }

            @media screen and (max-width: 1024px) {
               width: 11rem;
               height: 12rem;
            }

            @media screen and (max-width: 455px) {
               height: 10rem;
               width: 9rem;
            }
         }

         .type {
            grid-area: type;
            font-size: 1.4rem;
            padding-top: 1rem;
            color: rgba(var(--first-primary-color), 0.6);

            @media screen and (max-width: 1440px) {
               padding-left: 1rem;
            }

            @media screen and (max-width: 1024px) {
               font-size: 1.6rem;
               padding-left: 2rem;
            }

            @media screen and (max-width: 395px) {
               font-size: 1.5rem;
               padding-left: 1.7rem;
            }
         }

         .name {
            grid-area: name;
            font-size: 1.7rem;
            margin: 0;
            padding: 0.5rem;

            @media screen and (max-width: 1440px) {
               font-size: 1.5rem;
               padding: 1rem;
            }

            @media screen and (max-width: 1024px) {
               padding-left: 2rem;
               font-size: 1.8rem;
            }

            @media screen and (max-width: 395px) {
               font-size: 1.6rem;
               padding-left: 1.7rem;
               z-index: 1;
            }
         }

         @media screen and (max-width: 1440px) {
            width: 30rem;
            grid-template-columns: 30% auto;
         }

         @media screen and (max-width: 1024px) {
            width: 55%;
            min-width: 36rem;
            height: 13rem;
         }

         @media screen and (max-width: 455px) {
            width: 100%;
            min-width: 320px;
            height: 11rem;
         }
      }

      @media screen and (max-width: 1024px) {
         flex-direction: column;
         align-items: center;
         gap: 2rem;

         .left {
            align-self: flex-start;
         }

         .right {
            align-self: flex-end;
         }
      }

      @media screen and (max-width: 460px) {
         .left,
         .right {
            align-self: center;
         }
      }
   }

   @media screen and (max-width: 1024px) {
      width: 80%;
   }

   @media screen and (max-width: 455px) {
      width: 85%;
   }
`;
