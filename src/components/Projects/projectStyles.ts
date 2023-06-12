import styled from 'styled-components';

export const ProjectsStyle = styled.section`
   max-width: 1700px;
   height: 95vh;
   min-height: 670px;
   margin: 0 auto;
   text-align: center;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;

   .project_container {
      display: flex;
      position: relative;
      padding-left: 15rem;
      margin: 5rem auto;
      align-items: center;

      .pagination {
         position: absolute;
         display: flex;
         flex-direction: column;
         width: 15rem;

         transform: translateX(-100%);

         .one,
         .two,
         .three {
            cursor: pointer;
            background-color: rgba(var(--second-primary-color), 0.6);
            text-align: right;
            font-size: 4rem;
            font-weight: 600;
            padding: 0.5rem 1rem 0.5rem 0;
            height: 5rem;
            transition: 1s;
            border-radius: 2px;

            @media screen {
               @media (max-width: 1600px) {
                  height: 4rem;
                  font-size: 3.5rem;
               }
            }
         }

         .isActive {
            transition: 1s;
            background-color: rgba(var(--first-primary-color), 0.6);
            width: 20rem;
            @media screen {
               @media (max-width: 1600px) {
                  width: 15rem;
               }
            }
         }

         @media screen {
            @media (max-width: 1600px) {
               width: 10rem;
            }
         }
      }

      .project_photo {
         object-fit: cover;
         border-radius: 2px;
         border: 1px solid rgba(var(--first-primary-color), 0.4);

         @media screen {
            @media (max-width: 1600px) {
               object-fit: contain;
               width: 70rem;
               height: auto;
            }

            @media (max-width: 1440px) {
               object-fit: contain;
               width: 60rem;
            }

            @media (max-width: 1200px) {
               object-fit: contain;
               width: 50rem;
            }
         }
      }

      .about_project {
         min-width: 60rem;
         margin-left: 4rem;
         padding-right: 1rem;
         text-align: left;

         display: flex;
         flex-direction: column;
         justify-content: space-evenly;
         height: 100%;

         .project_name {
            font-size: 3rem;
            font-weight: 500;
            margin-bottom: 0;
         }

         .project_description {
            margin: 2rem 0;
            font-size: 1.7rem;
            line-height: 130%;
            letter-spacing: 0.1rem;
            @media screen {
               @media (max-width: 1600px) {
                  /* font-size: 1.6rem; */
               }
            }
         }
         .links_to_project {
            display: flex;
         }

         .dev_by {
            font-size: 2.3rem;
            margin-top: 2.5rem;
            @media screen {
               @media (max-width: 1600px) {
                  /* font-size: 2rem; */
               }
            }
         }

         .stack_list {
            display: flex;
            padding: 0;

            .stack {
               margin-right: 0.7rem;
               padding: 1rem;
               border: 1px solid rgba(var(--second-primary-color), 0.8);
               border-radius: 2px;
            }
         }

         @media screen {
            @media (max-width: 1600px) {
               margin-left: 6rem;
               min-width: 40rem;
            }
            @media (max-width: 1440px) {
               margin-left: 4rem;
               min-width: 35rem;
            }
         }
      }

      @media screen {
         @media (max-width: 1600px) {
            margin: 2rem auto 4rem 0;
            padding-left: 10rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         height: 86vh;
         padding: 0 1rem 0 0;
      }
   }
`;
