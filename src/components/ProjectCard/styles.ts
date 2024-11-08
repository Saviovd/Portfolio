import styled from 'styled-components';

export const HorizonntalContainer = styled.div`
   background-color: rgba(var(--light), 0.15);
   padding: 5px;
   border-radius: 1rem;
   transition: 0.5s;
   cursor: pointer;
   position: relative;
   transition: 0.5s;

   .cover {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 1rem;
      border: 1px solid;
      transition: .5s;
   }

   .infos {
      border-radius: 0 0 1px 1px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      position: relative;
      padding: 0 0 5px 5px;

      .name {
         margin: 2rem 0 1rem;
         font-size: 2rem;
         font-weight: 600;
         letter-spacing: 2px;
         width: 100%;
         color: rgba(var(--light));

         @media (max-width: 1024px) {
            margin: 1rem 0;
            font-size: 1.8rem;
         }
      }

      .description {
         font-size: 1.4rem;
         padding-right: 1rem;
         color: rgba(var(--light), 0.8);
         font-weight: 300;
         letter-spacing: 1px;
         overflow: hidden;
         height: 3.5rem;
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 2;
         text-overflow: ellipsis;
      }

      .button {
         position: absolute;
         gap: 0.4rem;
         font-size: 3rem;
         height: 5rem;
         width: 5rem;
         justify-content: center;
         padding: 0;
         top: -3rem;
         right: 2rem;
         border-radius: 50%;
         transition: 0.5s;
         svg {
            transition: 0.5s;
         }

         @media (max-width: 1024px) {
            right: 1rem;
            top: -2.5rem;
            font-size: 2.5rem;
            height: 4rem;
            width: 4rem;
         }
      }
      .open-modal {
         background-image: none;
         background-color: rgba(var(--light-blue));
         border-radius: 1rem;
         svg {
            transform: rotate(45deg);
         }
      }
   }

   &:hover {
      background-color: rgba(var(--light), 0.1);
      backdrop-filter: blur(1rem);
      .cover {
         border-color: rgba(var(--light-green), 0.4);
      }

      .name {
         color: rgba(var(--light-green));
      }
      .infos {
         .button {
            background-color: rgba(var(--light-blue), 0.9);
         }
      }
   }
`;
