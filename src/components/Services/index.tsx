import { ServicesList, ServicesPresentation, ServicesStyle } from './styles';
import data from '@/data/services.json';
import ServiceCard from '../ServiceCard';
import { useTranslation } from 'react-i18next';
const { services } = data;

const Services = () => {
   const { t } = useTranslation();

   return (
      <>
         <ServicesStyle id='services'>
            <div className='services-container'>
               <ServicesPresentation>
                  <h3 className='title'>
                     {t('Services.transform')} <br />
                     <span className='xp'> {t('Services.experiences')}</span>
                  </h3>
                  <p className='text'>
                     {t('Services.description')}
                     <br />
                  </p>
               </ServicesPresentation>
               <ServicesList>
                  {services.map((service, i) => (
                     <li className='item' key={i}>
                        <ServiceCard
                           icon={service.icon}
                           service={service.service}
                           description={service.description}
                        />
                     </li>
                  ))}
               </ServicesList>
            </div>
         </ServicesStyle>
      </>
   );
};

export default Services;
