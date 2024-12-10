import React from 'react';
import Title from '../Title';
import { HabilitiesStyle } from './styles';
import data from '@/data/tools.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RiCodeSSlashFill } from 'react-icons/ri';
import ToolCard from '../ToolCard';
import { IToolprops } from '@/types/tool';

const { tools } = data;

const Skills = () => {
   const { t } = useTranslation();

   return (
      <HabilitiesStyle id={t('Habilities.habilities')}>
         <Title
            text='Skills'
            icon={<RiCodeSSlashFill />}
            className='section-title'
         />
         <motion.ul className='stacks'>
            <AnimatePresence>
               {tools.map(
                  ({ name, icon, description }: IToolprops, i: number) => (
                     <motion.li className='stack' key={i}>
                        <ToolCard
                           name={name}
                           icon={icon}
                           description={description}
                        />
                     </motion.li>
                  )
               )}
            </AnimatePresence>
         </motion.ul>
      </HabilitiesStyle>
   );
};

export default Skills;
