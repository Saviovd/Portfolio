import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { HabilitiesStyle } from './habilitiesStyles';
import data from '@/data/data.json';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

interface IRenderProps {
   id: string;
   language_name: string;
   logo: string;
   fill?: string
}

const Habilities = () => {
   const { habilities } = data;
   const [renderHabilities, setRenderHabilities] = useState<string | undefined>('Front-End');
   const [renderItens, setRenderItens] = useState<IRenderProps[]>(habilities[0].languages);
   const [isOpen, setIsOpen] = useState('is_Open');

   function findHabilities(value: string) {
      const type = habilities.find((hab) => hab.type === value);
      setRenderHabilities(type?.type);
      if (type && type.languages !== renderItens) {
         setRenderItens(type.languages);
         setIsOpen('is_Open');
         return;
      } else {
         setIsOpen('habilities_box');
      }
   }

   const filteredHabilities = habilities.filter(
      ({ type }) => type === renderHabilities || renderHabilities === ''
   );

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2
      },
   });


   return (
      <HabilitiesStyle id='habilidades'>
         <Title
            firstWord='Minhas'
            secondWord='Habilidades'
            firstColor='#FFF'
            secondColor='rgb(var(--primary-blue))'
         />
         <motion.div  {...motionProps(100, 0)}
            className={`stacks ${
               renderHabilities === 'Front-End' || isOpen === 'is_Open' ? 'grid_IsOpen' : ''
            }`}
         >
            {habilities.map(({ type }, i: number) => (
               <h3
                  key={i}
                  className={`habilities_title ${isOpen && renderHabilities === type ? 'is_Open' : ''}`}
                  onClick={(e) => findHabilities(e.currentTarget.innerText)}
               >
                  {type}
               </h3>
            ))}
         </motion.div>
         <motion.div  {...motionProps(100, 0)} className='stack_container'>
            {filteredHabilities && (
               <>
                  {renderItens?.map((lang: IRenderProps) => (
                     <div className='stack' key={lang.id}>
                        <Image
                           style={{fill: lang.fill}}
                           src={lang.logo}
                           alt={lang.language_name}
                           width={64}
                           height={64}
                           className='stack_icon'
                        />
                        <h2 className='stack_name'>{lang.language_name}</h2>
                     </div>
                  ))}
               </>
            )}
         </motion.div>
         <div className='more_habilities'>
            <Button
               title='Minhas Certificações'
               url='/certifications'
               bgColor='rgb(var(--primary-pink))'
               _blank={false}
            />
         </div>
      </HabilitiesStyle>
   );
};

export default Habilities;
