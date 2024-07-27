import React, { useState } from 'react';
import Title from '../Title/Title';
import { ProjectsContainer, ProjectsStyle } from './projectStyles';
import data from '@/data/projects.json';
import { useTranslation } from 'react-i18next';
import ProjectItem from '../ProjectItem';
import { ProjectProps } from '@/types/project';
import useWindowSize from '@/hooks/useWindowSize';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from '../ProjectModal';
import { AnimatePresence } from 'framer-motion';

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

   const dataAsProjectsData = data as unknown as ProjectsData;
   const { projects } = dataAsProjectsData;

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
   };

   const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   };

   const openModal = (project: ProjectProps) => {
      setSelectedProject(project);
      setModalOpen(true);
   };

   return (
      <ProjectsStyle id={t('Projects.projects')}>
         <Title
            firstColor='rgb(var(--secondary-white))'
            secondColor='rgb(var(--primary-pink))'
            firstWord={
               t('Projects.projects') === 'projects'
                  ? t('Projects.recent')
                  : t('Projects.projects')
            }
            secondWord={
               t('Projects.recent') === 'recent'
                  ? t('Projects.projects')
                  : t('Projects.recent')
            }
         />
         {width > 768 ? (
            <ProjectsContainer
               initial='hidden'
               animate='visible'
               variants={containerVariants}
            >
               {projects.length > 0 ? (
                  projects.map((project) => (
                     <React.Fragment key={project.code}>
                        <ProjectItem
                           project={project}
                           action={() => openModal(project)}
                        />
                     </React.Fragment>
                  ))
               ) : (
                  <div>No projects available</div>
               )}
            </ProjectsContainer>
         ) : (
            <Swiper
               spaceBetween={0}
               slidesPerView={1}
               speed={400}
               loop={true}
               navigation={true}
               effect={'flip'}
               pagination={pagination}
               modules={[Pagination, Navigation]}
               className='swiper'
            >
               {projects.length > 0 ? (
                  projects.map((project) => (
                     <SwiperSlide className='swiper-slide' key={project.code}>
                        <ProjectItem
                           project={project}
                           action={() => openModal(project)}
                        />
                     </SwiperSlide>
                  ))
               ) : (
                  <div>No projects available</div>
               )}
            </Swiper>
         )}
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
