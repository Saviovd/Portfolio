import { ProjectProps } from '@/types/project';
import { BackEndContainer } from './styles';
import Link from 'next/link';
import { RxExternalLink } from 'react-icons/rx';

interface ProjectModalProps {
   project: ProjectProps;
}

const BackEndList = ({ project }: ProjectModalProps) => {
   return (
      <>
         <BackEndContainer>
            <h3 className='service-title'>back-end</h3>
            <ul className='service-list'>
               {project.services &&
                  project.services.map((service, index) => (
                     <li key={index}>
                        <Link
                           className='service'
                           href={service.repository}
                           target='_blank'
                        >
                           <RxExternalLink className='service-icon' />
                           <h5 className='service-name'>{service.name}</h5>
                           <p className='service-description'>
                              {service.description
                                 ? service.description
                                 : 'No description avaiable'}
                           </p>
                        </Link>
                     </li>
                  ))}
            </ul>
         </BackEndContainer>
      </>
   );
};

export default BackEndList;
