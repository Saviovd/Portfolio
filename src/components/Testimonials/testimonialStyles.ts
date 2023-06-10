import styled from 'styled-components';

export const TestimonialsStyle = styled.section`
   max-width: 1700px;
   height: calc(80vh - 15rem);
   margin: 0 auto;
   padding-top: 3rem;
   text-align: center;

   .testimonials_container {
      height: 80%;
      display: flex;
      align-items: center;

      .swiper {
         display: flex;
         align-items: center;

         .testimony_box {
            border: 1px solid rgb(var(--second-primary-color));
            width: 40rem;
            height: 25rem;
            padding: 1rem;
            display: grid;
            grid-template-areas:
               'photo name'
               'photo office'
               'testimony testimony';
            grid-template-rows: 20% 25% auto;
            grid-template-columns: 27% auto;
            border-radius: 2px;
            margin: 10rem auto;
            box-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 5px #fff,
               0 0 10px #0ba9ca, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca;

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
            }

            .testimony {
               grid-area: testimony;
               font-size: 1.7rem;
               text-align: left;
            }
         }
         .swiper-pagination-bullet {
            background-color: rgb(var(--first-primary-color));
            width: 1.8rem;
            height: 1.8rem;

            &:hover {
               background-color: rgb(var(--second-primary-color));
            }
         }
      }
   }
`;
