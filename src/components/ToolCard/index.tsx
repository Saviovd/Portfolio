import { Icon } from '../Icon';
import { IToolprops } from '@/types/tool';
import { Card, ToolModal } from './styles';
import { useState } from 'react';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import { AnimatePresence } from 'framer-motion';

const ToolCard = ({ name, icon, description }: IToolprops) => {
   const locale = i18next.language as Locale;
   const [openModal, setOpenModal] = useState(false);

   const toggleModal = () => {
      setOpenModal(!openModal);
   };
   return (
      <>
         <Card onClick={toggleModal}>
            <Icon
               nameIcon={icon || 'CgUnavailable'}
               propsIcon={{
                  size: 60,
                  className: `icon ${
                     icon?.toLowerCase().includes('next') && 'next'
                  }`,
               }}
            />
         </Card>
         <AnimatePresence>
            {openModal && (
               <ToolModal
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  onClick={() => setOpenModal(false)}
               >
                  <div className='tool-details'>
                     <Icon
                        nameIcon={icon || 'CgUnavailable'}
                        propsIcon={{
                           size: 120,
                           className: `icon ${
                              icon?.toLowerCase().includes('next') && 'next'
                           }`,
                        }}
                     />
                     <h3 className='name'>{name}</h3>
                     <p className='description'>
                        {description
                           ? description[locale]
                           : 'no description avaiable'}
                     </p>
                  </div>
               </ToolModal>
            )}
         </AnimatePresence>
      </>
   );
};

export default ToolCard;
