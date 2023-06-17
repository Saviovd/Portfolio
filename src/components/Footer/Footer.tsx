import Image from 'next/image';
import { FooterStyle } from './footerStyles';

const Footer = () => {
   return (
      <>
         <FooterStyle>
            <p className='name'>
               Sávio Almeida <span className='copy'>&copy; 2023, All Rights Reserved.</span>
            </p>
            <Image src='/assets/logo.png' alt='Logo of Savio Almeida' width={40} height={40} />
         </FooterStyle>
      </>
   );
};

export default Footer;
