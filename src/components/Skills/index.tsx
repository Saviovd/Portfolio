import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../Title';
import { HabilitiesStyle } from './styles';
import data from '@/data/skills.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode } from 'react-icons/fa';
import { Locale } from '@/types/types';
import useWindowSize from '@/hooks/useWindowSize';
import Button from '../Buttons/Button';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface ISkillProps {
   id: number;
   type: string;
   language_name: string;
   logo: string;
   description?: Record<Locale, string>;
}

const { skills } = data;

const Skills = () => {
   const { t } = useTranslation();
   const { width } = useWindowSize();
   const [visibleSkills, setVisibleSkills] = useState(18);

   const isMobile = width <= 768;

   const displayedSkills = isMobile ? visibleSkills : skills.length;

   const containerVariants = {
      expanded: { height: '100%' },
      collapsed: { height: 0 },
   };

   const containerTransition = {
      type: 'spring',
      duration: 0.5,
      bounce: 0.1,
   };

   return (
      <HabilitiesStyle id={t('Habilities.habilities')}>
         <Title text='Skills' icon={<FaCode />} className='section-title' />
         <motion.div
            className='stacks'
            variants={containerVariants}
            animate={
               isMobile
                  ? visibleSkills < skills.length
                     ? 'expanded'
                     : 'collapsed'
                  : 'expanded'
            }
            transition={containerTransition}
            style={{ overflow: 'hidden' }}
         >
            <AnimatePresence>
               {skills.slice(0, displayedSkills).map((skill: ISkillProps) => (
                  <motion.div
                     className='stack'
                     key={skill.id}
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 60 }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     <Image
                        alt={`${skill.language_name} logo`}
                        src={skill.logo}
                        width={40}
                        height={40}
                        quality={100}
                        className='logo'
                     />
                     <p className='name'>{skill.language_name}</p>
                  </motion.div>
               ))}
            </AnimatePresence>
         </motion.div>
         {isMobile && visibleSkills > 18 && (
            <Button
               content={t('Habilities.viewless')}
               onClick={() => setVisibleSkills(12)}
               textTransform='capitalize'
               icon={<IoIosArrowUp />}
               className='button'
            />
         )}
         {isMobile && visibleSkills < skills.length && (
            <Button
               content={t('Habilities.viewmore')}
               onClick={() => setVisibleSkills(skills.length)}
               textTransform='capitalize'
               icon={<IoIosArrowDown />}
               className='button'
            />
         )}
      </HabilitiesStyle>
   );
};

export default Skills;
