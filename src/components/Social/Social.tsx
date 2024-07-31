import { SocialStyle } from './SocialStyles';
import data from '../../data/social.json';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const { socials } = data;

const Social = () => {
   const motionProps = (initialPosition: number, finalPosition: number, delay: number) => ({
      initial: { opacity: 0, x: initialPosition },
      whileInView: { opacity: 1, x: finalPosition },
      viewport: { once: true },
      transition: {
         bounce: 0,
         duration: 0.5,
         delay: 0.4 * delay,
         ease: [0.42, 0, 0.58, 1],
      },
   });

   return (
      <SocialStyle>
         {socials.map((social, i) => {
            if (i < 3 && social.type !== 'e-mail') {
               return (
                  <motion.div
                     key={i}
                     {...motionProps(100, 0, i + 1)}
                     className='social-box'
                  >
                     <Link href={social.url} target='_blank'>
                        {social.type === 'linkedin' && (
                           <FaLinkedinIn className='social-icon' />
                        )}
                        {social.type === 'github' && (
                           <FaGithub className='social-icon' />
                        )}
                     </Link>
                  </motion.div>
               );
            }
            return null;
         })}
      </SocialStyle>
   );
};

export default Social;
