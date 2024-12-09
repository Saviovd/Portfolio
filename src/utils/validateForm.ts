import { FormData } from '@/types/formData';
import { TFunction } from 'i18next';

export const validateForm = (formData: FormData, t: TFunction) => {
   const newErrors: Partial<FormData> = {};

   if (!formData.name.trim()) {
      newErrors.name = t('Contacts.formErrors.requiredName');
   }

   if (!formData.email.trim()) {
      newErrors.email = t('Contacts.formErrors.requiredEmail');
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('Contacts.formErrors.invalidEmail');
   }

   if (!formData.message.trim()) {
      newErrors.message = t('Contacts.formErrors.requiredMessage');
   }

   return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors,
   };
};
