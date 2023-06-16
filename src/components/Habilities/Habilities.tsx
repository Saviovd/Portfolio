import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../Title/Title';
import { HabilitiesStyle } from './habilitiesStyles';
import data from '@/data/data.json';
import Button from '../Button/Button';

interface IRenderProps {
   id: string;
   language_name: string;
   logo: string;
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

   return (
      <HabilitiesStyle id='habilidades'>
         <Title
            firstWord='Minhas'
            secondWord='Habilidades'
            firstColor='#FFF'
            secondColor='rgb(var(--first-primary-color))'
         />
         <div
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
         </div>
         <div className='stack_container'>
            {filteredHabilities && (
               <>
                  {renderItens?.map((lang: IRenderProps) => (
                     <div className='stack' key={lang.id}>
                        <Image
                           src={lang.logo}
                           alt={lang.language_name}
                           width={64}
                           height={64}
                        />
                        <h2 className='stack_name'>{lang.language_name}</h2>
                     </div>
                  ))}
               </>
            )}
         </div>
         <div className='more_habilities'>
            <Button
               title='Minhas Certificações'
               url='/certifications'
               bgColor='rgb(var(--second-primary-color))'
               _blank={false}
            />
         </div>
      </HabilitiesStyle>
   );
};

export default Habilities;
