import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'

const LoaderStyle = styled.div`
   color: rgb(var(--white));
   min-width: 12rem;
`
const Loader = () => {

   return <LoaderStyle className='loader' id='loader'>

      <Typewriter
         options={{
            loop: true,
            cursor: '_',
            strings: ['Front-End', 'B☠ck', 'Back-End','Mobile','Fu!L $', 'Full Stack'],
            autoStart: true,
            delay: 50,
            deleteSpeed: 30,
         }}
      />
   </LoaderStyle>;
};

export default Loader;

