import { FormData } from '@/types/formData';

export const validateForm = (formData: FormData) => {
   const newErrors: Partial<FormData> = {};

   if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório.';
   }

   if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'O e-mail fornecido não é válido.';
   }

   if (!formData.message.trim()) {
      newErrors.message = 'A mensagem é obrigatória.';
   }

   return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors,
   };
};
