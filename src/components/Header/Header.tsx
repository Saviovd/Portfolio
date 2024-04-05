import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

import Nav from '../Nav/Nav';
import { HeaderStyle } from './headerStyles';

const Header = () => {
   const { t } = useTranslation();
   const [isActive, setIsActive] = useState(false);
   const [isRotating, setIsRotating] = useState(false);

   const handleRotationClick = () => {
      setIsRotating(true);

      setTimeout(() => {
         setIsRotating(false);
      }, 600);
   };

   return (
      <>
         <HeaderStyle
            style={{
               // height: `${
               //    isActive
               //       ? 'auto'
               //       : `${typeof window !== 'undefined' && window.innerWidth < 768 ? '8rem' : ''}`
               // }`,
            }}
            onClick={() => (isActive ? setIsActive(false) : setIsActive)}
         >
            <Image className='logo' src={'/assets/logo.svg'} alt={t('Header.logoAlt')} width={90} height={90} />
            <Nav isVisible={isActive} />
            {/* moon */}
            {!isActive ? (
               <RxHamburgerMenu onClick={() => {
                  handleRotationClick()
                  setIsActive(!isActive)
               }} className={`burger_icon ${isRotating ? 'rotate' : ''}`} />
            ) : (
               <AiOutlineClose onClick={() => {
                  handleRotationClick()
                  setIsActive(!isActive)
               }} className={`burger_icon ${isRotating ? 'rotate' : ''}`} />
            )}
         </HeaderStyle>
      </>
   );
};

export default Header;
