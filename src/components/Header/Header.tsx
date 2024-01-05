import React from 'react';
import Nav from '../Nav/Nav';
import { HeaderStyle, Languages } from './headerStyles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import i18n from 'i18next';

const Header = () => {
   const { t } = useTranslation();
	const router = useRouter();

	const handleLanguageChange = (newLocale: string) => {
		router.push('/', '/', { locale: newLocale });
      i18n.changeLanguage(newLocale);
	};
   const [isActive, setIsActive] = React.useState(false);

   return (
      <>
      <p>{t('Header.hello')}</p>
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
            <Languages>
				<span
					className='language'
					onClick={() => handleLanguageChange('pt')}
				>
					BR
				</span>
				|
				<span
					className='language'
					onClick={() => handleLanguageChange('en')}
				>
					EN
				</span>
            |
            <span
					className='language'
					onClick={() => handleLanguageChange('es')}
				>
					ES
				</span>
			</Languages>
      </>
   );
};

export default Header;
