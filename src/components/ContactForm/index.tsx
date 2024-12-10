import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { Form } from './styles';
import Input from './Input';
import Button from '../Buttons/Button';
import { validateForm } from '@/utils/validateForm';
import CustomSelect from '../CustomSelect';
import { FormData } from '@/types/formData';
import { sendEmail } from '@/utils/sendEmail';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
   const form = useRef<HTMLFormElement | null>(null);
   const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      phone: '',
      message: '',
      projectType: '',
      budget: undefined,
      deadline: '',
      preferredContact: '',
   });
   const [errors, setErrors] = useState<Partial<FormData>>({});
   const { t } = useTranslation();

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
   ) => {
      setErrors({});
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: name === 'budget' ? parseFloat(value) || undefined : value,
      }));
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      const { isValid, errors } = validateForm(formData, t);

      if (!isValid) {
         setErrors(errors);
         return;
      }

      setErrors({});
      try {
         sendEmail(e, form, t);
         setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            projectType: '',
            budget: undefined,
            deadline: '',
            preferredContact: '',
         });
      } catch (error) {
         console.error('error on Submit form:', error);
      } finally {
      }
   };

   return (
      <Form ref={form} onSubmit={handleSubmit}>
         <Input
            label={t('Contacts.form.name.label')}
            name='name'
            onChange={handleChange}
            placeholder={t('Contacts.form.name.placeholder')}
            value={formData.name}
            type='text'
            error={errors.name || ''}
         />

         <Input
            label={t('Contacts.form.email.label')}
            name='email'
            onChange={handleChange}
            placeholder={t('Contacts.form.email.placeholder')}
            value={formData.email}
            required
            type='text'
            error={errors.email || ''}
         />

         <Input
            label={t('Contacts.form.phone.label')}
            name='phone'
            onChange={handleChange}
            placeholder={t('Contacts.form.phone.placeholder')}
            value={formData.phone || ''}
            type='text'
         />

         <label className='select'>
            {t('Contacts.form.preferredContact.label')}
            <CustomSelect
               name='preferredContact'
               value={formData.preferredContact}
               onChange={handleChange}
               placeholder={t('Contacts.form.preferredContact.placeholder')}
               options={[
                  {
                     value: '',
                     label: t('Contacts.form.preferredContact.placeholder'),
                  },
                  {
                     value: 'email',
                     label: 'E-mail',
                  },
                  {
                     value: 'whatsapp',
                     label: 'WhatsApp',
                  },
               ]}
            />
         </label>

         <label className={`text-area ${errors.message && 'error'}`}>
         {t('Contacts.form.message.label')}
            <textarea
               name='message'
               value={formData.message}
               onChange={handleChange}
               placeholder={t('Contacts.form.message.placeholder')}
               required
               className={errors.message && 'textarea-error'}
            ></textarea>
            {errors.message && <span className='error'>{errors.message}</span>}
         </label>

         <Button onClick={handleSubmit} className='button' content= {t('Contacts.button')} />
      </Form>
   );
};

export default ContactForm;
