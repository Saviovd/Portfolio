import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { ProjectsStyle } from './projectStyles';
import data from '@/data/data.json';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const { projects } = data;

const Projects = () => {
   const [active, setActive] = useState(0);

   const motionProps = (initialX: number, finalX: number) => ({
      initial: { opacity: 0, x: initialX },
      whileInView: { opacity: 1, x: finalX },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 1,
         delay: 0.2,
      },
   });

   return (
      <ProjectsStyle id='projetos'>
         <Title
            firstColor='rgb(var(--secondary-white))'
            secondColor='rgb(var(--primary-pink))'
            firstWord='Projetos'
            secondWord='Recentes'
         />

         <motion.div
            {...(typeof window !== 'undefined' && window.innerWidth > 768
               ? { ...motionProps(0, 0) }
               : { ...motionProps(-150, 0) })}
            className='project_container'
         >
            <div className='pagination'>
               <span
                  className={`one ${active === 0 ? 'isActive' : ''}`}
                  onClick={() => setActive(0)}
               >
                  1
               </span>
               <span
                  className={`two ${active === 1 ? 'isActive' : ''}`}
                  onClick={() => setActive(1)}
               >
                  2
               </span>
               <span
                  className={`three ${active === 2 ? 'isActive' : ''}`}
                  onClick={() => setActive(2)}
               >
                  3
               </span>
            </div>
            <Image
               className='project_photo'
               src={projects[active].image}
               alt='ok'
               width={800}
               height={400}
            />

            <motion.div
               {...(typeof window !== 'undefined' && window.innerWidth > 768
                  ? { ...motionProps(300, 0) }
                  : { ...motionProps(-300, 0) })}
               className='about_project'
            >
               <h3 className='project_name'>{projects[active].name}</h3>
               <p className='project_description'>
                  {projects[active].description}
               </p>
               <div className='links_to_project'>
                  <Button
                     title='Projeto'
                     url={projects[active].url}
                     _blank={true}
                  />
                  <Button
                     title='Repositório'
                     url={projects[active].repository}
                     _blank={true}
                  />
               </div>
               <span className='dev_by'>Desenvolvido com:</span>
               <ul className='stack_list'>
                  {projects[active].stacks.map((stack: string, i: number) => (
                     <li className='stack' key={i}>
                        <Image
                           src={stack}
                           alt='stack logo'
                           width={32}
                           height={32}
                           className='stack_logo'
                        />
                     </li>
                  ))}
               </ul>
            </motion.div>
         </motion.div>
         <div className='more_projects'>
            <Button
               title='Veja Mais!'
               url='/projects'
               bgColor='rgb(var(--primary-pink))'
               _blank={false}
            />
         </div>
      </ProjectsStyle>
   );
};

export default Projects;
