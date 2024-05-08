import styled from 'styled-components';

export const ProjectsStyle = styled.section`
   max-width: 1700px;
   height: 90vh;
   margin: 0 auto;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .project_container {
      display: flex;
      position: relative;
      padding-left: 15rem;
      margin: 3rem auto;
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
         }

         .isActive {
            transition: 1s;
            background-color: rgba(var(--primary-blue), 0.8);
            width: 20rem;
         }
      }

      .project_photo {
         object-fit: contain;
         border-radius: 2px;
         border: 1px solid rgba(var(--primary-blue), 0.4);
         height: auto;
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
      }
      .links_to_project {
         display: flex;
         justify-content: flex-start;
         gap: 2rem;
      }

      .dev_by {
         font-size: 2.3rem;
         margin-top: 2.5rem;
      }

      .stack_list {
         display: flex;
         padding: 0;

         .stack {
            margin-right: 0.7rem;
            padding: 1rem;
            border-radius: 2px;
            transition: 0.5s;

            .stack_logo {
            }
            &:hover {
               transform: scale(1.5);
            }
         }
      }
   }

   .more_projects {
      width: 100%;
      max-width: 1700px;
      display: flex;
      justify-content: flex-end;
      margin-right: 8rem;
   }
`;
