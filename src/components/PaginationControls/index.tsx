import { AnimatePresence } from 'framer-motion';
import { PaginationControlsStyles } from './styles';
import { useTranslation } from 'react-i18next';

interface IPaginationControlsProps {
   currentPage: number;
   totalPages: number;
   onNextPage: () => void;
   onPreviousPage: () => void;
}

const PaginationControls = ({
   currentPage,
   totalPages,
   onNextPage,
   onPreviousPage,
}: IPaginationControlsProps) => {
   const { t } = useTranslation();

   return (
      <AnimatePresence>
         {totalPages > 1 && (
            <PaginationControlsStyles
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
            >
               <button
                  onClick={onPreviousPage}
                  disabled={currentPage === 1}
                  className='previous'
               >
                  {t('Courses.prev')}
               </button>
               <div className='pages'>
                  <span className='current'>{currentPage}</span>/
                  <span className='total'>{totalPages}</span>
               </div>
               <button
                  className='next'
                  onClick={onNextPage}
                  disabled={currentPage === totalPages}
               >
                  {t('Courses.next')}
               </button>
            </PaginationControlsStyles>
         )}
      </AnimatePresence>
   );
};

export default PaginationControls;
