import Image from 'next/image';
import { SocialStyle } from './SocialStyles';
import data from '../../data/data.json';
import Link from 'next/link';
const { socials } = data;
import { motion } from 'framer-motion';

const Social = () => {
   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, x: initialY },
      whileInView: { opacity: 1, x: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.2,
         duration: 4,
         delay: 3.5,
      },
   });
   return (
      <SocialStyle>
         {socials.map((social, i) => {
            if (i < 3 && social.type != 'e-mail') {
               return (
                  // eslint-disable-next-line react/jsx-key
                  <motion.div  {...motionProps(100, 0)}
                  transition={{
                     when: 'beforeChildren',
                     staggerChildren: 0.5,
                     type: 'spring',
                     duration: 4,
                     delay: 3.5,
                  }}>
                     <Link href={social.url} key={i} target='_blank'>
                        <Image
                           alt={social.name}
                           src={social.icon}
                           width={50}
                           height={50}
                           className='social'
                        />
                     </Link>
                  </motion.div>
               );
            }
         })}
      </SocialStyle>
   );
};

export default Social;
