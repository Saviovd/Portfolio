import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

interface iTypeWriterProps {
   words: string[];
}

const LoaderStyle = styled.div`
   color: rgb(var(--white));
   min-width: 10rem;
`;
const Loader = ({ words }: iTypeWriterProps) => {
   const [key, setKey] = useState(0);

   useEffect(() => {
      setKey((prevKey) => prevKey + 1);
   }, [words]);

   return (
      <LoaderStyle className='loader' id='loader'>
         <Typewriter
            key={key}
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
