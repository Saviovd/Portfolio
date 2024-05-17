import styled from 'styled-components';

export const ProjectsStyle = styled.main`
   display: flex;
   flex-direction: column;
   padding: 0 2rem;

   .back {
      width: 100%;
      max-width: 1700px;
      margin: 5rem auto 3rem;
      .button {
         width: 10rem;
         background-color: rgba(var(--primary-pink), 0.6);
      }

      @media screen {
         @media (max-width: 1200px) {

         }
      }
   }

   .project {
      width: 100%;
      max-width: 150rem;
      margin: 8rem auto 0;
      padding: 3rem 0;
      border-bottom: 1px solid rgb(var(--primary-pink));

      display: grid;
      grid-template-areas:
         'project_picture stacks'
         'project_name project_name'
         'project_description project_description'
         'buttons buttons';
      grid-template-columns: 60% 35% auto;

      .project_picture {
         grid-area: project_picture;
         width: 100%;
         height: auto;
         object-fit: contain;
         border: 1px solid rgb(var(--primary-pink));
      }
      .stacks {
         grid-area: stacks;
         display: flex;
         flex-wrap: wrap;
         justify-content: flex-start ;
         align-items: flex-start;
         padding: 0 2rem;

         .dev_by {
            width: 100%;
            text-align: center;
            font-size: 2rem;
            font-weight: 600;
            margin-top: 0;
            color: rgb(var(--primary-pink));

            @media screen {
               @media (max-width: 860px) {
                  font-size: 1.4rem;
               }
               @media (max-width: 680px) {
                  margin: 0.6rem 0;
               }
               @media (max-width: 680px) {
                  margin: 1rem 0 0.6rem 0;
               }
            }
         }
         .icon {
            margin: 2rem 0.4rem 0;
            width: 40%;
            height: 8rem;
            padding: 0.2rem;
            @media screen {
               @media (max-width: 1200px) {
                  margin-top: 0.4rem;
                  width: 40%;
                  height: 6rem;
               }
               @media (max-width: 860px) {
                  height: 5rem;
               }
               @media (max-width: 680px) {
                  height: 3.4rem;
                  padding: 0.5rem;
                  width: auto;
               }
            }
         }
         @media screen {
            @media (max-width: 1200px) {
               padding: 0 0.5rem;
            }
            @media (max-width: 680px) {
               margin-top: 1rem;
               padding: 0 1.5rem 0 0;
               width: 100%;
            }
         }
      }
      .project_name {
         grid-area: project_name;
         font-size: 4rem;
         margin: 2rem 0;
         font-weight: 500;
         @media screen {
            @media (max-width: 860px) {
               font-size: 3rem;
            }
            @media (max-width: 500px) {
               font-size: 2.6rem;
               margin: 1rem 0;
            }
         }
      }
      .project_description {
         grid-area: project_description;
         font-size: 2.5rem;
         margin: 0;
         font-weight: 300;
         @media screen {
            @media (max-width: 860px) {
               font-size: 2rem;
            }
            @media (max-width: 500px) {
               font-size: 1.6rem;
            }
         }
      }
      .links_to_project {
         grid-area: buttons;
         display: flex;
         width: 100%;
         gap: 3.5rem;
         margin-top: 3rem;
         justify-content: flex-end;

         @media screen {
            @media (max-width: 680px) {
               gap: 2rem;
               padding-left: 1rem;
            }
            @media (max-width: 680px) {
               justify-content: center;
               padding-left: 0;
            }
         }
      }

      @media screen {
         @media (max-width: 1200px) {
            grid-template-columns: 65% 35% auto;
         }
         @media (max-width: 1124px) {
            grid-template-columns: 70% 30%;
         }
         @media (max-width: 860px) {
            margin: 2rem auto 0;
            grid-template-columns: 75% 25%;
         }
         @media (max-width: 680px) {
            grid-template-areas:
               'project_picture project_picture'
               'project_name project_name'
               'project_description project_description'
               'stacks buttons';
            grid-template-columns: repeat(2, 1fr);
         }
         @media (max-width: 500px) {
            grid-template-areas:
               'project_picture project_picture'
               'project_name project_name'
               'project_description project_description'
               'stacks stacks'
               'buttons buttons';
            grid-template-columns: repeat(2, 1fr);
            margin-top: 0;
         }
      }
   }
`;
