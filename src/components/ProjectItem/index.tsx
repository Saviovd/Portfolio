import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonLink from '../Buttons/ButtonLink';
import { useTranslation } from 'react-i18next';
import { Project } from './ProjectItemStyles';
import useWindowSize from '@/hooks/useWindowSize';
import { ProjectProps } from '@/types/project';
import { FaPlus } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';
import Button from '../Buttons/Button';

interface ProjectItemProps {
   project: ProjectProps;
   action?: React.MouseEventHandler<HTMLDivElement>;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, action }) => {
   const { t } = useTranslation();
   const windowSize = useWindowSize();

   return (
      <Project className='project_container' key={project.id} onClick={action}>
         <Image
            className='cover'
            src={project.image}
            alt={`${project.name} in browser image`}
            width={windowSize.width > 768 ? 1800 : 300}
            height={windowSize.width > 768 ? 800 : 600}
            priority
            quality={100}
         />
         <motion.div className='project-infos'>
            <h3 className='project-name'>{project.name}</h3>
            <div className='buttons'>
               <ButtonLink
                  className='project-button'
                  content={t('Projects.projectButton')}
                  fontSize={1.1}
                  url={project.url}
                  _blank={true}
                  bgColor='rgba(var(--primary-pink),0.5)'
                  textTransform='uppercase'
                  strColor='rgba(var(--secondary-white))'
                  icon={
                     <RxExternalLink
                        style={{ fill: 'rgba(var(--secondary-white), 0.7)' }}
                     />
                  }
                  border='1px solid rgba(var(--primary-pink))'
               />
               <Button
                  className='project-button'
                  content={t('Projects.more')}
                  fontSize={1.1}
                  icon={<FaPlus />}
                  bgColor='rgba(var(--bg-black),0.5)'
                  textTransform='uppercase'
                  strColor='rgba(var(--secondary-white))'
                  border='1px solid rgba(var(--primary-blue))'
               />
            </div>
         </motion.div>
      </Project>
   );
};

export default ProjectItem;
