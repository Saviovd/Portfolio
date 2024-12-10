/* eslint-disable no-console */
import emailjs from '@emailjs/browser';
import { FormEvent } from 'react';
import { Slide, toast } from 'react-toastify';
import 'dotenv/config';
import { TFunction } from 'i18next';
export const sendEmail = (
   e: FormEvent,
   form: React.MutableRefObject<HTMLFormElement | null>,
   t: TFunction
) => {
   e.preventDefault();

   const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
   const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
   const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

   if (!form.current) {
      console.error('Form reference is null.');
      return;
   }
   if (!serviceId || !templateId || !publicKey) {
      console.error('Missing emailjs configuration.');
      return;
   }

   emailjs
      .sendForm(serviceId, templateId, form.current, {
         publicKey: publicKey,
      })
      .then(
         () => {
            console.log('SUCCESS!');
            toast(t('Contacts.sendSuccess'), {
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
         },
         (error) => {
            console.log('FAILED...', error.text);
            toast(t('Contacts.sendFailed'), {
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
         }
      );
};
