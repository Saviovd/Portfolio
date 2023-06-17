import styled from 'styled-components';

interface IGlitchTextProps {
   glitchText: string;
}

export const NavItemStyle = styled.li<IGlitchTextProps>`
   margin: 0 1.4rem;
   font-size: 2rem;
   font-weight: 700;
   text-transform: uppercase;
   text-decoration: none;
   text-transform: uppercase;
   cursor: pointer;
   z-index: 2;

   position: relative;

   &[data-glitch] {
      content: attr(data-glitch);
   }

   &:before,
   &:after {
      display: block;
      content: '${(props) => props.glitchText}';
      text-transform: uppercase;
      position: absolute;
      top: 0;
      left: 0;
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
      z-index: -1;
   }
   &:hover {
      &:before {
         animation: glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 1;
      }
      &:after {
         animation: glitch 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both 1;
      }
   }
   .selected {
      text-shadow: -8px -1px 1px rgba(var(--first-primary-color));
      animation: bug 0.5s forwards;

      position: relative;
      height: 100%;
      &::after {
         content: '';
         background-color: rgb(var(--first-primary-color));
         height: 0.5rem;
         width: 0%;

         transform: translateY(3.5rem);
         animation: glow 0.4s forwards;

         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;

         @media screen {
            @media (max-width: 1600px) {
               transform: translateY(2.7rem);
            }
            @media (max-width: 1024px) {
               transform: translateY(2.2rem);
            }
            @media (max-width: 768px) {
               transform: translateY(.2rem);
               height: 0.2rem;
               background-color: rgba(var(--second-primary-color), 0.9);
            }
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         font-size: 1.7rem;
      }
      @media (max-width: 1100px) {
         font-size: 1.6rem;
      }
      @media (max-width: 1024px) {
         font-size: 1.4rem;
      }
      @media (max-width: 850px) {
         font-size: 1.3em;
         margin: 0 1rem;
      }
   }
   @keyframes glow {
      to {
         width: 100%;
      }
   }
   @keyframes bug {
      0% {
         text-shadow: -7px -1px 1px rgba(var(--first-primary-color));
      }
      15% {
         text-shadow: 2px -1px 1px rgba(var(--first-primary-color));
      }
      25% {
         text-shadow: -3px -1px 1px rgba(var(--first-primary-color));
      }
      40% {
         text-shadow: -7px -1px 1px rgba(var(--first-primary-color));
      }
      50% {
         text-shadow: -4px -1px 1px rgba(var(--first-primary-color));
      }
      75% {
         text-shadow: -3px -1px 1px rgba(var(--first-primary-color));
      }
      95% {
         text-shadow: 8px -1px 1px rgba(var(--first-primary-color));
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

`;
