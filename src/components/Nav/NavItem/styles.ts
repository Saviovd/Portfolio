import styled from 'styled-components';

export const NavItemStyle = styled.li`
   font-size: 2rem;
   font-weight: 400;
   text-transform: capitalize;
   text-decoration: none;
   white-space: nowrap;
   letter-spacing: 1px;
   cursor: pointer;
   &:hover {
      animation: bug 0.5s forwards;
   }
   .selected-item {
      color: rgba(var(--primary-blue));
      text-shadow: -8px -1px 1px rgba(var(--primary-blue));
      animation: bug 0.5s forwards reverse;

      position: relative;
      height: 100%;
      &::after {
         content: '';
         background-color: rgb(var(--primary-blue));
         height: 0.2rem;
         width: 0%;

         transform: translateY(0.5rem);
         animation: glow 0.4s forwards;

         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
      }
   }
   @keyframes glow {
      to {
         width: 100%;
      }
   }

   @keyframes bug {
      0% {
         text-shadow: none;
      }
      10% {
         text-shadow: -3px -1px 1px rgba(var(--primary-pink));
      }
      15% {
         text-shadow: 2px -1px 1px white;
      }
      25% {
         text-shadow: -3px -1px 1px rgba(var(--primary-blue));
      }
      40% {
         text-shadow: -3px -1px 1px rgba(var(--primary-blue));
      }
      50% {
         text-shadow: -4px -1px 1px rgba(var(--primary-pink));
      }
      75% {
         text-shadow: -3px -1px 1px white;
      }
      95% {
         text-shadow: 6px -1px 1px rgba(var(--primary-pink));
      }
      100% {
         text-shadow: none;
      }
   }
`;
