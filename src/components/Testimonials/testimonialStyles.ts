import styled from 'styled-components';

export const TestimonialsStyle = styled.section`
   max-width: 1700px;
   margin: 0 auto 0 auto;
   height: 75vh;
   min-height: 62rem;
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   justify-content: flex-end;

   .testimonials_container {
      display: flex;
      align-items: center;
      width: 100%;

      .swiper {
         display: flex;
         align-items: center;

         .testimony_box {
            border: 1px solid rgb(var(--primary-pink));
            width: 65rem;
            padding: 2rem 3rem 3rem;
            display: grid;
            grid-template-areas:
               'photo name'
               'photo office'
               'testimony testimony';
            grid-template-rows: 25% 20% auto;
            grid-template-columns: 15% auto;
            border-radius: 2px;
            margin: 5rem auto 10rem;
            box-shadow: 0 0 3px rgb(var(--secondary-white)),
               0 0 5px rgb(var(--secondary-white)),
               0 0 5px rgb(var(--secondary-white)),
               0 0 5px rgba(var(--primary-pink)),
               0 0 10px rgba(var(--primary-pink)),
               0 0 15px rgba(var(--primary-pink));

            .photograph {
               grid-area: photo;
               border-radius: 50%;
            }

            .name {
               grid-area: name;
               margin: 0;
               font-size: 2.5rem;
               font-weight: 400;
               justify-self: flex-start;
               align-self: flex-end;
            }

            .office {
               grid-area: office;
               margin: 0;
               font-size: 1.8rem;
               font-weight: 200;
               justify-self: flex-start;
               color: rgb(var(--primary-blue));
            }

            .testimony {
               grid-area: testimony;
               font-size: 2rem;
               line-height: 130%;
               text-align: left;
               margin-bottom: 0;
            }
         }
         .swiper-pagination-bullet {
            background-color: rgb(var(--primary-blue));
            width: 1.8rem;
            height: 1.8rem;

            &:hover {
               background-color: rgb(var(--primary-pink));
            }
         }
      }
   }
`;
