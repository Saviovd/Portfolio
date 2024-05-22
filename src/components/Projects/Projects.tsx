import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { ProjectsStyle } from './projectStyles';
import data from '@/data/data.json';
import Button from '../Button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const { projects } = data;

const Projects = () => {
   const [active, setActive] = useState(0);
   const [direction, setDirection] = useState(0);
   const { t } = useTranslation();

   const variants = {
      enter: (direction: number) => ({
         x: direction > 0 ? 1000 : -1000,
         opacity: 0
      }),
      center: {
         x: 0,
         opacity: 1,
         transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
         }
      },
      exit: (direction: number) => ({
         x: direction < 0 ? 1000 : -1000,
         opacity: 0,
         transition: {
            duration: 0.5
         }
      })
   };

   const handleNext = () => {
      setDirection(1);
      setActive((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
   };

   const handlePrev = () => {
      setDirection(-1);
      setActive((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
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
         <motion.div className='projects'>
            <AnimatePresence custom={direction} mode='wait'>
               <motion.div
                  className='project_container'
                  key={projects[active].id}
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
               >
                  {projects[active].image ? (
                     <Image
                        className='project_photo'
                        src={projects[active].image}
                        alt='project image'
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
               </motion.div>
            </AnimatePresence>
         </motion.div>
         <div className='numeration'>
            <BiChevronLeft className='pagination' onClick={handlePrev} />
            {projects.map((project) => (
               <span
                  key={project.code}
                  className={`number ${
                     active === project.id - 1 ? 'isActive' : ''
                  }`}
                  onClick={() => {
                     setDirection(project.id - 1 > active ? 1 : -1);
                     setActive(project.id - 1);
                  }}
               >
                  {project.id}
               </span>
            ))}
            <BiChevronRight className='pagination' onClick={handleNext} />
         </div>
      </ProjectsStyle>
   );
};

export default Projects;
