import React from 'react';
import Nav from '../Nav/Nav';
import { HeaderStyle } from './headerStyles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
   const [isActive, setIsActive] = React.useState(false);

   return (
      <>
         <HeaderStyle
            style={{height: `${isActive ? 'auto' : '0'}`}}
            onClick={() => isActive ? setIsActive(false) : isActive}
         >
            <h1 className='logo'>logo aqui!</h1>
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
