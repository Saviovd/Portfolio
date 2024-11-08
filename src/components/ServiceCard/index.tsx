import { Locale } from '@/types/types';
import i18next from 'i18next';
import { Icon } from '../Icon';
import { ServiceCardStyles } from './styles';

interface IServiceCard {
   icon: string;
   service: {
      en: string;
      pt: string;
      es: string;
   };
   description: {
      en: string;
      pt: string;
      es: string;
   };
}

const ServiceCard = ({ icon, service, description }: IServiceCard) => {
   const locale = i18next.language as Locale;
   return (
      <ServiceCardStyles>
         <Icon
            nameIcon={icon || 'CgUnavailable'}
            propsIcon={{ size: 50, className: 'icon' }}
         />

         <h4 className='service'>{service[locale]}</h4>
         <p className='description'>{description[locale]}</p>
      </ServiceCardStyles>
   );
};

export default ServiceCard;
