import styled from 'styled-components';

export const TestimonialsStyle = styled.section`
   max-width: 1800px;
   margin: 15rem auto 0 auto;
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
            width: 60%;
            min-height: 10rem;
            padding: 2.5rem 2rem 8.5rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            @media screen {
               @media (max-width: 850px) {
                  width: 75%;
               }
               @media (max-width: 500px) {
                  min-height: 30rem;
                  padding: 2.5rem 1.5rem 12rem;
                  width: 60%;
               }
            }

            margin: 4rem auto 7rem;
            box-shadow: 0 0 3px rgb(var(--secondary-white)),
               0 0 5px rgb(var(--secondary-white)),
               0 0 5px rgb(var(--secondary-white)),
               0 0 5px rgba(var(--primary-pink)),
               0 0 10px rgba(var(--primary-pink)),
               0 0 15px rgba(var(--primary-pink));
            .testimony {
               font-size: 1.7rem;
               line-height: 120%;
               text-align: justify;
               margin: 0;
               align-self: flex-start;
               @media screen {
                  @media (max-width: 500px) {
                     font-size: 1.4rem;
                     line-height: 150%;
                     text-align: center;
                  }
               }

               &::before {
                  content: '"';
                  font-size: 3rem;
                  margin: 0 0.3rem;
                  color: rgb(var(--primary-blue));
               }
               &::after {
                  content: '"';
                  font-size: 3rem;
                  margin: 0 0.3rem;
                  color: rgb(var(--primary-blue));
               }
            }
            .person {
               position: absolute;
               right: 1rem;
               bottom: 1rem;
               display: grid;
               grid-template-areas:
                  'photo name'
                  'photo office';
               @media screen {
                  @media (max-width: 500px) {
                     max-width: 26.8rem;
                     left: calc(50% - 13.4rem);
                     grid-template-areas:
                        'photo photo'
                        'name name'
                        'office office';
                     justify-items: center;
                     justify-content: center;
                  }
               }
               .photograph {
                  grid-area: photo;
                  border-radius: 50%;
                  object-fit: contain;
                  border: 1px solid rgb(var(--primary-blue));

                  @media screen {
                     @media (max-width: 500px) {
                        width: 6rem;
                        height: 6rem;
                        margin-bottom: 1rem;
                     }
                  }
               }

               .noPhoto {
                  grid-area: photo;
                  font-size: 3rem;
                  fill: rgb(var(--primary-blue));
                  border: 1px solid rgb(var(--primary-blue));
                  padding: 1rem;
                  border-radius: 50%;
                  margin: 0;
               }

               .name {
                  grid-area: name;
                  margin: 0;
                  font-size: 1.7rem;
                  font-weight: 400;
                  justify-self: flex-start;
                  align-self: flex-end;
                  margin-left: 1rem;

                  @media screen {
                     @media (max-width: 500px) {
                        justify-self: center;
                        align-self: flex-end;
                     }
                  }
               }

               .office {
                  grid-area: office;
                  margin: 0;
                  font-size: 1.3rem;
                  font-weight: 200;
                  color: rgb(var(--primary-blue));
                  justify-self: flex-start;
                  align-self: flex-start;
                  margin-left: 1rem;
                  white-space: nowrap;
                  @media screen {
                     @media (max-width: 500px) {
                        justify-self: center;
                        align-self: flex-end;
                     }
                  }
               }
            }
         }
         .swiper-wrapper {
            align-items: center;
         }
         .swiper-pagination-bullet {
            background-color: rgba(var(--primary-blue), .9);
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 0;

            &:hover {
               background-color: rgb(var(--primary-blue));
            }
         }
      }
   }
`;
