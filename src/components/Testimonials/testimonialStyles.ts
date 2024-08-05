import styled from 'styled-components';

export const TestimonialsStyle = styled.section`
   max-width: 1800px;
   margin: 0 auto;
   padding-top: 15rem;
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
            width: 70rem;
            min-height: 10rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column-reverse;
            margin: 6rem auto 7rem;
            padding: 13rem 3rem 3rem;
            position: relative;
            border: 1px solid rgb(var(--primary-blue));

            @media screen {
               @media (max-width: 890px) {
                  width: 55rem;
                  padding: 12rem 2.5rem 2.5rem;
               }
               @media (max-width: 720px) {
                  width: 80%;
                  padding: 11rem 2rem 2rem;
               }
               @media (max-width: 525px) {
                  width: 85%;
                  padding: 10rem 1rem 2rem;
               }
               @media (max-width: 425px) {
                  padding: 8.5rem 1rem 1.5rem;
               }
            }

            .testimony {
               font-size: 1.7rem;
               line-height: 120%;
               margin: 0 auto;

               @media screen {
                  @media (max-width: 890px) {
                     font-size: 1.5rem;
                     &::before,
                     &::after {
                        font-size: 1.8rem;
                     }
                  }
                  @media (max-width: 720px) {
                     font-size: 1.3rem;
                  }
                  @media (max-width: 525px) {
                     font-size: 1.2rem;
                  }
                  @media (max-width: 425px) {
                     font-size: 1.1rem;
                  }
               }

               &::before {
                  content: '"';
                  font-size: 2rem;
                  margin: 0 0.2rem;
                  color: rgb(var(--primary-blue));
               }
               &::after {
                  content: '"';
                  font-size: 2rem;
                  margin: 0 0.2rem;
                  color: rgb(var(--primary-blue));
               }
            }
            .person {
               position: absolute;
               width: 30rem;
               height: 20rem;
               margin: 0 auto;
               top: -6rem;
               @media screen {
                  @media (max-width: 890px) {
                     top: -5rem;
                  }
                  @media (max-width: 525px) {
                     top: -4rem;
                  }
               }
               .photograph {
                  grid-area: photo;
                  border-radius: 50%;
                  object-fit: contain;
                  width: 12rem;
                  height: 12rem;
                  border: 1px solid rgba(var(--primary-blue), 0.5);

                  @media screen {
                     @media (max-width: 890px) {
                        width: 10rem;
                        height: 10rem;
                     }
                     @media (max-width: 525px) {
                        width: 8rem;
                        height: 8rem;
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
                  font-size: 1.9rem;
                  font-weight: 500;
                  color: rgba(var(--primary-pink), 1);

                  @media screen {
                     @media (max-width: 720px) {
                        font-size: 1.7rem;
                     }
                     @media (max-width: 525px) {
                        font-size: 1.5rem;
                     }
                     @media (max-width: 425px) {
                        font-size: 1.3rem;
                     }
                  }
               }

               .office {
                  grid-area: office;
                  margin: 0;
                  font-size: 1.3rem;
                  font-weight: 400;
                  color: rgba(var(--primary-blue), 0.6);
                  @media screen {
                     @media (max-width: 720px) {
                        font-size: 1.2rem;
                     }
                     @media (max-width: 525px) {
                        font-size: 1.1rem;
                     }
                     @media (max-width: 425px) {
                        font-size: 1rem;
                     }
                  }
               }
            }
         }
         .swiper-wrapper {
            align-items: center;
         }
         .swiper-pagination-bullet {
            background-color: rgba(var(--primary-blue), 0.9);
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 0;

            &:hover {
               background-color: rgb(var(--primary-blue));
            }
         }
      }
   }

   @media screen {
      @media (max-width: 768px) {
         padding-top: 11rem;
      }
   }
`;
