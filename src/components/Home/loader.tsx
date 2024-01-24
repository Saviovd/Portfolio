import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next';

const LoaderStyle = styled.div`
   color: rgb(var(--white));
   min-width: 10rem;
`
const Loader = () => {
   const { t } = useTranslation();

   return <LoaderStyle className='loader' id='loader'>

      <Typewriter
         options={{
            loop: true,
            cursor: '_',
            strings: [t('Home.devfrontend'), t('Home.devmobile'), t('Home.designer')],
            autoStart: true,
            delay: 50,
            deleteSpeed: 30,
         }}
      />
   </LoaderStyle>;
};

export default Loader;

