import React from 'react';
import data from '@/data/social.json';
import Image from 'next/image';
import Title from '../Title';
import { ContactStyle } from './contactsStyles';
import { motion } from 'framer-motion';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { MdOutlineEmail } from 'react-icons/md';
import ContactForm from '../ContactForm';

const { socials } = data;

const Contacts = () => {
   const { t } = useTranslation();
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
         toast(t('Contacts.copied'), {
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
         <ContactStyle id='contact'>
            <Title className='section-title' text={t('Contacts.title')} icon={<MdOutlineEmail />} />
            <ContactForm />
            <motion.div
               {...motionProps(100, 0)}
               transition={{
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                  type: 'spring',
                  duration: 0.4,
               }}
               className='container'
            >
               {socials.map(({ icon, name, type, url }, i) => (
                  <div className={`contact_card`} key={i}>
                     {url !== '' ? (
                        <a
                           href={url ? url : ''}
                           target='_blank'
                           content={t('Contacts.visit') + ' ' + type}
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
                           content={t('Contacts.copy') + ' ' + type}
                           key={i}
                           className='contact_item'
                           onClick={() =>
                              type === 'e-mail' ? copyToClipboard(name) : ''
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
      </>
   );
};

export default Contacts;
