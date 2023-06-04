import styled from 'styled-components';

export const NavStyle = styled.nav`
   max-width: 1200px;
   margin: 0 auto;
   background-color: rgba(var(--second-primary-color), 0.3);

   display: flex;
   align-items: center;
   padding: 0 3rem;
   height: 10rem;

   border-radius: 2px;

   .nav_list {
      display: flex;
      margin: auto;
      padding: 0;
      justify-content: space-evenly;
   }
`;
