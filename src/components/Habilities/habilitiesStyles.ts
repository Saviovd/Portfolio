import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1700px;
   margin: 15rem auto 0;
   padding: 0 2rem;

   text-align: center;

   .stacks {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      .stack_box {
         flex-grow: 1;
         display: flex;
         flex-wrap: wrap;
         gap: 1rem;
         position: relative;
         border: 1px solid rgb(var(--primary-pink));
         justify-content: space-evenly;
         .stack_type {
            width: 100%;
            display: flex;
            justify-content: flex-start;

            h3 {
               font-size: 2.5rem;
               letter-spacing: 3px;
               color: rgb(var(--primary-blue));
               margin: 0;

               padding: 0.5rem 2rem 0.5rem;
               font-weight: 400;
               white-space: nowrap;

               background-color: rgba(var(--primary-pink), 0.1);
               border-bottom: 1px solid rgb(var(--primary-pink));
               border-right: 1px solid rgb(var(--primary-pink));

               @media screen {
                  @media (max-width: 768px) {
                     font-size: 2rem;
                  }
                  @media (max-width: 420px) {
                     font-size: 1.8rem;
                     padding: 0.5rem 1rem;
                  }
               }
            }
         }
         .stack {
            flex-basis: 9rem;
            margin: 0 1rem;

            height: 12rem;
            width: 9rem;
            transition: 0.5s;

            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            position: relative;
            .stack_icon {
               width: 50px;
               height: 50px;

               @media screen {
                  @media (max-width: 1440px) {
                     width: 40px;
                     height: 40px;
                  }
                  @media (max-width: 390px) {
                     width: 35px;
                     height: 35px;
                  }
               }
            }
            .stack_name {
               color: rgba(var(--primary-blue), 0.9);
               margin: 0.1rem 0 0 0;
               @media screen {
                  @media (max-width: 850px) {
                     font-size: 1.4rem;
                  }
                  @media (max-width: 475px) {
                     font-size: 1.1rem;
                  }
               }
            }
            &:hover {
               transform: scale(1.1);
            }
            &:before,
            &:after {
               content: '☠☠☠☠';
               position: absolute;
               top: 0;
               left: 0;
               padding: 8px 0;
               width: 100%;
               -webkit-clip: rect(0px, 0px, 0px, 0px);
               clip: rect(0px, 0px, 0px, 0px);
               background: rgb(var(--primary-blue));
               color: black;
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 2rem;
            }
            &:before {
               left: -3px;
               top: -2px;
               text-shadow: 2px 0 rgb(var(--primary-pink));
               box-shadow: 2px 0 rgb(var(--primary-blue));
            }
            &:after {
               left: 2px;
               bottom: -2px;
               text-shadow: -1px 0 rgb(var(--primary-pink));
               box-shadow: -1px 0 rgb(var(--primary-blue));
            }
            &:hover:before {
               animation: glitch-button 1s forwards linear alternate-reverse;
            }
            &:hover:after {
               animation: glitch-button 1.3s forwards linear alternate-reverse;
            }

            @media screen {
               @media (max-width: 1440px) {
                  flex-basis: 7rem;
                  height: 8rem;
                  margin: .5rem 0;
               }
            }
         }

         @media screen {
            @media (max-width: 1440px) {
               gap: 0;
            }
            @media (max-width: 768px) {
               margin: 3.5rem 0 0 0;
            }
            @media (max-width: 400px) {
               margin: 2rem 0 0 0;
            }
         }
      }
      .stack_box:nth-child(1) {
         margin: 0;
      }
   }
   .more_habilities {
      display: flex;
      margin: 6rem 2rem 0 0;
      justify-content: flex-end;
      @media screen {
         @media (max-width: 1440px) {
            margin: 4rem 1rem 0 0;
         }
         @media (max-width: 850px) {
            margin: 4rem 0 0 0;
         }
      }
   }

   @media screen {
      @media (max-width: 850px) {
         padding: 0 2rem;
      }
   }

   @keyframes glitch {
      0% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      5.88235% {
         clip: rect(0px, 600px, 0px, 0px);
      }
      11.76471% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      17.64706% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      23.52941% {
         clip: rect(100px, 600px, 100px, 0px);
      }
      29.41176% {
         clip: rect(0px, 600px, 600px, 0px);
      }
      35.29412% {
         clip: rect(100px, 600px, 0px, 0px);
      }
      41.17647% {
         clip: rect(0px, 600px, 600px, 0px);
      }
      47.05882% {
         clip: rect(100px, 600px, 0px, 0px);
      }
      52.94118% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      58.82353% {
         clip: rect(100px, 450px, 100px, 0px);
      }
      64.70588% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      70.58824% {
         clip: rect(100px, 450px, 100px, 0px);
      }
      76.47059% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      82.35294% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      88.23529% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      94.11765% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      100% {
         clip: rect(0px, 450px, 0px, 0px);
      }
   }
`;
