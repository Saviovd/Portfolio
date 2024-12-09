import Image from 'next/image';
import { FooterStyle } from './footerStyles';

const Footer = () => {
   return (
      <>
         <FooterStyle>
            <p className='name'>
               Sávio Almeida <span className='copy'>&copy; 2024, All Rights Reserved.</span>
            </p>
            <Image src='/assets/logo.svg' alt='Logo of Savio Almeida' width={24} height={24} />
         </FooterStyle>
      </>
   );
};

export default Footer;
