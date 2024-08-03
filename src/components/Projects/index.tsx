import React, { useState } from 'react';
import Title from '../Title';
import { ProjectsContainer, ProjectsStyle } from './styles';
import data from '@/data/projects.json';
import { useTranslation } from 'react-i18next';
import { ProjectProps } from '@/types/project';
import useWindowSize from '@/hooks/useWindowSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from '../ProjectModal';
import { AnimatePresence } from 'framer-motion';
import HorizontalCard from '../ProjectHorizontalCard';

interface ProjectsData {
   projects: ProjectProps[];
}

const Projects: React.FC = () => {
   const { t } = useTranslation();
   const { width } = useWindowSize();
   const [isModalOpen, setModalOpen] = useState(false);
   const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
      null
   );

   const handleCloseModal = () => {
      setModalOpen(false);
      setSelectedProject(null);
   };

   const dataAsProjectsData = data as ProjectsData;
   const { projects } = dataAsProjectsData;

   const pagination = {
      clickable: true,
      renderBullet: (index: number, className: string) =>
         `<span class="${className}">${index + 1}</span>`,
   };

   const openModal = (project: ProjectProps) => {
      setSelectedProject(project);
      setModalOpen(true);
   };

   const renderMobileProjects = () => (
      <Swiper
         spaceBetween={0}
         slidesPerView={1}
         speed={400}
         loop
         navigation
         effect='flip'
         pagination={pagination}
         modules={[Pagination, Navigation]}
         className='swiper'
      >
         {projects.length > 0 ? (
            projects.map((project) => (
               <SwiperSlide className='swiper-slide' key={project.code}>
                  <HorizontalCard
                     project={project}
                     action={() => openModal(project)}
                  />
               </SwiperSlide>
            ))
         ) : (
            <div>No projects available</div>
         )}
      </Swiper>
   );

   return (
      <ProjectsStyle id={t('Projects.projects')}>
         <Title
            firstColor='rgb(var(--secondary-white))'
            firstWord={t('Projects.projects')}
         />

         <ProjectsContainer
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 1 }}
         >
            {width && width < 768 ? (
               <>{renderMobileProjects()}</>
            ) : projects.length > 0 ? (
               projects.map((project) => (
                  <HorizontalCard
                     key={project.code}
                     project={project}
                     action={() => openModal(project)}
                  />
               ))
            ) : (
               <div>No projects available</div>
            )}
         </ProjectsContainer>
         <AnimatePresence>
            {isModalOpen && selectedProject && (
               <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  project={selectedProject}
               />
            )}
         </AnimatePresence>
      </ProjectsStyle>
   );
};

export default Projects;
