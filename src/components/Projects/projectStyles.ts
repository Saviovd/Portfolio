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

   @media screen {
      @media (max-width: 1024px) {
         margin: 12rem auto 0;
      }
   }
   .projects {
      display: flex;
      justify-content: space-between;
      min-height: 44rem;
      padding: 0 2rem;

      @media screen {
         @media (max-width: 1500px) {
            padding: 0 0.5rem;
            min-height: 38rem;
         }
         @media (max-width: 1024px) {
            padding: 0;
            margin: 2rem 0;
            max-width: 62rem;
         }
         @media (max-width: 750px) {
            width: 90%;
         }
         @media (max-width: 480px) {
            width: 80%;
         }
      }
   }

   .project_container {
      display: flex;
      position: relative;
      margin: 3rem auto;
      align-items: center;
      @media screen {
         @media (max-width: 1024px) {
            flex-direction: column;
            width: 90%;
         }
         @media (max-width: 500px) {
            max-width: 42.9rem;
         }
      }

      .project_photo {
         object-fit: cover;
         height: auto;
         width: 70rem;
         border: 0.1px solid rgba(var(--primary-blue), 0.4);
         object-position: 0 0;

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
               width: 100%;
               max-width: 55.5rem;
               max-height: 26.7rem;
            }
            @media (max-width: 680px) {
               object-fit: contain;
               max-width: none;
               max-height: none;
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
               width: 100%;
               margin: 1rem auto 0;
               margin-left: 0;
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
               @media (max-width: 600px) {
                  font-size: 3rem;
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
               @media (max-width: 1115px) {
                  width: 40rem;
               }
               @media (max-width: 1024px) {
                  width: 100%;
                  margin: 0 0 2.5rem 0;
               }
               @media (max-width: 500px) {
                  font-size: 1.2rem;
               }
               @media (max-width: 430px) {
                  min-height: 6.25rem;
               }
            }
         }
         .links_to_project {
            display: flex;
            justify-content: flex-start;
            gap: 2rem;

            @media screen {
                  @media (max-width: 1024px) {
                     justify-content: center;
                  }}

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
                  margin: 1rem auto 0;
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
                  @media (max-width: 500px) {
                     transform: translateY(1rem);
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
      margin-top: 3rem;

      @media screen {
         @media (max-width: 1500px) {
            margin-top: 2rem;
         }
      }

      .number {
         cursor: pointer;
         background-color: rgba(var(--primary-pink), 0.6);
         font-size: 2rem;
         font-weight: 600;
         margin: 0 1rem;
         width: 2.5rem;
         height: 2.5rem;
         padding: 0.5rem 1rem;

         display: flex;
         align-items: center;
         justify-content: center;
         transition: 1s;
         @media screen {
            @media (max-width: 1024px) {
               font-size: 1.4rem;
            }
            @media (max-width: 685px) {
               margin: 0 1rem 0 0;

               &:nth-child(7) {
                  margin: 0 0 0 0;
               }
            }
            @media (max-width: 500px) {
               font-size: 1rem;
               padding: 0.3rem;
               margin: 0 .5rem 0 0;
            }
         }
      }

      .isActive {
         transition: 0.3s;
         background-color: rgba(var(--primary-blue), 0.8);
      }

      .pagination {
         cursor: pointer;
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 0 5rem;
         font-size: 4rem;
         background-color: rgba(var(--primary-pink), 0.2);
         border: 2px solid rgba(var(--primary-pink));
         fill: rgba(var(--primary-pink));
         transition: 0.1s;

         &:hover {
            background-color: rgba(var(--primary-blue), 0.1);
         }
         &:active {
            background-color: rgba(var(--primary-blue));
            fill: rgba(var(--secondary-white));
            border: 2px solid rgba(var(--secondary-white));
         }

         @media screen {
            @media (max-width: 685px) {
               margin: 0 3rem;
            }
            @media (max-width: 480px) {
               margin: 0 2rem;
               &:nth-child(1) {
                  margin-left: 0;
               }
               &:nth-last-child(1) {
                  margin-right: 0;
               }
            }
            @media (max-width: 430px) {
               font-size: 3rem;
            }
            @media (max-width: 380px) {
               margin: 0 1rem;
            }
         }
      }
   }
`;
