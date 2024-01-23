import styled from 'styled-components';

export const NavStyle = styled.nav`
   .nav_list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0;
      gap: 30px;

      @media screen {
         @media (max-width: 1440px) {
            gap: 5px;
         }
         @media (max-width: 1024px) {
            gap: 0;
         }
         @media (max-width: 768px) {
            flex-direction: column;
            width: 70%;
            height: 100vh;
            overflow: hidden;
            z-index: 5;
            background-color: rgba(50, 50, 50, 0.6);
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
         right: 0;
      }
   }
   @keyframes quitMenu {
      to {
         right: -100%;
      }
   }
`;
