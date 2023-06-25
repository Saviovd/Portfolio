import React from 'react';
import Nav from '../Nav/Nav';
import { HeaderStyle } from './headerStyles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
   const [isActive, setIsActive] = React.useState(false);

   return (
      <>
         <HeaderStyle
            style={{height: `${isActive ? 'auto' : `${typeof window !== 'undefined' &&  window.innerWidth < 768 ? '8rem' : ''}`}`}}
            onClick={() => isActive ? setIsActive(false) : isActive}
         >
            <Image className='logo' src={'/assets/logo.png'} alt={'Logo de Sávio Almeida'} width={60} height={60} />
            <Nav isVisible={isActive} />
            {!isActive ? (
               <RxHamburgerMenu
                  onClick={() => setIsActive(!isActive)}
                  className='burger_icon'
               />
            ) : (
               <AiOutlineClose
                  onClick={() => setIsActive(!isActive)}
                  className='burger_icon'
               />
            )}
         </HeaderStyle>
      </>
   );
};

export default Header;
