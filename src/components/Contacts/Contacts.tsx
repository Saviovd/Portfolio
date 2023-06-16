import React from 'react';
import data from '@/data/data.json';
import Image from 'next/image';
import Title from '../Title/Title';
import { ContactStyle } from './contactsStyles';

const { contacts } = data;

const Contacts = () => {
   return (
      <>
         <ContactStyle id='contatos'>
            <Title
               secondWord='Contatos'
               firstColor='rgb(var(--second-primary-color))'
               firstWord='Meus'
            />
            <div className='contact_container'>
               {contacts.map(({ icon, name, type, url, side }, i) => (
                  <div className={`contact_card ${side}`} key={i}>
                     <Image
                        className='icon'
                        src={icon}
                        alt='contact icon'
                        width={50}
                        height={90}
                     />
                     <span className='type'>{type}</span>
                     <a href={url} className='name' target='_blank'>
                        {name}
                     </a>
                  </div>
               ))}
            </div>
         </ContactStyle>
      </>
   );
};

export default Contacts;
