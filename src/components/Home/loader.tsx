import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
// import { useTranslation } from 'react-i18next';

interface iTypeWriterProps {
   words: string[]
}

const LoaderStyle = styled.div`
   color: rgb(var(--white));
   min-width: 10rem;
`;
const Loader = ({words}: iTypeWriterProps) => {
   // const { t } = useTranslation();

   return (
      <LoaderStyle className='loader' id='loader'>
         <Typewriter
            words={words}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
         />
      </LoaderStyle>
   );
};

export default Loader;
