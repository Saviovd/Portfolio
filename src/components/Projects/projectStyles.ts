import styled from 'styled-components';

export const ProjectsStyle = styled.section`
   max-width: 1700px;
   height: auto;
   margin: 12rem auto 5rem;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .projects {
      display: flex;
      justify-content: space-between;
      min-height: 44rem;
      padding: 0 2rem;

      @media screen {
         @media (max-width: 1500px) {
            padding: 0 0.5rem;
            min-height: 38rem;
            margin-top: 3rem;
         }
         @media (max-width: 1024px) {
            padding: 0 1rem;
         }
      }
      .pagination {
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 1rem 3rem;

         @media screen {
            @media (max-width: 1500px) {
               padding: 1rem 2.5rem;
            }
            @media (max-width: 500px) {
               padding: 0.5rem 1rem;
               font-size: 1rem;
            }
         }
      }
      .project_container {
         display: flex;
         position: relative;
         margin: 3rem 1rem;
         align-items: center;
         @media screen {
            @media (max-width: 1500px) {
               margin: 0rem 1rem 0;
            }
            @media (max-width: 1024px) {
               flex-direction: column;
            }

            @media (max-width: 900px) {
               max-width: 58.9rem;
            }
         }

         .project_photo {
            object-fit: contain;
            border-radius: 2px;
            border: 1px solid rgba(var(--primary-blue), 0.4);
            height: auto;
            width: 77rem;

            @media screen {
               @media (max-width: 1765px) {
                  width: 65rem;
               }
               @media (max-width: 1500px) {
                  width: 60rem;
               }
               @media (max-width: 1350px) {
                  width: 50rem;
               }
               @media (max-width: 1024px) {
                  width: 90%;
                  max-height: 26.7rem;
               }
               @media (max-width: 500px) {
                  width: 100%;
               }
            }
         }
      }
      .about_project {
         margin-left: 3rem;
         text-align: left;

         display: flex;
         flex-direction: column;
         justify-content: space-evenly;
         @media screen {
            @media (max-width: 1024px) {
               width: 80%;
               margin: 2rem auto 0;
            }
            @media (max-width: 500px) {
               width: 100%;
            }
         }

         .project_name {
            font-size: 3rem;
            font-weight: 500;
            margin: 0 0 2rem;

            @media screen {
               @media (max-width: 1500px) {
                  font-size: 2.5rem;
               }
               @media (max-width: 1024px) {
                  font-size: 4rem;
                  margin: 0 0 1rem;
               }
               @media (max-width: 500px) {
                  font-size: 2rem;
               }
            }
         }

         .project_description {
            margin: 2rem 0;
            font-size: 1.7rem;
            line-height: 130%;
            letter-spacing: 0.1rem;
            width: 50rem;
            @media screen {
               @media (max-width: 1500px) {
                  font-size: 1.6rem;
                  width: 45rem;
                  margin: 0 0 1.5rem 0;
               }
               @media (max-width: 1245px) {
                  width: 40rem;
               }
               @media (max-width: 1230px) {
                  width: 35rem;
               }
               @media (max-width: 1024px) {
                  width: 100%;
                  margin: 0 0 2.5rem 0;
               }
               @media (max-width: 500px) {
                  font-size: 1.2rem;
               }
            }
         }
         .links_to_project {
            display: flex;
            justify-content: flex-start;
            gap: 2rem;

            .project_button {
               @media screen {
                  @media (max-width: 1500px) {
                     font-size: 1.5rem;
                     padding: 0.7rem 1.5rem;
                  }
                  @media (max-width: 500px) {
                     padding: 0.5rem 1rem;
                     font-size: 1rem;
                  }
               }
            }
         }

         .dev_by {
            font-size: 2.3rem;
            margin-top: 2.5rem;
            @media screen {
               @media (max-width: 1500px) {
                  font-size: 1.8rem;
                  margin-top: 2rem;
               }
               @media (max-width: 1024px) {
                  margin-top: 3rem;
                  font-size: 2rem;
                  text-align: center;
               }
               @media (max-width: 500px) {
                  font-size: 1.5rem;
               }
            }
         }

         .stack_list {
            display: flex;
            padding: 0;

            @media screen {
               @media (max-width: 1024px) {
                  margin: 1rem auto 2rem;
               }
            }
            .stack {
               margin-right: 0.7rem;
               padding: 1rem;
               border-radius: 2px;
               transition: 0.5s;
               @media screen {
                  @media (max-width: 1500px) {
                     margin-right: 0.5rem;
                     padding: 0.5rem;
                  }
               }

               .stack_logo {
                  @media screen {
                     @media (max-width: 1500px) {
                        width: 30px;
                     }
                     @media (max-width: 1024px) {
                        width: 35px;
                     }
                     @media (max-width: 500px) {
                        width: 30px;
                     }
                  }
               }
               &:hover {
                  transform: scale(1.5);
               }
            }
         }
      }
   }
   .numeration {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 2;
      margin-top: 2rem;

      @media screen {
         @media (max-width: 1500px) {
            margin-top: 0;
         }
      }

      .number {
         cursor: pointer;
         background-color: rgba(var(--primary-pink), 0.6);
         font-size: 2rem;
         font-weight: 600;
         margin: 0 1rem;
         padding: 1rem;
         min-width: 1.5rem;

         display: flex;
         align-items: center;
         justify-content: center;
         transition: 1s;
         @media screen {
            @media (max-width: 1024px) {
               padding: 0.5rem 1rem;
               font-size: 1.4rem;
            }
            @media (max-width: 500px) {
               padding: 0.5rem;
               font-size: 1.2rem;
               margin: 0 .5rem;
            }
         }
      }

      .isActive {
         transition: 1s;
         background-color: rgba(var(--primary-blue), 0.8);
      }
   }
`;
