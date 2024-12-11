import styled from 'styled-components';

export const CertificationsStyle = styled.div`
   padding: 5rem 3rem 0;
   width: 100%;
   transition: 0.5s;

   .title {
      margin-bottom: 2rem;
      .icon {
         fill: rgba(var(--light-green));
      }
   }
   .sub-title {
      display: flex;
      align-items: center;
      gap: 5px;
      .title {
         font-size: 3rem;
         margin: 0;
         border-bottom: 1px solid rgba(var(--light-green));
      }
      @media (max-width: 768px) {
         .title {
            font-size: 2rem;
         }

         svg {
            width: 2rem;
         }
      }
   }
   .list-box {
      min-height: 20rem;
      transition: 0.5s;
      padding: 2rem 0;
      transition: 0.5s;
      position: relative;

      .list {
         display: flex;
         flex-direction: row;
         align-content: flex-start;
         justify-content: flex-start;
         align-items: flex-start;
         flex-wrap: wrap;
         gap: 1rem;
         transition: 0.5s;

         .graduation {
            width: calc(50% - 1rem);

            @media (max-width: 1024px) {
               max-width: 50rem;
               width: calc(100% - 1rem);
            }
         }

         .course {
            width: calc(32% + 0.45rem);

            @media (max-width: 1024px) {
               width: calc(48% + 0.45rem);
            }
            @media (max-width: 640px) {
               width: calc(98% + 0.45rem);
            }
         }
      }

      @media (max-width: 768px) {
         min-height: 15rem;
      }
   }
   .courses {
      min-height: 27rem;
      padding-bottom: 2rem;

      @media (max-width: 1024px) {
         min-height: 40rem;
      }
      @media (max-width: 640px) {
         min-height: 55rem;
      }
   }

   @media (max-width: 768px) {
      padding: 5rem 1rem 0;
   }
`;
