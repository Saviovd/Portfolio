import React from 'react';
import Title from '../Title';
import { ProjectsContainer, ProjectsStyle } from './styles';
import data from '@/data/projects.json';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectCard from '../ProjectCard';
import { IoRocketOutline } from 'react-icons/io5';
import ButtonLink from '../Buttons/ButtonLink';
const { projects } = data;

const Projects: React.FC = () => {
   const { t } = useTranslation();

   return (
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
            {projects.slice(0, 7).map((project) => (
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
         <ButtonLink
            content='Ver mais projetos'
            url='/projects'
            className='more'
            icon={<IoRocketOutline />}
         />
      </ProjectsStyle>
   );
};

export default Projects;
