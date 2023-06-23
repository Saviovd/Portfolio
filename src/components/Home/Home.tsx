import React from 'react';
import { HomeStyle } from './homeStyles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Intro = () => {

   const motionProps = (initialX: number, finalX: number) => ({
      initial: { opacity: 0, x: initialX },
      whileInView: { opacity: 1, x: finalX },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 1,
         delay: 0.2
      },
   });


   return (
      <>
         <HomeStyle id='home'>
            <motion.div {...motionProps(-100, 0)} className='apresentation'>
               <span className='calls_me'>_olá, me chamo</span>
               <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
               <h4 className='office'>desenvolvedor |</h4>

               <Loader />

               <Button
                  className='left'
                  title='Meu GitHub'
                  url='https://github.com/Saviovd'
                  bgColor='rgba(var(--primary-pink), 0.4)'
                  _blank={true}
               />
               <Button
                  className='right'
                  title='Download CV'
                  download={true}
                  _blank={false}
                  url='/documents/curriculum.pdf'
               />
               <ScrollLink
                  to='sobre mim'
                  smooth={true}
                  spy={true}
                  duration={700}
                  delay={100}
                  offset={typeof window !== 'undefined' && window.innerWidth < 768 ? -90 : -150}
                  className='dripping_down'
               >
                  <div className='chevron'></div>
                  <div className='chevron'></div>
                  <div className='chevron'></div>
               </ScrollLink>
            </motion.div>
            <div className='animated_bg'></div>
         </HomeStyle>
      </>
   );
};

export default Intro;
