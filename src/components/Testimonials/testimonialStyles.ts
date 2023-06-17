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
            border: 1px solid rgb(var(--second-primary-color));
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
            box-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 5px #fff,
               0 0 10px rgba(var(--second-primary-color)),
               0 0 20px rgba(var(--second-primary-color)),
               0 0 30px rgba(var(--second-primary-color));

            .photograph {
               grid-area: photo;
               border-radius: 50%;

               @media screen {
                  @media (max-width: 510px) {
                     width: 7rem;
                     height: 7rem;
                  }
               }
            }

            .name {
               grid-area: name;
               margin: 0;
               font-size: 2.5rem;
               font-weight: 400;
               justify-self: flex-start;
               align-self: flex-end;
               @media screen {
                  @media (max-width: 510px) {
                     font-size: 2.1rem;
                  }
               }
            }

            .office {
               grid-area: office;
               margin: 0;
               font-size: 1.8rem;
               font-weight: 200;
               justify-self: flex-start;
               color: rgb(var(--first-primary-color));
               @media screen {
                  @media (max-width: 510px) {
                     font-size: 1.5rem;
                  }
               }
            }

            .testimony {
               grid-area: testimony;
               font-size: 2rem;
               line-height: 130%;
               text-align: left;
               margin-bottom: 0;

               @media screen {
                  @media (max-width: 575px) {
                     font-size: 1.6rem;
                  }
                  @media (max-width: 510px) {
                     font-size: 1.5rem;
                  }
               }
            }

            @media screen {
               @media (max-width: 885px) {
                  width: 75%;
                  grid-template-columns: 18% auto;
               }
               @media (max-width: 885px) {
                  grid-template-columns: 20% auto;
               }
               @media (max-width: 575px) {
                  grid-template-columns: 23% auto;
               }
               @media (max-width: 510px) {
                  padding: 1.5rem 2rem 2rem;
                  grid-template-columns: 25% auto;
               }
               @media (max-width: 425px) {
                  grid-template-columns: 28% auto;
                  grid-template-rows: 20% 20% auto;
               }
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

   @media screen {
      @media (max-width: 1024px) {
         height: 60vh;
         justify-content: flex-end;
      }
      @media (max-width: 440px) {
         height: 70vh;
         justify-content: flex-end;
      }
      @media (max-width: 360px) {
         height: 60vh;
         min-height: 55rem;
         justify-content: flex-end;
      }
   }
`;
