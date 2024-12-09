import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { Form } from './styles';
import Input from './Input';
import Button from '../Buttons/Button';
import { validateForm } from '@/utils/validateForm';
import { Slide, toast } from 'react-toastify';
import CustomSelect from '../CustomSelect';
import { FormData } from '@/types/formData';
import { sendEmail } from '@/utils/sendEmail';

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

      const { isValid, errors } = validateForm(formData);

      if (!isValid) {
         setErrors(errors);
         return;
      }

      setErrors({});
      try {
         sendEmail(e, form);
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
         toast('Erro ao enviar!', {
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
      } finally {
      }
   };

   return (
      <Form ref={form} onSubmit={handleSubmit}>
         <Input
            label='Como devo te chamar ?'
            name='name'
            onChange={handleChange}
            placeholder='Digite seu nome'
            value={formData.name}
            type='text'
            error={errors.name || ''}
         />

         <Input
            label='Seu E-mail ?'
            name='email'
            onChange={handleChange}
            placeholder='Digite seu e-mail'
            value={formData.email}
            required
            type='text'
            error={errors.email || ''}
         />

         <Input
            label='Telefone (opcional)'
            name='phone'
            onChange={handleChange}
            placeholder='Digite seu número de telefone'
            value={formData.phone || ''}
            type='text'
         />

         <label className='select'>
            Tipo de contato preferido:
            <CustomSelect
               name='preferredContact'
               value={formData.preferredContact}
               onChange={handleChange}
               placeholder='Selecione uma opção'
               options={[
                  {
                     value: '',
                     label: 'Selecione uma opção',
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
            Sua mensagem:
            <textarea
               name='message'
               value={formData.message}
               onChange={handleChange}
               placeholder='Descreva sua necessidade ou projeto'
               required
               className={errors.message && 'textarea-error'}
            ></textarea>
            {errors.message && <span className='error'>{errors.message}</span>}
         </label>

         <Button onClick={handleSubmit} className='button' content='Enviar' />
      </Form>
   );
};

export default ContactForm;
