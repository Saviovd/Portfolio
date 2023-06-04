/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { HomeStyle } from './homeStyles';
import Loader from './loader';
import GlobeComponent from './Globe';

const Intro = () => {
   return (<>
      <HomeStyle id='home'>
         <div className='apresentation'>
            <h2 className='hello_world'>{'<HELLO WORLD />'}</h2>
            <span className='calls_me'>_olá, me chamo</span>
            <h3 className='my_name'>Sávio Almeida {'< />'}</h3>
            <h4 className='office'>desenvolvedor |</h4>

            <Loader/>

            <a href='#contatos' className='intro_button left'>Entrar em Contato</a>
            <a href='#' className='intro_button right'>Download CV</a>
            {/* dont forget to put the download */}
            <a href='#sobre mim' className='dripping_down'>
               <div className='chevron'></div>
               <div className='chevron'></div>
               <div className='chevron'></div>
            </a>
         </div>
         <div className='element_3d'>
            <GlobeComponent />
         </div>
      </HomeStyle>
   </>)
}


export default Intro;
function randomWordLoop() {
   throw new Error('Function not implemented.');
}

