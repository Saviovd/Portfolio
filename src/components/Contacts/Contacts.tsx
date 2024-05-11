import React from 'react';
import data from '@/data/data.json';
import Image from 'next/image';
import Title from '../Title/Title';
import { ContactStyle } from './contactsStyles';
import { motion } from 'framer-motion';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { socials } = data;

const Contacts = () => {
   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2,
      },
   });
   const copyToClipboard = async (text: string) => {
      try {
         await navigator.clipboard.writeText(text);
         toast('E-mail copiado', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Slide,
         });
      } catch (err) {
         console.error('Falha ao copiar o texto', err);
      }
   };

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
                  duration: 0.4,
               }}
               className='contact_container'
            >
               {socials.map(({ icon, name, type, url }, i) => (
                  <div className={`contact_card`} key={i}>
                     {url !== '' ? (
                        <a
                           href={url ? url : ''}
                           target='_blank'
                           content={type}
                           className='contact_item'
                           key={i}
                        >
                           <div className='icon_box'>
                              <Image
                                 className='icon'
                                 src={icon}
                                 alt='contact icon'
                                 width={60}
                                 height={60}
                              />
                           </div>
                           <span className='type'>{type}</span>
                           <span data-name={name} className='name'>
                              {name}
                           </span>
                        </a>
                     ) : (
                        <div
                           content={type === 'E-mail' ? name : type}
                           key={i}
                           className='contact_item'
                           onClick={() =>
                              type === 'E-mail' ? copyToClipboard(name) : ''
                           }
                        >
                           <div className='icon_box'>
                              <Image
                                 className='icon'
                                 src={icon}
                                 alt='contact icon'
                                 width={60}
                                 height={60}
                              />
                           </div>
                           <span className='type'>{type}</span>
                           <span data-name={name} className='name'>
                              {name}
                           </span>
                        </div>
                     )}
                  </div>
               ))}
            </motion.div>
         </ContactStyle>
         <ToastContainer
            position='top-center'
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
         />
      </>
   );
};

export default Contacts;
