import React from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { HabilitiesStyle } from './habilitiesStyles';
import data from '@/data/data.json';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

interface IRenderProps {
   id: string;
   language_name: string;
   logo: string;
   fill?: string;
   bgWhite?: boolean | undefined;
}

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
            }}
         >
            {habilities.map(({ languages }, i: number) => (
               <>
                  <div className='stack_box' key={i}>
                     {languages?.map(
                        (lang: IRenderProps, i: number) =>
                           i < itensNumber && (
                              <div className='stack' key={lang.id}>
                                 <Image
                                    src={lang.logo}
                                    alt={lang.language_name}
                                    width={44}
                                    height={44}
                                    className='stack_icon'
                                    style={
                                       lang.bgWhite && lang.bgWhite
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
                              </div>
                           )
                     )}
                  </div>
               </>
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
