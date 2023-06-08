import React from 'react';
import { HomeStyle } from './homeStyles';
import Loader from './loader';
import { Link as ScrollLink } from 'react-scroll';
// import GlobeComponent from './Globe';


const Intro = () => {
   return (<>
      <HomeStyle id='home'>
         <div className='apresentation'>
            <h2 className='hello_world'>{'<HELLO WORLD />'}</h2>
            <span className='calls_me'>_olá, me chamo</span>
            <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
            <h4 className='office'>desenvolvedor |</h4>

            <Loader />

            <a href='#contatos' className='intro_button left'>Entrar em Contato</a>
            <a href='#' className='intro_button right'>Download CV</a>
            {/* dont forget to put the download */}
            <ScrollLink to='sobre mim' smooth={true} spy={true} duration={700} delay={100} offset={50}  className='dripping_down'>
               <div className='chevron'></div>
               <div className='chevron'></div>
               <div className='chevron'></div>
            </ScrollLink>
         </div>
         <div className='element_3d'>
         </div>
      </HomeStyle>
   </>)
}


export default Intro;

