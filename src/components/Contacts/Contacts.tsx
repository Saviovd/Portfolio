import React from 'react';
import data from '@/data/social.json';
import Title from '../Title';
import { ContactStyle } from './contactsStyles';
import { motion } from 'framer-motion';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { MdOutlineEmail } from 'react-icons/md';
import ContactForm from '../ContactForm';
import { Icon } from '../Icon';

const { contact } = data;

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
         toast.success(t('Contacts.copied'), {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
         });
      } catch (err) {
         console.error('Falha ao copiar o texto', err);
      }
   };

   return (
      <>
         <ContactStyle id='contact'>
            <Title
               className='section-title'
               text={t('Contacts.title')}
               icon={<MdOutlineEmail />}
            />
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
               {contact.map(({ icon, name, type, url }, i) => (
                  <div className={`contact_card`} key={i}>
                     {url !== '' ? (
                        <a
                           href={url ? url : ''}
                           target='_blank'
                           content={t('Contacts.visit') + ' ' + type}
                           className='contact_item'
                           key={i}
                        >
                           <Icon
                              nameIcon={icon}
                              propsIcon={{ size: 50, className: 'icon_box' }}
                           />
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
                           <Icon
                              nameIcon={icon}
                              propsIcon={{ size: 50, className: 'icon_box' }}
                           />
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
