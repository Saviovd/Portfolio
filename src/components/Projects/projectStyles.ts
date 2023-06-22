import styled from 'styled-components';

export const ProjectsStyle = styled.section`
   max-width: 1700px;
   height: 95vh;
   min-height: 69rem;
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
         z-index: 2;

         transform: translateX(-100%);

         .one,
         .two,
         .three {
            cursor: pointer;
            background-color: rgba(var(--primary-pink), 0.6);
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
               @media (max-width: 1024px) {
                  text-align: center;
                  width: 25%;
                  padding: 1.5rem;
                  text-align: right;
                  height: 2rem;
                  font-size: 2rem;
               }
            }
         }

         .isActive {
            transition: 1s;
            background-color: rgba(var(--primary-blue), 0.8);
            width: 20rem;
            @media screen {
               @media (max-width: 1024px) {
                  width: 10rem;
                  width: 50%;
                  text-align: center;
               }
            }
         }

         @media screen {
            @media (max-width: 1024px) {
               position: initial;
               flex-direction: row;
               width: 25rem;
               align-self: flex-start;
               transform: translateX(0rem);
            }
            @media (max-width: 780px) {
               width: 20rem;
            }
         }
      }

      .project_photo {
         object-fit: cover;
         border-radius: 2px;
         border: 1px solid rgba(var(--primary-blue), 0.4);
         @media screen {
            @media (max-width: 1600px) {
               object-fit: contain;
               width: 70rem;
               height: auto;
            }

            @media (max-width: 1440px) {
               width: 60rem;
            }

            @media (max-width: 1200px) {
               width: 50rem;
            }

            @media (max-width: 1024px) {
               width: 85%;
               margin: 1rem 0 0 0;
               align-self: flex-start;
            }
            @media (max-width: 768px) {
               width: 100%;
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

            @media screen {
               @media (max-width: 520px) {
                  font-size: 2.5rem;
               }
               @media (max-width: 440px) {
                  font-size: 2.2rem;
               }
            }
         }

         .project_description {
            margin: 2rem 0;
            font-size: 1.7rem;
            line-height: 130%;
            letter-spacing: 0.1rem;
            @media screen {
               @media (max-width: 1440px) {
                  min-height: 7rem;
               }
               @media (max-width: 1024px) {
                  margin: 2rem 0 3rem 0;
                  min-height: 0;
               }
               @media (max-width: 440px) {
                  font-size: 1.5rem;
               }
            }
         }
         .links_to_project {
            display: flex;
            justify-content: flex-start;
            gap: 2rem;
         }

         .dev_by {
            font-size: 2.3rem;
            margin-top: 2.5rem;
            @media screen {
               @media (max-width: 440px) {
                  font-size: 1.9rem;
               }
            }
         }

         .stack_list {
            display: flex;
            padding: 0;

            .stack {
               margin-right: 0.7rem;
               padding: 1rem;
               border: 1px solid rgba(var(--primary-pink), 0.8);
               border-radius: 2px;
               transition: .5s;

               &:hover {
                  box-shadow: 0 0 3px rgb(var(--secondary-white)),
                     0 0 5px rgb(var(--secondary-white)),
                     0 0 5px rgb(var(--secondary-white)),
                     0 0 5px rgba(var(--primary-pink)),
                     0 0 10px rgba(var(--primary-pink)),
                     0 0 15px rgba(var(--primary-pink));
               }
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
               width: 96%;
            }
            @media (max-width: 768px) {
               margin-left: 0;
               min-width: 30rem;
            }
         }
      }

      @media screen {
         @media (max-width: 1600px) {
            margin: 2rem auto 4rem 0;
            padding-left: 10rem;
         }
         @media (max-width: 1024px) {
            flex-direction: column;
            padding: 0;
            width: 90%;
            margin: 0 auto 2rem auto;
         }
      }
   }

   .more_projects {
      width: 100%;
      max-width: 1700px;
      display: flex;
      justify-content: flex-end;
      margin-right: 20rem;

      @media screen {
         @media (max-width: 1024px) {
            margin-right: 7rem;
         }
         @media (max-width: 475px) {
            margin-right: 3rem;
         }
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         height: 80vh;
         padding: 0 1rem 0 0;
         min-height: 70rem;
      }
      @media (max-width: 1024px) {
         height: 85vh;
         padding: 0;
      }
      @media (max-width: 850px) {
         height: 90vh;
         justify-content: space-evenly;
         padding-top: 15rem;
      }

      @media (max-width: 768px) {
         padding-top: 10rem;
      }
      @media (max-width: 475px) {
         height: 90vh;
         padding-top: 15rem;
      }
      @media (max-width: 400px) {
         padding-top: 9rem;
      }
      @media (max-width: 400px) {
         padding-top: 12rem;
      }
   }
`;
