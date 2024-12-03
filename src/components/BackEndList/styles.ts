import styled from 'styled-components';

export const BackEndContainer = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: flex-start;
   background-color: rgba(var(--light), 0.03);
   padding: 1rem;
   border-radius: 1rem;

   .service-title {
      letter-spacing: 2px;
      font-size: 2.5rem;
      font-weight: 500;
      letter-spacing: 1px;
      margin-bottom: 1rem;

      @media (max-width: 1280px) {
         font-size: 2rem;
      }
      @media (max-width: 600px) {
         font-size: 1.6rem;
      }
   }

   .service-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      .service {
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
         background-color: rgba(var(--light-green), 0.05);
         border-radius: 5px;
         padding: 5px 1rem;
         gap: 5px;
         position: relative;
         transition: 0.3s;
         .service-name {
            font-size: 2rem;
            font-weight: 300;
            @media (max-width: 600px) {
               font-size: 1.5rem;
            }
         }
         .service-description {
            height: 100%;
            font-size: 1.7rem;
            color: rgba(var(--light-green), 0.7);
            padding-left: 1rem;

            @media (max-width: 600px) {
               font-size: 1.2rem;
            }
         }
         .service-icon {
            position: absolute;
            right: 5px;
            font-size: 1.5rem;
            transition: 0.3s;
            @media (max-width: 600px) {
               font-size: 1.3rem;
            }
         }
         &:hover {
            background-color: rgba(var(--light-green), 0.08);
            .service-icon {
               fill: rgba(var(--light-green));
               stroke: rgba(var(--light-green));
               scale: 1.1;
            }
         }
         @media (max-width: 600px) {
            padding: 3px 6px;
         }
      }
   }
`;
