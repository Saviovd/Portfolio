import styled from 'styled-components';

export const GraduationStyles = styled.div`
   padding: 1rem;
   position: relative;
   border-radius: 1rem;

   display: flex;
   background-color: rgba(var(--dark-blue), 0.2);

   .logo {
      object-fit: cover;
      margin-right: 1rem;
      border-radius: 1rem;
   }
   .about-gratuation {
      .course {
         font-size: 2rem;
         white-space: nowrap;
         font-weight: 600;
      }
      .institution {
         font-size: 1.5rem;
         letter-spacing: 1px;
         color: rgba(var(--light-blue));
      }
      .period {
         position: absolute;
         bottom: 1rem;
         display: flex;
         gap: 5px;
         font-size: 2rem;
         letter-spacing: 1px;
      }
   }

   .concluded {
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(var(--dark-green));
      padding: 0.5rem 3rem;
      border-radius: 1rem 0 1rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1px;
   }

   .category {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      color: rgba(var(--light-green));
      font-size: 1.1rem;
   }
`;
