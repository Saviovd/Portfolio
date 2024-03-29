import styled from 'styled-components';

export const NavStyle = styled.nav`
   max-width: 90rem;
   width: 60%;
   margin: 0 auto;

   display: flex;
   align-items: center;
   padding: 0 0 0 3rem;
   height: 10rem;

   border-radius: 2px;

   .nav_list {
      display: flex;
      margin: auto;
      padding: 0;
      justify-content: space-evenly;

      @media screen {
         @media (max-width: 1024px) {
            margin-right: 2rem;
         }
         @media (max-width: 768px) {
            flex-direction: column;
            width: 70%;
            height: 100vh;
            overflow: hidden;
            z-index: 5;
            background-color: rgba(0, 0, 0, 0.9);
            margin: 0;

            position: absolute;
            right: -100%;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            transition: 0.5s;
         }
      }
   }
   .isVisible {
      margin: 0;
      animation: enterList 0.5s 0.5s forwards;
   }

   @media screen {
      @media (max-width: 1600px) {
         height: 8rem;
      }
      @media (max-width: 1600px) {
         width: 73%;
      }
      @media (max-width: 1024px) {
         width: 75%;
         height: 7rem;
         margin: 0;
      }
      @media (max-width: 880px) {
         padding-left: 0.5rem;
         width: 80%;
      }
      @media (max-width: 768px) {
         width: 100%;
         height: 100vh;
         overflow: hidden;
         z-index: 3;
         background-color: rgba(var(--primary-pink), 0.1);
         backdrop-filter: blur(2px);
         left: -100%;
         position: relative;
         margin: 0;
         z-index: 3;
      }
   }

   @keyframes enterMenu {
      to {
         left: 0;
         bottom: 0;
         top: 0;
      }
   }

   @keyframes enterList {
      to {
         right: 0;
      }
   }
   @keyframes quitMenu {
      to {
         background-color: transparent;
      }
   }
`;
