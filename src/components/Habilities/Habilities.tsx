import Image from 'next/image';
import Title from '../Title/Title';
import { HabilitiesStyle } from './habilitiesStyles';
import data from '@/data/data.json'
import React from 'react';

interface IRenderProps {
   language_name: string;
   logo: string;
}

const { habilities } = data
const Habilities = () => {
   const [renderHabilities, setRenderHabilities] = React.useState<string>();
   const [renderItens, setRenderItens] = React.useState<Array<IRenderProps>>([]);
   const [isOpen, setIsOpen] = React.useState('')

   function findHabilities(value: string) {
      const type = habilities.find((hab) => hab.type === value);
      setRenderHabilities(type?.type);
      if (type && type.languages !== renderItens) {
         setRenderItens(type.languages);
         setIsOpen('is_Open')
         return
      } else {
         setIsOpen('habilities_box')
         setRenderItens([])
      }

   }
   return (<>
      <HabilitiesStyle id='habilidades'>
         <Title
            firstWord='Minhas'
            secondWord='Habilidades'
            firstColor='#FFF'
            secondColor='rgb(var(--first-primary-color))'
         />

         <div className={`habilities_container ${isOpen === 'is_Open' ? 'grid_IsOpen' : ''}`}>
            <div className={`habilities_box ${renderHabilities === 'Front-End' ? isOpen : ''}`}>
               <h3 className='habilities_title' onClick={(e) => findHabilities(e.currentTarget.innerText)}>Front-End</h3>
               {renderHabilities === 'Front-End' &&
                  renderItens?.map((lang: IRenderProps, i: number) => (
                     <div className='stack_box' key={i}>
                     <Image src={lang.logo} alt={lang.language_name} width={64} height={64}/>
                     <h2>{lang.language_name}</h2>
                     </div>
                  ))
               }
            </div>
            <div className={`habilities_box ${renderHabilities === 'Back-End' ? isOpen : ''}`}>
               <h3 className='habilities_title' onClick={(e) => findHabilities(e.currentTarget.innerText)}>Back-End</h3>
               {renderHabilities === 'Back-End' &&
                  renderItens?.map((lang: IRenderProps, i: number) => (
                     <div className='stack_box' key={i}>
                     <Image src={lang.logo} alt={lang.language_name} width={64} height={64}/>
                     <h2>{lang.language_name}</h2>
                     </div>
                  ))
               }
            </div>
            <div className={`habilities_box ${renderHabilities === 'Banco de Dados' ? isOpen : ''}`}>
               <h3 className='habilities_title' onClick={(e) => findHabilities(e.currentTarget.innerText)}>Banco de Dados</h3>
               {renderHabilities === 'Banco de Dados' &&
                  renderItens?.map((lang: IRenderProps, i: number) => (
                     <div className='stack_box' key={i}>
                     <Image src={lang.logo} alt={lang.language_name} width={64} height={64}/>
                     <h2>{lang.language_name}</h2>
                     </div>
                  ))
               }
            </div>
            <div className={`habilities_box ${renderHabilities === 'Quality Assurance' ? isOpen : ''}`}>
               <h3 className='habilities_title' onClick={(e) => findHabilities(e.currentTarget.innerText)}>Quality Assurance</h3>
               {renderHabilities === 'Quality Assurance' &&
                  renderItens?.map((lang: IRenderProps, i: number) => (
                     <div className='stack_box' key={i}>
                     <Image src={lang.logo} alt={lang.language_name} width={64} height={64}/>
                     <h2>{lang.language_name}</h2>
                     </div>
                  ))
               }
            </div>

         </div>
      </HabilitiesStyle>
   </>)
}

export default Habilities;
