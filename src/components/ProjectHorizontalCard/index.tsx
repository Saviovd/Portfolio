import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import useWindowSize from '@/hooks/useWindowSize';
import { ProjectProps } from '@/types/project';
import { FaPlus } from 'react-icons/fa';
import Button from '../Buttons/Button';
import { HorizonntalContainer } from './styles';

interface ProjectItemProps {
   project: ProjectProps;
   action?: React.MouseEventHandler<HTMLDivElement>;
}

const HorizontalCard: React.FC<ProjectItemProps> = ({ project, action }) => {
   const { t } = useTranslation();
   const windowSize = useWindowSize();

   return (
      <HorizonntalContainer
         className='project_container'
         key={project.code}
         onClick={action}
      >
         <Image
            className='cover'
            src={project.screens}
            alt={`${project.name} in browser image`}
            width={windowSize.width > 768 ? 1200 : 600}
            height={windowSize.width > 768 ? 250 : 300}
            priority
            quality={100}
         />
         <div className='languages'>
            {project.stacks.map((stack, index) => (
               <Image
                  key={index}
                  alt={stack.name + ' logo'}
                  src={stack.src}
                  width={30}
                  height={30}
                  style={{
                     background: stack.background ? 'white' : '',
                     padding: stack.padding ? '0 1px' : '',
                     borderRadius: stack.rounded ? '50%' : ''
                  }}
               />
            ))}
         </div>
         <motion.div className='project-infos'>
            <h3 className='project-name'>{project.name}</h3>
            <Button
               className='project-button'
               content={t('Projects.more')}
               icon={<FaPlus />}
               bgColor='rgba(var(--bg-black),0.5)'
               textTransform='uppercase'
               strColor='rgba(var(--secondary-white))'
               border='1px solid rgba(var(--primary-blue))'
            />
         </motion.div>
      </HorizonntalContainer>
   );
};

export default HorizontalCard;
