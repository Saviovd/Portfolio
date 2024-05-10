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
      }
   }
`;
