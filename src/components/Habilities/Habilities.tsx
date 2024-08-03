import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import { HabilitiesStyle } from './habilitiesStyles';
import data from '@/data/data.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

const Habilities = () => {
   const { habilities } = data;
   const { t } = useTranslation();
   const [itensNumber, setItensNumber] = React.useState(24);
   const [isMobile, setIsMobile] = React.useState(itensNumber == 12 ?? true);

   React.useEffect(() => {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
         setItensNumber(12);
         setIsMobile(true);
         return;
      }
      setItensNumber(24);
      setIsMobile(false);
   }, []);

   const motionProps = (
      initialY: number,
      finalY: number,
      duration: number
   ) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.1,
         duration: duration,
         delay: 0.2,
      },
   });

   return (
      <HabilitiesStyle id={t('Habilities.habilities')}>
         <Title
            firstWord={t('Habilities.my')}
            secondWord={t('Habilities.habilities')}
            firstColor='#FFF'
            secondColor='rgb(var(--primary-blue))'
         />
         <motion.div
            className='stacks'
            {...motionProps(100, 0, 1)}
            transition={{
               staggerChildren: 0.5,
               type: 'spring',
               duration: 0.5
            }}
         >
            {habilities.map(({ languages }, i) => (
               <div className='stack_box' key={i}>
                  {languages?.map((lang, j) => (
                     <AnimatePresence key={lang.id}>
                        {j < itensNumber && (
                           <motion.div
                              className='stack'
                              initial={{ opacity: 0, y: 0 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 100 }}
                              transition={{ duration: 0.5 }}
                           >
                              <Image
                                 src={lang.logo}
                                 alt={lang.language_name}
                                 width={44}
                                 height={44}
                                 className='stack_icon'
                                 style={
                                    lang.bgWhite
                                       ? {
                                            backgroundColor: 'white',
                                            padding: '.2rem',
                                         }
                                       : {}
                                 }
                              />
                              <h2 className='stack_name'>
                                 {lang.language_name}
                              </h2>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  ))}
               </div>
            ))}
         </motion.div>
         <div className='view_area'>
            {itensNumber < habilities[0].languages.length && (
               <button
                  className='view'
                  onClick={() => setItensNumber(itensNumber + 12)}
               >
                  {t('Habilities.viewmore')}
                  <IoChevronDownSharp className='chevron' />
               </button>
            )}
            {itensNumber > 12 && isMobile && (
               <button
                  className='view'
                  onClick={() => setItensNumber(itensNumber - 12)}
               >
                  {t('Habilities.viewless')}
                  <IoChevronUpSharp className='chevron' />
               </button>
            )}
         </div>
      </HabilitiesStyle>
   );
};

export default Habilities;
