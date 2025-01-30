import Image from 'next/image';
import { Company } from './styles';

interface ICompanyProps {
   company: string;
   logo: string;
   location: string;
   social: string;
}

const CompanyCard = ({ company, logo, social }: ICompanyProps) => {
   const handleClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
      event.stopPropagation();
   };
   return (
      <Company
         href={social}
         target='_black'
         className='company-box'
         onClick={handleClick}
      >
         <Image
            alt={company + ' logo'}
            width={30}
            height={30}
            src={logo}
            className='logo'
            quality={100}
            loading='lazy'
         />
         <p className='company-name'>{company}</p>
      </Company>
   );
};

export default CompanyCard;
