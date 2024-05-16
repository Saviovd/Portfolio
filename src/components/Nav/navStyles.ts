import styled from 'styled-components';

export const NavStyle = styled.nav`
   .nav_list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 1rem 0 0;
      gap: 1rem;

      @media screen {
         @media (max-width: 1820px) {
            padding: 0 4rem;
         }
         @media (max-width: 1440px) {
            gap: 0.2rem;
         }
         @media (max-width: 1300px) {
            gap: 0;
         }
         @media (max-width: 1024px) {
            padding: 0 1rem;
         }
         @media (max-width: 800px) {
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 70vw;
            background-color: rgba(var(--bg-black), .9);
            border-left: 1px solid rgba(var(--secondary-white), 0.8);
            position: absolute;
            top: 0;
            bottom: 0;
            right: -100%;
            padding: 0;
            margin: 0;
         }
      }
   }
   .isVisible {
      animation: enterList 0.4s 0.2s forwards;
   }
   .isNotVisible {
      animation: quitMenu 0.3s forwards;
   }

   @keyframes enterList {
      from {
         right: -100%;
      }
      to {
         right: 0;
      }
   }
   @keyframes quitMenu {
      from {
         right: 0%;
      }
      to {
         right: -100%;
      }
   }
`;
