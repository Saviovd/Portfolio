export const formatMonthDate = (dateString: string) => {
   return new Date(dateString).toLocaleDateString('pt-BR', {
      month: '2-digit',
      year: 'numeric',
   });
};
