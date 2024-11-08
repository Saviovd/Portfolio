import { ServicesList, ServicesPresentation, ServicesStyle } from './styles';
import data from '@/data/services.json';
import ServiceCard from '../ServiceCard';
const { services } = data;

const Services = () => {
   return (
      <>
         <ServicesStyle id='services'>
            <div className='services-container'>
               <ServicesPresentation>
                  <h3 className='title'>
                     Transformo Código em <br />
                     <span className='xp'>Experiências Incríveis</span>
                  </h3>
                  <p className='text'>
                     Com foco em design intuitivo e performance, crio soluções
                     que não só funcionam, mas surpreendem, elevando a interação
                     e o engajamento com seu produto. Explore abaixo como meus
                     serviços podem transformar sua ideia em uma experiência
                     única para o seu cliente.
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
