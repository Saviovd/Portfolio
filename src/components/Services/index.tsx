import Title from '../Title';
import { MdMiscellaneousServices } from 'react-icons/md';
import { ServicesList, ServicesPresentation, ServicesStyle } from './styles';
import data from '@/data/services.json';
import ServiceCard from '../ServiceCard';
const { services } = data;

const Services = () => {
   return (
      <>
         <ServicesStyle id='services'>
            <Title
               text={'Serviços'}
               icon={<MdMiscellaneousServices />}
               className='section-title'
            />
            <div className='services-container'>
               <ServicesPresentation>
                  <h3 className='title'>
                     Como Transformo <br />
                     <span className='code'>Código</span> em{' '}
                     <span className='xp'>Experiências Incríveis</span>?
                  </h3>
                  <p className='text'>
                     Eu transformo código em experiências que encantam os
                     usuários. Com foco em design intuitivo e performance, crio
                     soluções que não só funcionam, mas surpreendem, elevando a
                     interação e o engajamento com seu produto.
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
