import { AnimatePresence } from 'framer-motion';
import { PaginationControlsStyles } from './styles';

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
                  Anterior
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
                  Próximo
               </button>
            </PaginationControlsStyles>
         )}
      </AnimatePresence>
   );
};

export default PaginationControls;
