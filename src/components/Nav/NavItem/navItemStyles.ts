import styled from 'styled-components';

interface IGlitchTextProps {
   glitchText: string;
}

export const NavItemStyle = styled.li<IGlitchTextProps>`
   margin: 0 1.4rem;
   font-size: 3rem;
   font-weight: 500;
   text-transform: capitalize;
   text-decoration: none;
   white-space: nowrap;
   z-index: 2;
   position: relative;

   &[data-glitch] {
      content: attr(data-glitch);
   }
   &:hover {
      animation: glitch-cursor 500ms forwards;
   }
   &:before,
   &:after {
      display: none;
      content: '${(props) => props.glitchText}';
      text-transform: capitalize;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      opacity: 0.8;
   }
   &:after {
      color: #f0f;
      z-index: -2;
   }
   &:before {
      color: #0ff;
      z-index: -2;
   }
   &:hover {
      &:before {
         display: block;
         animation: glitch 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 1;
         transform: translateX(-5px);
      }
      &:after {
         display: block;
         animation: glitch 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
            1;
         transform: translateX(5px);
      }
   }
   .selected-item {
      color: rgba(var(--primary-blue));
      text-shadow: -8px -1px 1px rgba(var(--primary-blue));
      animation: bug 0.5s forwards;

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
         text-shadow: -7px -1px 1px rgba(var(--primary-pink));
      }
      15% {
         text-shadow: 2px -1px 1px white;
      }
      25% {
         text-shadow: -3px -1px 1px rgba(var(--primary-blue));
      }
      40% {
         text-shadow: -7px -1px 1px rgba(var(--primary-blue));
      }
      50% {
         text-shadow: -4px -1px 1px rgba(var(--primary-pink));
      }
      75% {
         text-shadow: -3px -1px 1px white;
      }
      95% {
         text-shadow: 8px -1px 1px rgba(var(--primary-pink));
      }
      100% {
         text-shadow: none;
      }
   }
   @keyframes glitch {
      0% {
         transform: translate(0);
      }
      20% {
         transform: translate(-4px, 4px);
      }
      40% {
         transform: translate(-4px, -4px);
      }
      60% {
         transform: translate(4px, 4px);
      }
      80% {
         transform: translate(4px, -4px);
      }
      to {
         transform: translate(0);
      }
   }
   @media screen {
      @media (max-width: 1600px) {
         font-size: 2.2rem;
      }
      @media (max-width: 1440px) {
         font-size: 2rem;
      }
      @media (max-width: 1024px) {
         font-size: 2.2rem;
      }
   }
`;
