import React from 'react';
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
   fill?: string;
}

const Habilities = () => {
   const { habilities } = data;

   const motionProps = (initialY: number, finalY: number, duration: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: duration,
         delay: 0.2,
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
         <motion.div {...motionProps(100, 0,  0.5)} className='stacks'>
            {habilities.map(({ type, languages }, i: number) => (
               <>
                  <motion.div {...motionProps(100, 0, 1)} className='stack_box'>
                     <div key={i} className='stack_type'><h3>{type}</h3></div>
                     {languages?.map((lang: IRenderProps) => (
                        <div className='stack' key={lang.id}>
                           <Image
                              src={lang.logo}
                              alt={lang.language_name}
                              width={64}
                              height={64}
                              className='stack_icon'
                           />
                           <h2 className='stack_name'>{lang.language_name}</h2>
                        </div>
                     ))}
                  </motion.div>
               </>
            ))}
         </motion.div>
         <div className='more_habilities'>
            <Button
               title='Minhas Certificações'
               url='/certifications'
               bgColor='rgb(var(--primary-pink))'
               _blank={false}
               className='button'
            />
         </div>
      </HabilitiesStyle>
   );
};

export default Habilities;
