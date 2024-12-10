import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ProjectProps } from '@/types/project';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import { RxCode, RxExternalLink } from 'react-icons/rx';
import ButtonLink from '../Buttons/ButtonLink';
import { useTranslation } from 'react-i18next';
import {
   Buttons,
   CloseButton,
   FeatureItem,
   FeatureList,
   ModalContainer,
   ModalContent,
   ProjectImage,
   StackContainer,
   StackItem,
} from './ProjectModalStyles';
import { Icon } from '../Icon';
import data from '@/data/tools.json';
import BackEndList from '../BackEndList';

const { tools } = data;

interface ProjectModalProps {
   handleModalVisible: () => void;
   project: ProjectProps;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
   handleModalVisible,
   project,
}) => {
   const locale = i18next.language as Locale;
   const { t } = useTranslation();

   return (
      <ModalContainer
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3, delay: 0.2 }}
         onClick={handleModalVisible}
      >
         <ModalContent
            initial={{ y: -800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={(e) => e.stopPropagation()}
         >
            <CloseButton onClick={handleModalVisible}>
               <RiCloseFill />
            </CloseButton>

            <ProjectImage
               src={project.images.screens}
               alt={project.name}
               width={800}
               height={500}
               quality={100}
            />

            <div className='infos'>
               <StackContainer>
                  {project.stack.map((stack, index) => (
                     <StackItem key={index}>
                        {tools
                           .filter(
                              (tool) =>
                                 tool.name.toLowerCase() ===
                                 stack.name.toLowerCase()
                           )
                           .map((tool) => (
                              <Icon
                                 nameIcon={tool.icon || 'CgUnavailable'}
                                 propsIcon={{
                                    size: 40,
                                    className: `icon ${
                                       tool.icon
                                          .toLowerCase()
                                          .includes('next') && 'next'
                                    }`,
                                 }}
                                 key={tool.name}
                              />
                           ))}
                     </StackItem>
                  ))}
               </StackContainer>
               <h2 className='title'>{project.name}</h2>
               <div className='description'>{project.description[locale]}</div>
               <FeatureList>
                  <h4 className='features-title'>some features</h4>
                  {project.features[locale].map((feature, index) => (
                     <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
               </FeatureList>
               {project.services && <BackEndList project={project} />}
               <Buttons>
                  <ButtonLink
                     className='project-button'
                     content={'repository'}
                     url={project.repository}
                     _blank={true}
                     icon={<RxCode />}
                  />
                  <ButtonLink
                     className='project-button'
                     content={t('Projects.projectButton')}
                     url={project.url}
                     _blank={true}
                     icon={<RxExternalLink />}
                  />
               </Buttons>
            </div>
         </ModalContent>
      </ModalContainer>
   );
};

export default ProjectModal;
