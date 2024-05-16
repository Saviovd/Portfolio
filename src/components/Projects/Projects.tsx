import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { ProjectsStyle } from './projectStyles';
import data from '@/data/data.json';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const { projects } = data;

const Projects = () => {
   const [active, setActive] = useState(0);
   const { t } = useTranslation();

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.1,
         duration: 1,
         delay: 0.2,
      },
   });

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
         <motion.div className='projects'
         {...(typeof window !== 'undefined' && window.innerWidth > 768
         ? { ...motionProps(200, 0) }
         : { ...motionProps(150, 0) })}>
            <div
               className='project_container'
            >
               {projects[active].image ? (
                  <Image
                     className='project_photo'
                     src={projects[active].image}
                     alt='ok'
                     width={800}
                     height={400}
                  />
               ) : (
                  <h3 className='project_name'>{projects[active].name}</h3>
               )}
               <div className='about_project'>
                  <h3 className='project_name'>{projects[active].name}</h3>

                  <p className='project_description'>
                     {projects[active].name ===
                     t(`Projects.${projects[active].code}.name`)
                        ? t(`Projects.${projects[active].code}.description`)
                        : projects[active].description}
                  </p>

                  <div className='links_to_project'>
                     <Button
                        className='project_button'
                        title={t('Projects.projectButton')}
                        url={projects[active].url}
                        _blank={true}
                     />
                     <Button
                        className='project_button'
                        title={t('Projects.repositoryButton')}
                        url={projects[active].repository}
                        _blank={true}
                     />
                  </div>
                  <span className='dev_by'>{t('Projects.devBy')}</span>
                  <ul className='stack_list'>
                     {projects[active].stacks.map(
                        (stack: string, i: number) => (
                           <li className='stack' key={i}>
                              <Image
                                 src={stack}
                                 alt='stack logo'
                                 width={40}
                                 height={40}
                                 className='stack_logo'
                              />
                           </li>
                        )
                     )}
                  </ul>
               </div>
            </div>
         </motion.div>
         <div className='numeration'>
            <BiChevronLeft
               className='pagination'
               onClick={() => {
                  if (active > 0) {
                     setActive(active - 1);
                     return;
                  }
                  setActive(projects.length - 1);
               }}
            />
            {projects.map((project) => (
               <span
                  key={project.code}
                  className={`number ${
                     active === project.id - 1 ? 'isActive' : ''
                  }`}
                  onClick={() => setActive(project.id - 1)}
               >
                  {project.id}
               </span>
            ))}
            <BiChevronRight
               className='pagination'
               onClick={() => {
                  if (active < projects.length - 1) {
                     setActive(active + 1);
                     return;
                  }
                  setActive(0);
               }}
            />
         </div>
      </ProjectsStyle>
   );
};

export default Projects;
