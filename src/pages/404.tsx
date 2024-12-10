import ButtonLink from '@/components/Buttons/ButtonLink';
import i18next from 'i18next';
import styled from 'styled-components';

const ErrorPageStyle = styled.main`
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;
   align-items: center;

   .error {
      background-color: rgb(var(--black));
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen {
         @media (max-width: 550px) {
            flex-direction: column;
         }
      }
      .segment {
         display: flex;
         align-items: center;
         justify-content: center;
         overflow: hidden;
         width: 750px;
         height: 200px;
         transform: translateX(-20rem);
         @media screen {
            @media (max-width: 1024px) {
               width: 500px;
               transform: translateX(-15rem);
            }
            @media (max-width: 550px) {
               width: 30rem;
               height: 12rem;
               transform: translateX(0);
               flex-direction: column;
            }
         }
      }

      .glitch {
         position: relative;
         font-size: 36px;
         line-height: 1;

         @media screen {
            @media (max-width: 1024px) {
               font-size: 2rem;
            }
            @media (max-width: 550px) {
               font-size: 1.5rem;
            }
         }
      }

      .symbol {
         position: absolute;
         top: 0;
         transform: translate(-50%, -50%) scale(3);
         white-space: nowrap;
         letter-spacing: 10px;
         text-indent: 10px;
         animation-name: symbol-move;
         animation-iteration-count: infinite;
         @media screen {
            @media (max-width: 1024px) {
               letter-spacing: 0.5rem;
            }
         }

         &.shallow {
            left: 1px;
            z-index: 2;
            text-shadow: 1px 0 0 rgb(var(--light-green));
            animation-duration: 0.95s;
         }
         &.deep {
            left: 0;
            z-index: 3;
            text-shadow: 1px 0 0 rgb(var(--light-blue));
            mix-blend-mode: darken;
            animation-duration: 1.1s;
            animation-delay: 0.2s;
         }
      }

      .line {
         position: absolute;
         z-index: 4;
         transform: translate(-50%, -50%);
         width: 100vw;
         height: 3px;
         background-color: rgba(var(--light-green));
         animation: line-move 10s ease-out infinite;
      }

      .number {
         transform: translateX(200px);
         @media screen {
            @media (max-width: 1024px) {
               transform: translateX(15rem);
            }
            @media (max-width: 500px) {
               transform: translateX(0);
            }
         }
      }

      .glitch.darken {
         .symbol {
            color: rgba(var(--light));
            background-color: rgb(var(--light-green));
         }

         .line {
            background-color: rgb(var(--dark));
         }
      }

      @keyframes symbol-move {
         10% {
            top: -0.8px;
            left: -2.2px;
         }
         20% {
            top: 0.8px;
            left: -0.4px;
         }
         30% {
            left: 1px;
         }
         40% {
            top: -0.6px;
            left: -1.4px;
         }
         50% {
            left: 0.4px;
         }
         60% {
            top: 3.6px;
            left: -2.4px;
         }
         70% {
            top: -2px;
            left: 0.2px;
         }
         80% {
            top: -0.8px;
            left: -1.8px;
         }
         90% {
            left: 2.4px;
         }
         100% {
            left: -2.4px;
         }
      }

      $symbol-height: 36px * 1 * 3 !default;

      @keyframes line-move {
         0% {
            top: -60px;
         }
         9% {
            top: 25px;
         }
         14% {
            top: -30px;
         }
         18% {
            top: 40px;
         }
         22% {
            top: -25px;
         }
         32% {
            top: 45px;
         }
         34% {
            top: -10px;
         }
         40% {
            top: 35px;
         }
         43% {
            top: -25px;
         }
         99% {
            top: 45px;
         }
         100% {
            top: 60px;
         }
      }
   }

   .errorpage_button {
      margin-top: 10rem;
   }
`;

const NotFound = () => {
   return (
      <>
         <ErrorPageStyle>
            <div className='error'>
               <div className='segment'>
                  <div className='glitch number'>
                     <span className='symbol shallow'>404</span>
                     <span className='symbol deep'>404</span>
                     <span className='line'></span>
                  </div>
               </div>

               <div className='segment' style={{ background: 'black' }}>
                  <div className='glitch darken'>
                     <span className='symbol shallow'>not found</span>
                     <span className='symbol deep'>not found</span>
                     <span className='line'></span>
                  </div>
               </div>
            </div>
            <ButtonLink
               _blank={false}
               content='Back to Home'
               className='errorpage_button'
               url={`/${i18next.language}`}
            />
         </ErrorPageStyle>
      </>
   );
};
export default NotFound;
