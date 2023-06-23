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
            strings: ['Front-End', 'BA☠k-#', 'Back-End','Mobile','Fu!!-S', 'Full-stack'],
            autoStart: true,
            delay: 50,
            deleteSpeed: 50,
         }}
      />
   </LoaderStyle>;
};

export default Loader;

