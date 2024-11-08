import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectProps } from '@/types/project';
import { FaPlus } from 'react-icons/fa';
import Button from '../Buttons/Button';
import { HorizonntalContainer } from './styles';
import ProjectModal from '../ProjectModal';
import i18next from 'i18next';
import { Locale } from '@/types/types';

const ProjectCard = ({
   name,
   description,
   images,
   code,
   features,
   repository,
   services,
   stack,
   url,
   year,
}: ProjectProps) => {
   const [openModal, setOpenModal] = useState(false);
   const locale = i18next.language as Locale;


   const handleModalVisible = () => {
      setOpenModal(!openModal);
   };

   const project = {
      name,
      description,
      images,
      code,
      features,
      repository,
      services,
      stack,
      url,
      year,
   };

   return (
      <>
         <HorizonntalContainer onClick={handleModalVisible}>
            <Image
               className='cover'
               src={images?.desktop}
               alt={`${name} in browser image`}
               width={1200}
               height={300}
               priority
               quality={100}
            />
            <motion.div className='infos'>
               <h3 className='name'>{name}</h3>
               <h3 className='description'>{description[locale]}</h3>
               <Button
                  className={`button ${openModal && 'open-modal'}`}
                  content={''}
                  icon={<FaPlus />}
               />
            </motion.div>
         </HorizonntalContainer>
         {openModal && (
            <ProjectModal
               handleModalVisible={handleModalVisible}
               project={project}
            />
         )}
      </>
   );
};

export default ProjectCard;
