import styled from 'styled-components';

export const ExperiencesStyles = styled.div`
   display: flex;
   justify-content: center;
   gap: 2rem;
   width: 95%;
   margin: 2rem auto 0;

   @media screen {
      @media (max-width: 1150px) {
         gap: 1rem;
      }
      @media (max-width: 1000px) {
         flex-direction: column;
         width: 90%;
         gap: 2rem;
      }
      @media (max-width: 400px) {
         width: 95%;
      }
   }
   .container {
      margin: 1rem 0;
      padding: 1rem;

      @media screen {
         @media (max-width: 1000px) {
            max-width: 55rem;
            margin: 0 auto;
         }
         @media (max-width: 400px) {
            padding: 0.8rem;
         }
      }

      .line {
         font-size: 2.8rem;
         margin: 0;
         position: relative;
         bottom: -0.3rem;
         padding-top: 0.1rem;
         fill: rgba(var(--primary-pink), 0.1);
         stroke: rgba(var(--primary-blue), 1);
         background-color: rgba(var(--primary-blue), 0.1);
      }

      .title {
         margin: 0;
         font-size: 2rem;
         text-transform: capitalize;
         font-weight: 500;
         letter-spacing: 0.3rem;

         @media screen {
            @media (max-width: 1000px) {
               text-align: center;
            }
         }
      }

      .logo {
         grid-area: logo;
         object-fit: contain;
         margin-right: 1rem;

         @media screen {
            @media (max-width: 400px) {
               margin-right: 0.7rem;
            }
         }
      }
   }

   .jobs {
      padding: 0 1rem;

      @media screen {
         @media (max-width: 1150px) {
            padding: 0;
            width: 45%;
            min-width: 4.55rem;
         }
         @media (max-width: 1000px) {
            padding: 0;
            width: auto;
            min-width: 32rem;
         }
      }
      .job {
         display: grid;
         grid-template-areas:
            'logo office office'
            'logo company stacks'
            'logo period stacks'
            'assignments assignments assignments';
         grid-template-columns: min-content;
         justify-items: start;
         align-items: start;
         justify-content: start;
         background-color: rgba(var(--primary-blue), 0.1);
         padding: 1rem;

         &:nth-last-child(1) {
            margin-bottom: 0;
         }

         @media screen {
               @media (max-width: 480px) {
                  padding-bottom: 0;
               }
            }

         .logo {
            @media screen {
               @media (max-width: 480px) {
                  width: 6.5rem;
               }
            }
         }

         .office {
            grid-area: office;
            font-size: 2rem;

            @media screen {
               @media (max-width: 480px) {
                  font-size: 1.6rem;
               }
            }
         }

         .company {
            grid-area: company;
            font-size: 1.6rem;
            @media screen {
               @media (max-width: 480px) {
                  font-size: 1.4rem;
               }
            }
         }

         .period {
            grid-area: period;
            font-size: 1.3rem;
            white-space: nowrap;
            @media screen {
               @media (max-width: 480px) {
                  font-size: 1.2rem;
               }
            }
         }

         .stacks {
            grid-area: stacks;
            padding: 0;
            display: flex;
            align-self: center;
            gap: 1rem;
            margin-left: 2rem;

            @media screen {
               @media (max-width: 480px) {
                  gap: 0.5rem;
                  justify-self: flex-start;
                  margin-left: 0;
               }
            }

            .stack {
               @media screen {
                  @media (max-width: 480px) {
                     width: 2rem;
                  }
               }
            }
         }
         .assignments {
            grid-area: assignments;
            padding: 0;
            font-size: 1.4rem;

            @media screen {
               @media (max-width: 480px) {
                  font-size: 1.3rem;
               }
            }

            .assignment {
               &::before {
                  content: '-';
                  margin-right: 1rem;
               }
            }
         }
      }
   }
   .formations {
      background-color: rgba(var(--primary-pink), 0.1);
      box-shadow: inset 0 0px 10px -8px rgba(var(--secondary-white), 1);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 1rem;
      position: relative;

      @media screen {
         @media (max-width: 1000px) {
            width: 95%;
            padding-bottom: 5.5rem;
            margin: 0 auto;
         }
         @media (max-width: 400px) {
         }
      }
      .graduation {
         background-color: rgba(var(--primary-blue), 0.3);
         padding: 1rem 2rem 1rem 1rem;
         display: grid;
         grid-template-areas:
            'logo course'
            'logo institution'
            'logo period';
         justify-content: start;
         justify-items: start;
         align-items: center;
         align-content: center;
         grid-template-columns: min-content;
         position: relative;
         margin-bottom: 1rem;

         @media screen {
            @media (max-width: 480px) {
               padding: 0.5rem 1rem 0.5rem 0.5rem;
            }
            @media (max-width: 400px) {
               min-height: 9rem;
               padding: 0 0 0 0.5rem;
            }
         }

         .logo {
            @media screen {
               @media (max-width: 480px) {
                  width: 6rem;
               }
            }
         }

         .course {
            grid-area: course;
            font-size: 1.8rem;
            margin-right: 10rem;
            @media screen {
               @media (max-width: 1150px) {
                  font-size: 1.6rem;
               }
               @media (max-width: 570px) {
                  margin-right: 7rem;
               }
               @media (max-width: 480px) {
                  font-size: 1.5rem;
                  white-space: nowrap;
                  margin-right: 0;
                  padding-top: 0.5rem;
               }
               @media (max-width: 400px) {
                  font-size: 1.4rem;
                  white-space: normal;
                  margin-right: 0;
               }
            }
         }
         .institution {
            grid-area: institution;
            font-size: 1.5rem;
            @media screen {
               @media (max-width: 1150px) {
                  font-size: 1.4rem;
               }
               @media (max-width: 480px) {
                  font-size: 1.25rem;
               }
            }
         }
         .category {
            grid-area: category;
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 1.5rem;
            background-color: rgba(var(--primary-blue), 1);
            padding: 0.1rem 0.3rem;
            font-weight: 200;
            @media screen {
               @media (max-width: 1150px) {
                  font-size: 1.4rem;
               }
               @media (max-width: 480px) {
                  bottom: 1rem;
                  top: auto;
               }
            }
         }
         .period {
            grid-area: period;
            font-size: 1.4rem;
            @media screen {
               @media (max-width: 1150px) {
                  font-size: 1.3rem;
               }
               @media (max-width: 480px) {
                  font-size: 1.1rem;
               }
            }
         }
      }

      .courses {
         display: flex;
         flex-direction: column;
         gap: 1rem;
         justify-content: flex-start;

         .course {
            display: grid;
            grid-template-areas:
               'logo course course'
               'logo institution stacks'
               'logo hours stacks';
            justify-content: start;
            justify-items: start;
            align-items: start;
            position: relative;
            border: 1px solid rgba(var(--primary-pink), 1);

            .category {
               grid-area: category;
               position: absolute;
               right: 1rem;
               top: 1rem;
               background-color: rgba(var(--primary-pink), 1);
               padding: 0.3rem;

               @media screen {
                  @media (max-width: 480px) {
                     bottom: 1rem;
                     top: auto;
                  }
               }
            }
            .logo {
               object-fit: cover;
               height: 100%;
               width: min-content;
               @media screen {
                  @media (max-width: 480px) {
                     width: 5.5rem;
                     align-self: center;
                  }
               }
            }
            .course-name {
               grid-area: course;
               font-size: 1.8rem;
               padding-top: 0.5rem;

               @media screen {
                  @media (max-width: 1150px) {
                     font-size: 1.6rem;
                  }
                  @media (max-width: 480px) {
                     font-size: 1.4rem;
                  }
               }
            }
            .institution {
               grid-area: institution;
               font-size: 1.4rem;
               @media screen {
                  @media (max-width: 1150px) {
                     font-size: 1.3rem;
                  }
                  @media (max-width: 480px) {
                     font-size: 1.2rem;
                  }
               }
            }
            .hours {
               grid-area: hours;
               font-size: 1.4rem;
               color: rgba(var(--primary-pink), 1);
               font-weight: 600;
               @media (max-width: 480px) {
                  font-size: 1.3rem;
               }
            }

            .stacks {
               grid-area: stacks;
               display: flex;
               gap: 1rem;
               padding: 0;
               align-items: center;
               justify-content: center;

               @media screen {
                  @media (max-width: 480px) {
                     gap: 0.5rem;
                  }
               }

               .stack-logo {
                  @media screen {
                     @media (max-width: 480px) {
                        width: 2rem;
                     }
                  }
               }
            }
         }
      }
      .button {
         background-color: rgba(var(--primary-blue), 0.1);
         font-size: 1.3rem;
         padding: 0.5rem 1rem;
         position: absolute;
         bottom: 1rem;
         right: 1rem;
      }
   }
`;
