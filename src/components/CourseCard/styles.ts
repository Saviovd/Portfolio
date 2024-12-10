import styled from 'styled-components';

export const CourseStyles = styled.div`
   position: relative;
   border-radius: 1rem;
   background-color: rgba(var(--light), 0.04);
   padding: 3rem 1rem 2rem;
   height: max-content;

   display: flex;
   align-items: flex-start;

   position: relative;

   .logo {
      object-fit: fill;
      border-radius: inherit;
      margin-right: 1rem;

      @media (max-width: 640px) {
         width: 4rem;
         height: 4rem;
      }
   }

   .about-course {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      .course-name {
         white-space: wrap;
         font-size: 1.7rem;
         font-weight: 500;
         color: rgba(var(--light-green));

         @media (max-width: 1140px) {
            font-size: 1.4rem;
         }
         @media (max-width: 640px) {
            font-size: 1rem;
         }
      }
      .institution {
         font-size: 1.5rem;
         margin-top: 5px;
         @media (max-width: 1140px) {
            font-size: 1.2rem;
            margin-top: 3px;
         }
         @media (max-width: 640px) {
            font-size: 0.9rem;
         }
      }
   }

   .hours {
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 1.3rem;
      font-weight: 800;
      color: rgba(var(--light-green));

      @media (max-width: 640px) {
         font-size: 0.9rem;
         top: 5px;
      }
   }
   .category {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 1.1rem;
      text-transform: uppercase;
      color: rgba(var(--light-green));

      @media (max-width: 640px) {
         font-size: 0.9rem;
         top: 5px;
      }
   }

   .button {
      margin: 1rem 0;
      position: absolute;
      bottom: 0;
      right: 1rem;
      padding: 5px 1rem;
      font-size: 1.3rem;

      @media (max-width: 640px) {
            font-size: 0.9rem;
            
         }
   }
   @media (max-width: 640px) {
      padding: 2rem 1rem;
   }
`;
