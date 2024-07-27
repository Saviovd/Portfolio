import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { ProjectProps } from '@/types/project';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import { RxCode, RxExternalLink } from 'react-icons/rx';
import ButtonLink from '../Buttons/ButtonLink';
import { useTranslation } from 'react-i18next';
import {
   BackEndContainer,
   Buttons,
   CloseButton,
   Description,
   FeatureItem,
   FeatureList,
   ModalContainer,
   ModalContent,
   ProjectImage,
   ServiceCard,
   StackContainer,
   StackImage,
   StackItem,
} from './ProjectModalStyles';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   project: ProjectProps;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
   const locale = i18next.language as Locale;
   const { t } = useTranslation();

   if (!isOpen) return null;

   return (
      <ModalContainer
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3 }}
      >
         <ModalContent
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            services={project.services}
         >
            <CloseButton onClick={onClose}>
               <RiCloseFill />
            </CloseButton>
            <h2 className='title'>{project.name}</h2>
            <Description>{project.description[locale]}</Description>
            <ProjectImage
               src={project.screens}
               alt={project.name}
               width={1000}
               height={800}
               quality={100}
               priority
            />
            <FeatureList>
               <h3 className='features-title'>{t('ProjectModal.features')}</h3>
               {project.features[locale].map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
               ))}
            </FeatureList>
            <StackContainer>
               {project.stacks.map((stack, index) => (
                  <StackItem
                     key={index}
                     background={stack.background}
                     rounded={stack.rounded}
                     padding={stack.padding}
                  >
                     <StackImage
                        src={stack.src}
                        alt={stack.name}
                        width={stack.width}
                        height={stack.height}
                        className='stack-logo'
                     />
                  </StackItem>
               ))}
            </StackContainer>
            {project.services && (
               <BackEndContainer>
                  <h3 className='services-title'>
                     {t('ProjectModal.services')}
                  </h3>
                  {project.services.map((service, index) => (
                     <ServiceCard
                        key={index}
                        href={service.repository}
                        target='_blank'
                     >
                        <h5 className='service-name'>{service.name}</h5>
                        <p className='service-description'>
                           -{' '}
                           {service.description
                              ? service.description
                              : 'No description avaiable'}
                        </p>
                     </ServiceCard>
                  ))}
               </BackEndContainer>
            )}
            <Buttons>
               <ButtonLink
                  className='project-button'
                  content={'repository'}
                  url={project.repository}
                  _blank={true}
                  fontSize={1.5}
                  icon={<RxCode />}
                  bgColor='rgba(var(--bg-black),0.5)'
                  textTransform='uppercase'
                  strColor='rgba(var(--secondary-white))'
                  border='1px solid rgba(var(--primary-blue))'
               />
               <ButtonLink
                  className='project-button'
                  content={t('Projects.projectButton')}
                  fontSize={1.5}
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
            </Buttons>
         </ModalContent>
      </ModalContainer>
   );
};

export default Modal;
