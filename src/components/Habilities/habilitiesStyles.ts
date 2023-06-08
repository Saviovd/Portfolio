import styled from 'styled-components';

export const HabilitiesStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto;
   padding: 0 2rem;

   height: calc(100vh - 150px);
   text-align: center;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .habilities_container {
      height: 80%;
      width: 90%;
      justify-self: flex-end;

      display: grid;
      align-items: center;
      justify-content: space-around;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      .habilities_box {
         align-self: center;
         justify-self: center;
         border: 2px solid rgb(var(--first-primary-color));
         width: 45rem;
         height: 7rem;
         box-shadow: 0 0 2px rgb(var(--white-unification)),
            0 0 4px rgb(var(--white-unification)),
            0 0 12px rgb(var(--first-primary-color)),
            0 0 18px rgb(var(--first-primary-color)),
            0 0 24px rgb(var(--first-primary-color)),
            0 0 30px rgb(var(--first-primary-color));
         --webkit-animation: blink 7s infinite alternate;

         border-radius: 5px;

         display: flex;
         flex-wrap: wrap;

         padding: 0 1rem;
         .habilities_title {
            font-size: 2rem;
            letter-spacing: 3px;
            width: 100%;
            height: 2rem;
         }

         .icon {
            width: 64px;
            height: 64px;
            cursor: pointer;
            background: none;
            color: white;
            fill: white;
            stroke: white;
            animation: icon3d 200ms 10;

            &:hover {
               animation: icon3d 200ms forwards;
            }
         }
      }

      .is_Open {
         grid-area: is_Open;

         align-self: center;
         justify-self: center;
         text-align: center;
         margin: auto;
         width: 95%;
         height: 80%;
      }
   }

   .grid_IsOpen {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: 75% auto;
      grid-template-areas:
         'is_Open .'
         'is_Open .'
         'is_Open .';
   }

   /* @keyframes icon3d {
      0% {
         box-shadow: inset 5px 4px rgba(244, 67, 54, 1),
            -5px -6px rgba(33, 150, 243, 1);
      }
      25% {
         box-shadow: inset -5px -6px rgba(244, 67, 54, 1),
            5px 4px rgba(33, 150, 243, 1);
      }
      50% {
         box-shadow: inset 5px -4px rgba(244, 67, 54, 1),
            -8px 4px rgba(33, 150, 243, 1);
      }
      75% {
         box-shadow: inset -8px -4px rgba(244, 67, 54, 1),
            -5px -4px rgba(33, 150, 243, 1);
      }
      100% {
         box-shadow: -5px 0 rgba(244, 67, 54, 1), 5px -4px rgba(33, 150, 243, 1);
         box-shadow: none;
      }
   } */
`;
