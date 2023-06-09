import React from 'react';
import { HomeStyle } from './homeStyles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../Button/Button';


const Intro = () => {
   return (<>
      <HomeStyle id='home'>
         <div className='apresentation'>
            <h2 className='hello_world'>{'<HELLO WORLD />'}</h2>
            <span className='calls_me'>_olá, me chamo</span>
            <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
            <h4 className='office'>desenvolvedor |</h4>

            <Loader />

            <Button
               className='left'
               title='Entrar em Contato'
               url='#contatos'
               bgColor='rgba(var(--second-primary-color), 0.4)'
               _blank={false}
            />
            <Button
               className='right'
               title='Download CV'
               url='#'
               _blank={false}
            />
            {/* dont forget to put the download */}
            <ScrollLink to='sobre mim' smooth={true} spy={true} duration={700} delay={100} offset={50}  className='dripping_down'>
               <div className='chevron'></div>
               <div className='chevron'></div>
               <div className='chevron'></div>
            </ScrollLink>
         </div>
         <div className='animated_bg'>
         </div>
      </HomeStyle>
   </>)
}


export default Intro;

