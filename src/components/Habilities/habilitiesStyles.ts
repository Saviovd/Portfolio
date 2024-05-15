import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1800px;
   margin: 15rem auto 5rem;
   padding: 0 2rem;

   text-align: center;

   @media screen {
      @media (max-width: 600px) {
         margin: 12.5rem auto 5rem;
      }
   }

   .stacks {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      justify-items: center;
      margin: 5rem auto 2rem;
      max-width: 155rem;

      @media screen {
         @media (max-width: 1440px) {
            margin: 3rem 0;
            padding: 0 0 0 1rem;
         }
         @media (max-width: 1024px) {
            padding: 0;
         }
      }

      .stack_box {
         display: flex;
         justify-content: space-evenly;
         flex-wrap: wrap;
         position: relative;

         .stack {
            margin: 2rem;
            height: 8rem;
            width: 7rem;
            transition: 0.5s;

            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            @media screen {
               @media (max-width: 1440px) {
                  margin: 2.5rem 0 0 3rem;
                  height: 7rem;
                  width: 6rem;
               }
               @media (max-width: 1140px) {
                  margin: 2rem 0 0 2rem;
               }
               @media (max-width: 1024px) {
                  margin: 3rem 1rem 0;
                  height: 10rem;
                  width: 21%;
               }
               @media (max-width: 600px) {
                  margin: 2rem auto 0;
                  height: 10rem;
                  width: 30%;
               }
            }
            &:hover {
               animation: glitch-cursor-seta 800ms forwards;
            }
            .stack_icon {
               object-fit: contain;
               @media screen {
                  @media (max-width: 1024px) {
                     transform: scale(1.5);
                  }
                  @media (max-width: 600px) {
                     transform: scale(1.2);
                  }
                  @media (max-width: 390px) {
                     transform: scale(1);
                  }
               }
            }
            .stack_name {
               font-size: 1rem;
               font-weight: 300;
               color: rgba(var(--primary-blue), 0.9);
               margin: 0.5rem auto 0;
               @media screen {
                  @media (max-width: 1024px) {
                     margin: 1.5rem auto 0;
                     font-size: 1.3rem;
                  }
                  @media (max-width: 600px) {
                     font-size: 1.2rem;
                     margin: 1rem auto 0;
                  }
                  @media (max-width: 390px) {
                     font-size: 1.1rem;
                  }
               }
            }
            &:hover {
               transform: scale(1.5);
            }
            &:before,
            &:after {
               content: '☠_@☠';
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

               @media screen {
                  @media (max-width: 1024px) {
                     width: 40%;
                     transform: translateX(75%);
                  }
                  @media (max-width: 600px) {
                     width: 55%;
                     transform: translateX(40%);
                  }
               }
            }
         }
      }
      .stack_box:nth-child(1) {
         margin: 0;
      }
   }

   .view_area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      max-width: 32rem;
      .view {
         font-family: var(--outfit);
         border: 0;
         background-color: rgb(var(--secondary-white));
         padding: 0.5rem;
         color: rgb(var(--primary-pink));
         font-size: 1.8rem;
         font-weight: 500;
         cursor: pointer;

         display: flex;
         align-items: center;
         justify-content: space-between;
         margin: 0 auto;

         .chevron {
            margin-left: 1rem;
            background-color: rgb(var(--primary-pink));
         }
      }
   }
   .more_habilities {
      display: flex;
      margin: 6rem 4rem 0 0;
      justify-content: flex-end;

      @media screen {
         @media (max-width: 600px) {
            margin: 6rem auto 0;
            justify-content: center;
         }
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
