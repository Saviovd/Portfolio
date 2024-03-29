import Image from 'next/image';
import { AboutStyle } from './aboutStyles';
import Title from '../Title/Title';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2,
      },
   });

   return (
      <AboutStyle id='sobre mim'>
         <Title
            firstColor='rgb(var(--primary-pink))'
            secondColor='#FFFFFF'
            firstWord='Sobre'
            secondWord='Mim'
         />

         <motion.div {...motionProps(100, 0)} className='about_content'>
            <div className='img_box'>
               <svg className='filter'>
                  <filter id='alphaRed'>
                     <feColorMatrix
                        mode='matrix'
                        values='1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'
                        result='joint'
                     />
                  </filter>
                  <filter id='alphaGreen'>
                     <feColorMatrix
                        mode='matrix'
                        values='0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0'
                        result='joint'
                     />
                  </filter>
                  <filter id='alphaBlue'>
                     <feColorMatrix
                        mode='matrix'
                        values='0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0'
                        result='joint'
                     />
                  </filter>
                  <filter id='alpha'>
                     <feColorMatrix type='saturate' values='0' />
                  </filter>
               </svg>
               <div className='imgWrap'>
                  <Image
                     className='red photograph'
                     src='/assets/Photo/savio.jpg'
                     alt={'Photography of Sávio Almeida'}
                     width={700}
                     height={600}
                  />
                  <Image
                     className='green photograph'
                     src='/assets/Photo/savio.jpg'
                     alt={'Photography of Sávio Almeida'}
                     width={500}
                     height={600}
                  />
                  <Image
                     className='blue photograph'
                     src='/assets/Photo/savio.jpg'
                     alt={'Photography of Sávio Almeida'}
                     width={500}
                     height={600}
                  />
               </div>
            </div>
            <div className='content'>
               <p className='about_me'>
                  Olá, Me chamo <span className='name'>Sávio Almeida</span>, sou
                  desenvolvedor a cerca 2 anos e meio, mas amo tecnologia desde
                  muito novo. Nesse processo já tive contato com diversas
                  tecnologias voltadas a Front-End, Back-End, Mobile e testes de
                  software, estou sempre em busca de novos aprendizados e
                  desafios!
               </p>
               <div className='social_medias'>
                  <Link
                     href='https://api.whatsapp.com/send?phone=5541991791628'
                     target='_blank'
                  >
                     <FaWhatsapp className='media_icon' />
                  </Link>
                  <Link href='https://github.com/Saviovd' target='_blank'>
                     <FaGithub className='media_icon' />
                  </Link>
                  <Link href='https://linkedin.com/in/saviovd' target='_blank'>
                     <FaLinkedin className='media_icon' />
                  </Link>
               </div>
            </div>
         </motion.div>
      </AboutStyle>
   );
};

export default About;
