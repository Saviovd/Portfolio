import Image from 'next/image';
import { SocialStyle } from './SocialStyles';
import data from '../../data/data.json';
import Link from 'next/link';
const { socials } = data;

const Social = () => {
   return (
      <SocialStyle className=''>
         {socials.map((social, i) => {
            if (i < 3) {
               return (
                  <Link href={social.url} key={i} target='_blank'>
                     <Image
                        alt={social.name}
                        src={social.icon}
                        width={50}
                        height={50}
                        className='social'
                     />
                  </Link>
               );
            }
         })}
      </SocialStyle>
   );
};

export default Social;
