import Image from 'next/image';
import { FooterStyle } from './footerStyles';
import data from '@/data/social.json';
import { Icon } from '../Icon';
import Link from 'next/link';

const { socials } = data;

const Footer = () => {
   const currentDate = new Date();
   return (
      <>
         <FooterStyle>
            <Image
               src='/assets/logo.svg'
               alt='Logo of Savio Almeida'
               width={60}
               height={60}
               className='logo'
            />
            <div className='social-media'>
               {socials.map(({ url, icon, type }) => (
                  <Link href={url} key={type} target='_blanc'>
                     <Icon
                        nameIcon={icon || 'CgUnavailable'}
                        propsIcon={{ size: 35, className: 'icon' }}
                     />
                  </Link>
               ))}
            </div>
            <p className='name'>
               <Link href={'https://github.com/Saviovd'}>Sávio Almeida </Link>
               <span className='copy'>
                  &copy; {currentDate.getFullYear()}, All Rights Reserved.
               </span>
            </p>
         </FooterStyle>
      </>
   );
};

export default Footer;
