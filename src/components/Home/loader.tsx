import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'

const LoaderStyle = styled.div`
   color: rgb(var(--white));
   min-width: 10rem;
`
const Loader = () => {

   return <LoaderStyle className='loader' id='loader'>

      <Typewriter
         options={{
            loop: true,
            cursor: '_',
            strings: ['Desenvolvedor Front-End', 'Desenvolvedor Mobile', 'UX/UI Designer'],
            autoStart: true,
            delay: 50,
            deleteSpeed: 30,
         }}
      />
   </LoaderStyle>;
};

export default Loader;

