import styled from 'styled-components';

export const ExperiencesStyles = styled.div`
   display: flex;
   justify-content: center;
   gap: 2rem;
   width: 95%;
   margin: 0 auto;
   .container {
      margin: 1rem 0;
      padding: 1rem;

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
         letter-spacing: .3rem;
      }

      .logo {
         grid-area: logo;
         object-fit: contain;
         margin-right: 1rem;
      }
   }

   .jobs {
      padding: 0 1rem;
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

         .office {
            grid-area: office;
            font-size: 2rem;
         }

         .company {
            grid-area: company;
            font-size: 1.6rem;
         }

         .period {
            grid-area: period;
            font-size: 1.3rem;
         }

         .stacks {
            grid-area: stacks;
            padding: 0;
            display: flex;
            align-self: center;
            gap: 1rem;
            margin-left: 2rem;
         }
         .assignments {
            grid-area: assignments;
            padding: 0;
            font-size: 1.4rem;

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

      .graduation {
         background-color: rgba(var(--primary-blue), 0.3);
         padding: 1rem;
         display: grid;
         grid-template-areas:
            'logo course'
            'logo institution'
            'logo period';
         justify-content: start;
         justify-items: start;
         align-items: start;
         grid-template-columns: min-content;
         position: relative;
         margin-bottom: 1rem;
         .course {
            grid-area: course;
            font-size: 1.8rem;
            margin-right: 10rem;
         }
         .institution {
            grid-area: institution;
            font-size: 1.5rem;
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
         }
         .period {
            grid-area: period;
            font-size: 1.4rem;
         }
      }

      .courses {
         display: flex;
         flex-direction: column;
         gap: 1rem;
         justify-content: flex-start;

         .course {
            max-height: 25%;
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
            }
            .logo {
               object-fit: cover;
               height: 100%;
               width: min-content;
            }
            .course-name {
               grid-area: course;
               font-size: 1.8rem;
               padding-top: 0.5rem;
            }
            .institution {
               grid-area: institution;
               font-size: 1.4rem;
            }
            .hours {
               grid-area: hours;
               font-size: 1.4rem;
               color: rgba(var(--primary-pink), 1);
               font-weight: 600;
            }

            .stacks {
               grid-area: stacks;
               display: flex;
               gap: 1rem;
               padding: 0;
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
