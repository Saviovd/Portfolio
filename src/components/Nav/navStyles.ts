import styled from 'styled-components';

export const NavStyle = styled.nav`
   max-width: 1200px;
   width: 60%;
   margin: 0 auto;
   background-color: rgba(var(--second-primary-color), 0.3);

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
         @media (max-width: 768px) {
            flex-direction: column;
         }
         @media (max-width: 768px) {
            width: 70%;
            height: 100vh;
            overflow: hidden;
            z-index: 5;
            background-color: rgba(var(--second-primary-color));
            margin: 0;

            position: absolute;
            right: -100%;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            transition: .5s;
         }
      }
   }
   .isVisible {
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
      @media (max-width: 850px) {
         padding-left: 0.5rem;
         width: 80%;
      }
      @media (max-width: 768px) {
         width: 100%;
         height: 100vh;
         overflow: hidden;
         z-index: 3;
         background-color: rgba(var(--white-unification), 0.3);
         left: -100%;
         position: relative;
         z-index: 3;
      }
   }

   @keyframes enterMenu {
      to {
         left: 0;
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
