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
   @media screen {
      @media (max-width: 1600px) {
         .nav_list {
            gap: 15px;
         }
      }
      @media (max-width: 1440px) {
         .nav_list {
            gap: 5px;
         }
      }
      @media (max-width: 1024px) {
         .nav_list {
            gap: 0;
         }
      }
      @media (max-width: 820px) {
         .nav_list {
            flex-direction: column;
            width: 70%;
            height: 100vh;
            overflow: hidden;
            z-index: 5;
            background-color: rgba(50, 50, 50, 0.9);
            margin: 0;

            position: absolute;
            right: -100%;
            top: -5rem;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            transition: 0.5s;
         }
      }
   }
`;
