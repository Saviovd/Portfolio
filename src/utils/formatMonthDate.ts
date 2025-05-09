export const formatMonthDate = (dateString: string, locale: string = 'pt') => {
   const date = new Date(dateString);

   if (locale === 'en') {
      return date.toLocaleDateString('en-US', {
         month: 'long',
         year: 'numeric',
      });
   }

   return date.toLocaleDateString(locale, {
      month: '2-digit',
      year: 'numeric',
   });
};
