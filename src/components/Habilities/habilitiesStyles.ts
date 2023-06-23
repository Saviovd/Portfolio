import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1700px;
   margin: 15rem auto 0;

   text-align: center;

   display: flex;
   flex-direction: column;
   align-items: center;

   .stacks {
      width: 70%;
      min-width: 75rem;
      margin-top: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      .habilities_title {
         font-size: 2.2rem;
         letter-spacing: 3px;
         width: 25%;
         margin: 0;
         border-radius: 2px 2px 0 0;
         padding: 1.5rem 0.5rem;
         white-space: nowrap;
         background-color: rgb(var(--primary-blue));
         border-right: 1px solid #000000;
         transition: 1s;
         cursor: pointer;

         @media screen {
            @media (max-width: 1600px) {
               font-size: 2rem;
            }
            @media (max-width: 850px) {
               font-size: 1.6rem;
            }
            @media (max-width: 730px) {
               font-size: 1.2rem;
            }
            @media (max-width: 570px) {
               height: 3rem;
               white-space: normal;
               padding: 0.5rem;
               display: flex;
               align-items: center;
               justify-content: center;
            }
            @media (max-width: 475px) {
               width: 100%;
               font-size: 1rem;
            }
            @media (max-width: 440px) {
               font-size: 0.85rem;
            }
            @media (max-width: 360px) {
               font-size: 0.7rem;
            }
         }
      }

      .is_Open {
         border: 0;
         background-color: rgb(var(--primary-pink));
         box-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 4px #fff,
            0 0 5px rgb(var(--primary-pink)), 0 0 8px rgb(var(--primary-pink)),
            0 0 10px rgb(var(--primary-pink));
         z-index: 2;
      }

      @media screen {
         @media (max-width: 1440px) {
            width: 80%;
         }
         @media (max-width: 850px) {
            min-width: 0;
            width: 90%;
         }
         @media (max-width: 500px) {
            width: 100%;
            z-index: 1;
            margin-top: 1rem;
         }
      }
   }

   .stack_container {
      min-width: 75rem;
      border: 1px solid rgba(var(--primary-pink), 0.3);
      width: 70%;
      height: auto;
      min-height: 22rem;

      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1.5rem 0;
      flex-wrap: wrap;

      border-top: 0;
      .stack {
         margin: 0.5rem 2rem;

         .stack_icon {
            width: 60px;
            height: 60px;
            transition: 1s;
            &:hover {
               transform: scale(1.2);
            }
            @media screen {
               @media (max-width: 850px) {
                  width: 50px;
                  height: 50px;
               }
               @media (max-width: 570px) {
                  width: 40px;
                  height: 40px;
               }
               @media (max-width: 400px) {
                  width: 3.5rem;
                  height: 3.5rem;
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
                  font-size: 1.2rem;
               }
            }
         }

         @media screen {
            @media (max-width: 570px) {
               margin: 0 1rem;
            }
         }
      }

      @media screen {
         @media (max-width: 1440px) {
            width: 80%;
         }
         @media (max-width: 850px) {
            min-width: 0;
            width: 90%;
         }
         @media (max-width: 500px) {
            width: 100%;
         }
      }
   }

   .more_habilities {
      display: flex;
      margin: 6rem 8rem 0 0;
      align-self: flex-end;
      @media screen {
         @media (max-width: 1440px) {
            margin: 4rem 4rem 0 0;
         }
         @media (max-width: 500px) {
            margin: 3rem auto 0 auto;
         }
      }
   }

   @media screen {
      @media (max-width: 850px) {
         padding: 0;
         margin: 14rem auto 0 auto;
      }
      @media (max-width: 500px) {
         width: 92%;
      }
   }
`;
