import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto;
   min-height: 640px;
   padding: 0 2rem;

   height: 72vh;
   text-align: center;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;

   .stacks {
      width: 60%;
      min-width: 75rem;

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
         background-color: rgb(var(--first-primary-color));
         border-right: 1px solid #000000;
         transition: 1s;

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
               font-size: .7rem;
            }
         }
      }

      .is_Open {
         border: 0;
         background-color: rgb(var(--second-primary-color));
         box-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 4px #fff,
            0 0 10px rgb(var(--second-primary-color)),
            0 0 20px rgb(var(--second-primary-color)),
            0 0 30px rgb(var(--second-primary-color));
         z-index: 2;
      }

      @media screen {
         @media (max-width: 850px) {
            min-width: 0;
            width: 90%;
         }
         @media (max-width: 475px) {
            width: 100%;
            z-index: 1;
         }
      }
   }

   .stack_container {
      min-width: 75rem;
      border: 1px solid rgba(var(--second-primary-color), 0.3);
      width: 60%;
      height: 30%;
      min-height: 22rem;
      background-color: rgba(var(--second-primary-color), 0.2);

      display: flex;
      justify-content: flex-start;
      padding: 1.5rem 0;
      flex-wrap: wrap;

      border-top: 0;
      .stack {
         margin: 0 1.5rem;

         img {
            @media screen {
               @media (max-width: 850px) {
                  width: 50px;
                  height: 50px;
               }
               @media (max-width: 475px) {
                  width: 3.5rem;
                  height: 3.5rem;
               }
            }
         }
         .stack_name {
            @media screen {
               @media (max-width: 850px) {
                  font-size: 1.4rem;
               }
               @media (max-width: 475px) {
                  font-size: 1.2rem;
               }
            }
         }
      }

      @media screen {
         @media (max-width: 850px) {
            min-width: 0;
            width: 90%;
         }
         @media (max-width: 475px) {
            grid-area: container;
            width: 100%;
         }
      }
   }

   .more_habilities {
      display: flex;
      justify-content: center;
      margin: 4rem 0 0 4rem;
      grid-area: button;
   }

   @media screen {
      @media (max-width: 1600px) {
         height: 80vh;
      }
      @media (max-width: 1024px) {
         height: 60vh;
      }
      @media (max-width: 850px) {
         padding: 0;
      }
      @media (max-width: 475px) {
         /* display: grid;
         grid-template-areas:
            '. .'
            'title title'
            'stacks container'
            'button button';
         grid-template-columns: 22% 72%;
         grid-template-rows: 20% 20% 50% 10%;
         justify-items: center;
         justify-content: center;
         align-content: center; */
         height: 70vh;
         min-height: 50rem;
         width: 92%;
         margin: 0 auto;
      }
   }
`;
