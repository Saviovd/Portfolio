import styled from 'styled-components';

export const CertificationsStyle = styled.main`
   text-align: center;
   padding: 1rem 2rem;
   max-width: 1600px;
   margin: 0 auto;

   .back {
      width: 100%;
      margin: 5rem auto 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .button {
         width: 10rem;
         background-color: rgba(var(--primary-pink), 0.6);
      }
      .langs {
         margin: 0;
         height: 2rem;
         font-size: 1.8rem;
         color: white;
         background-color: transparent;
         padding-right: 2rem;
      }

      @media screen {
         @media (max-width: 1200px) {
         }
      }
   }

   .container {
      background-color: rgba(var(--primary-blue), 0.15);
      padding: 1rem 2rem 0;
      width: 85%;
      margin: 0 auto 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
   }

   .graduate_box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1rem;

      .graduate {
         width: 30rem;
         height: 40rem;
         margin: 2rem 0;
         padding: 1rem 1rem 0;
         border: 1px solid rgb(var(--primary-blue));
         background-color: rgba(var(--bg-black), 0.3);
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         .logo {
            object-fit: contain;
            width: 80%;
            padding: 0 0.5rem;
         }
         .course {
            margin: 1.8rem auto 0.1rem;
            font-size: 1.55rem;
            font-weight: 700;
            color: rgba(var(--primary-blue));
            width: 95%;
         }
         .university {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 400;
            color: rgba(var(--primary-pink), 0.8);
         }
         .date {
            font-size: 1.6rem;
            transform: translateY(2rem);
            color: rgba(var(--primary-blue));
         }
         .stack_list {
            display: flex;
            width: 90%;
            padding: 0;
            justify-content: space-evenly;
            margin: 2rem auto 0;
         }
      }
   }

   .courses_box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      margin: 0 auto;
      padding-bottom: 1rem;

      @media screen {
         @media (max-width: 1024px) {
            justify-content: space-evenly;
         }
      }
      .course {
         border: 1px solid rgba(var(--primary-pink));
         background-color: rgba(var(--bg-black), 0.3);
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         position: relative;
         padding: 5rem 1rem 1rem;
         margin: 0;
         min-width: 24rem;
         min-height: 26rem;

         .about_course {
            display: flex;
            justify-content: space-between;
            color: rgb(var(--primary-blue));
            font-weight: 300;
            font-size: 1.4rem;
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            left: 0.5rem;
            p {
               margin: 0;
            }
         }
         .logo {
         }
         .course_name {
            color: rgb(var(--primary-pink));
            font-size: 1.3rem;
            font-weight: 500;
            margin: 1rem 0 0;
         }
         .school {
            font-size: 1.3rem;
            font-weight: 300;
            margin: 0.5rem 0 0;
            color: rgb(var(--primary-blue));
         }
         .stack_list {
            display: flex;
            justify-content: space-around;
            padding: 0;
            margin: 2.5rem auto 0;
            width: 90%;
         }
         .button {
            width: 15rem;
            margin: 3rem auto 0;
            font-size: 1.3rem;
            padding: 1rem;
         }
      }
   }
`;
