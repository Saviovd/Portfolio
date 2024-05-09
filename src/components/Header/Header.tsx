import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Nav from '../Nav/Nav';
import { HeaderStyle } from './headerStyles';

const Header = () => {
   const { t } = useTranslation();
   const [isActive, setIsActive] = useState(false);

   return (
      <>
         <HeaderStyle
            onClick={() => setIsActive(!isActive)}
         >
            <Image
               className='logo'
               src={'/assets/logo.svg'}
               alt={t('Header.logoAlt')}
               width={75}
               height={80}
            />
            <Nav isVisible={isActive} />
            {/* moon */}
            <div className={isActive ? 'center active' : 'center'} onClick={() => setIsActive(!isActive)}>
               <div></div>
            </div>
         </HeaderStyle>
      </>
   );
};

export default Header;
