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

   return (
      <>
         <p>{t('Header.hello')}</p>
         <HeaderStyle
            style={{
               height: `${
                  isActive
                     ? 'auto'
                     : `${typeof window !== 'undefined' && window.innerWidth < 768 ? '8rem' : ''}`
               }`,
            }}
            onClick={() => (isActive ? setIsActive(false) : setIsActive)}
         >
            <Image className='logo' src={'/assets/logo.png'} alt={'Logo de Sávio Almeida'} width={60} height={60} />
            <Nav isVisible={isActive} />
            {!isActive ? (
               <RxHamburgerMenu onClick={() => setIsActive(!isActive)} className='burger_icon' />
            ) : (
               <AiOutlineClose onClick={() => setIsActive(!isActive)} className='burger_icon' />
            )}
         </HeaderStyle>
      </>
   );
};

export default Header;
