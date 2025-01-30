import ButtonLink from '@/components/Buttons/ButtonLink';
import Title from '@/components/Title';
import i18next from 'i18next';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoHomeOutline, IoRocketOutline } from 'react-icons/io5';
import { ProjectsContainer, ProjectsStyle } from '@/components/Projects/styles';
import data from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

const { projects } = data;

const Container = styled.main`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   padding-top: 3rem;

   #projects {
      padding-top: 4rem;
   }
   .title {
      width: min-content;
      white-space: nowrap;
   }
   .button {
      width: min-content;
   }
`;

const ProjectsPage = () => {
   const { t } = useTranslation();
   return (
      <>
         <Head>
            <title>Sávio Almeida | Projects</title>
         </Head>
         <Container>
            <ButtonLink
               _blank={false}
               content='Back to Home'
               className='button'
               url={`/${i18next.language}`}
               icon={<IoHomeOutline size={15} />}
            />
            <ProjectsStyle id='projects'>
               <Title
                  text={t('Projects.projects')}
                  icon={<IoRocketOutline />}
                  className='section-title'
               />

               <ProjectsContainer
                  initial={{ y: 400, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 1 }}
               >
                  {projects.map((project) => (
                     <li className='item' key={project.code}>
                        <ProjectCard
                           name={project.name}
                           description={project.description}
                           images={project.images}
                           url={project.url}
                           repository={project.repository}
                           code={project.code}
                           features={project.features}
                           stack={project.stack}
                           year={project.year}
                           services={project.services}
                        />
                     </li>
                  ))}
               </ProjectsContainer>
            </ProjectsStyle>
         </Container>
         <Footer />
      </>
   );
};

export default ProjectsPage;
