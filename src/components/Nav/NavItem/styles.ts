import styled from 'styled-components';

export const NavItemStyle = styled.li`
   font-size: 1.8rem;
   font-weight: 400;
   text-transform: capitalize;
   text-decoration: none;
   white-space: nowrap;
   letter-spacing: 1px;
   cursor: pointer;
   transition: 0.3s;
   &:hover {
      color: rgb(var(--dark-green));
   }
   .selected-item {
      font-weight: 800;
      position: relative;
      transition: 0.3s;
      height: 100%;
      &::after {
         content: '';
         background-image: linear-gradient(
            to right,
            rgba(var(--light-green), 0.8),
            rgba(var(--light-blue), 0.5)
         );
         height: 2px;
         border-radius: 1px;
         width: 0%;

         transform: translateY(0.5rem);
         animation: glow 0.4s forwards;

         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
      }
   }

   @media (max-width: 1150px) {
      font-size: 1.5rem;
   }
   @keyframes glow {
      to {
         width: 100%;
      }
   }
`;
