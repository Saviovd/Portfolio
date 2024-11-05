import React, { useState } from 'react';
import Title from '../Title';
import { HabilitiesStyle } from './styles';
import data from '@/data/tools.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RiCodeSSlashFill } from 'react-icons/ri';
import ToolCard from '../ToolCard';
import { IToolprops } from '@/types/tool';
import useWindowSize from '@/hooks/useWindowSize';
import PaginationControls from '../PaginationControls';

const { tools } = data;
const ITEMS_PER_PAGE = 16;

const Skills = () => {
   const { t } = useTranslation();
   const { width } = useWindowSize();
   const [currentPage, setCurrentPage] = useState(1);

   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const endIndex = startIndex + ITEMS_PER_PAGE;
   const paginatedTools = tools.slice(startIndex, endIndex);

   const nextPage = () => {
      setCurrentPage((prev) =>
         prev < Math.ceil(tools.length / ITEMS_PER_PAGE) ? prev + 1 : prev
      );
   };

   const prevPage = () => {
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
   };

   return (
      <HabilitiesStyle id={t('Habilities.habilities')}>
         <Title
            text='Skills'
            icon={<RiCodeSSlashFill />}
            className='section-title'
         />
         <motion.ul className='stacks'>
            <AnimatePresence>
               {(width > 1024 ? tools : paginatedTools).map(
                  ({ name, icon, description }: IToolprops, i: number)   => (
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

         {width <= 1024 && (
            <PaginationControls
               currentPage={currentPage}
               totalPages={Math.ceil(tools.length / ITEMS_PER_PAGE)}
               onNextPage={nextPage}
               onPreviousPage={prevPage}
            />
         )}
      </HabilitiesStyle>
   );
};

export default Skills;
