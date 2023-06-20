import styled from 'styled-components';

export const CertificationsStyle = styled.main`
   text-align: center;
   padding: 1rem 2rem;
   max-width: 1600px;
   margin: 0 auto;

   .back {
      width: 100%;
      margin: 5rem auto 3rem;
      .button {
         width: 10rem;
         background-color: rgba(var(--primary-pink), 0.6);
      }

      @media screen {
         @media (max-width: 1200px) {
            /* margin: 7rem 0 0rem 5rem; */
         }
      }
   }

   .graduate_box {
      width: 90%;
      margin: 0 auto;
      padding: 5rem 0;

      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;

      .graduate {
         width: 30rem;
         height: 40rem;
         margin: 2rem 1rem;
         border: 2px solid rgb(var(--primary-blue));
         min-width: 29rem;

         .icon {
            height: 60%;
         }
         .course {
            margin: 0 auto;
            font-size: 1.55rem;
            font-weight: 700;
            color: rgba(var(--primary-blue));
            width: 90%;
         }
         .university {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 400;
            color: rgba(var(--primary-pink), 0.8);
         }
         .date {
            font-size: 1.6rem;
            transform: translateY(3rem);
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
      justify-content: space-around;

      .course {
         border: 1px solid rgba(var(--primary-pink));
         width: 25rem;
         height: 35rem;
         margin: 5rem 10rem;
         .about_course {
            display: flex;
            justify-content: space-between;
            padding: 0 0.5rem;
            color: rgb(var(--primary-blue));
            font-weight: 700;
            font-size: 1.5rem;
            p {
               margin: 0.8rem 0;
            }
         }
         .icon {
            height: 45%;
         }
         .course_name {
            font-size: 1.5rem;
            margin: 0 auto;
            width: 90%;
         }
         .school {
            font-size: 1.5rem;
            font-weight: 700;
            margin: .5rem 0 0;
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
            font-size: 1.4rem;
            padding: 1rem;
         }

         @media screen {
            @media (max-width: 980px) {
               margin: 5rem 2rem;
               min-width: 29rem;
            }
         }
      }
   }
`;
