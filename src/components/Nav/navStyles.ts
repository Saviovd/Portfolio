import styled from 'styled-components';

export const NavStyle = styled.nav`
   .nav_list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0;
      gap: 3rem;
   }
   .isVisible {
      margin: 0;
      animation: enterList 0.5s 0.2s forwards;
   }
   .isNotVisible {
      display: block;
      animation: quitMenu 1s 0.2s forwards;
   }

   @keyframes enterList {
      to {
         right: -2.5rem;
      }
   }
   @keyframes quitMenu {
      to {
         right: -100%;
      }
   }
`;
