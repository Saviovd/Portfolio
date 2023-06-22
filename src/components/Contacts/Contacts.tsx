import React from 'react';
import data from '@/data/data.json';
import Image from 'next/image';
import Title from '../Title/Title';
import { ContactStyle } from './contactsStyles';
import { motion } from 'framer-motion';

const { contacts } = data;

const Contacts = () => {

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2
      },
   });

   return (
      <>
         <ContactStyle id='contatos'>
            <Title
               secondWord='Contatos'
               firstColor='rgb(var(--primary-blue))'
               firstWord='Meus'
            />
            <motion.div
               {...motionProps(100, 0)}
               transition={{
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                  type: 'spring',
                  duration: 0.4
               }}

               className='contact_container'>
               {contacts.map(({ icon, name, type, url, side }, i) => (
                  <div  content={type} className={`contact_card ${side}`} key={i} >
                     <div className='icon_box'>
                        <Image
                           className='icon'
                           src={icon}
                           alt='contact icon'
                           width={45}
                           height={45}
                        />
                     </div>
                     <span className='type'>{type}</span>
                     <a data-name={name} href={url} className='name' target='_blank'>
                        {name}
                     </a>
                  </div>
               ))}
            </motion.div>
         </ContactStyle>
      </>
   );
};

export default Contacts;
