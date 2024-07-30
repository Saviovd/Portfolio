import styled from 'styled-components';

export const HeaderStyle = styled.header`
   z-index: 10;
   width: 100%;
   height: 9rem;
   position: fixed;
   top: 0;
   left: 0;
   padding: 1rem 0;
   backdrop-filter: blur(0.8rem);
   background-color: rgb(var(--primary-pink), 0.1);

   .header-container {
      position: relative;
      margin: 0 auto;
      max-width: 180rem;
      padding: 0 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .logo {
         position: absolute;
         left: 2.5rem;
         height: 70%;
         object-fit: contain;

         @media screen {
            @media (max-width: 1024px) {
               height: 100%;
               top: 2rem;
            }
            @media (max-width: 768px) {
               top: 1rem;
               left: 1rem;
               height: 90%;
            }
         }
      }

      .center {
         cursor: pointer;
         top: 1.5rem;
         right: 2rem;
         position: absolute;
         width: 4rem;

         @media screen {
            @media (max-width: 768px) {
               right: 1.5rem;
               width: 3rem;
            }
         }

         &::before,
         &::after,
         & div {
            background: rgb(var(--secondary-white));
            content: '';
            display: block;
            height: 5px;
            border-radius: 3px;
            margin: 7px 0;
            transition: 0.5s;

            @media screen {
               @media (max-width: 768px) {
                  margin: 4px 0;
                  height: 4px;
               }
            }
         }

         &.active::before {
            transform: translateY(12px) rotate(135deg);
            @media screen {
               @media (max-width: 768px) {
                  transform: translateY(7px) rotate(135deg);
               }
            }
         }

         &.active::after {
            transform: translateY(-12px) rotate(-135deg);
            @media screen {
               @media (max-width: 768px) {
                  transform: translateY(-8px) rotate(-135deg);
               }
            }
         }

         &.active div {
            transform: scale(0);
         }
      }

      .rotate {
         animation: rotation 400ms forwards;

         @keyframes rotation {
            0% {
               transform: rotate(0deg);
            }
            50% {
               transform: rotate(-360deg);
            }
            100% {
               transform: rotate(0deg);
            }
         }
      }

      .progress-bar {
         position: fixed;
         bottom: 0;
         left: 0;
         right: 0;
         height: 0.3rem;
         background: rgb(var(--primary-pink));
         transform-origin: 0%;
      }
   }
   .outside {
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      position: absolute;
      top: 0;
      z-index: -1;
   }

   @media screen {
      @media (max-width: 1024px) {
         padding: 0;
         height: 7rem;
         background-color: transparent;
         backdrop-filter: blur(0);
      }
      @media (max-width: 768px) {
         height: 5rem;
      }
   }
`;
