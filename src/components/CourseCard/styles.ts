import styled from 'styled-components';

export const CourseStyles = styled.div`
   position: relative;
   border-radius: 1rem;
   background-color: rgba(var(--light), 0.04);
   padding: 3rem 1rem 1rem;
   height: max-content;
   min-width: 34rem;

   display: flex;
   align-items: flex-start;

   position: relative;

   .logo {
      object-fit: fill;
      border-radius: inherit;
      margin-right: 1rem;
   }

   .about-course {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: center;

      .course-name {
         white-space: wrap;
         font-size: 1.4rem;
         font-weight: 500;
         color: rgba(var(--light-green));
      }
      .institution {
         font-size: 1.3rem;
      }
   }

   .hours {
      position: absolute;
      left: 1rem;
      top: 1rem;
      font-size: 1.3rem;
      font-weight: 800;
      color: rgba(var(--light-green));
   }
   .category {
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 1.1rem;
      text-transform: uppercase;
      color: rgba(var(--light-green));
   }

   .button {
      margin: 1rem 0;
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 5px 1rem;
   }
`;
