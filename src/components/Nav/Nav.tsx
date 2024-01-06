import React from 'react';
import NavItem from './NavItem/NavItem';
import { NavStyle } from './navStyles';
import { useTranslation } from 'react-i18next';

interface INavProps {
   isVisible: boolean
}

const Nav = ({isVisible}: INavProps) => {
   const { t } = useTranslation();

   const [selectedNavItem, setSelectedNavItem] = React.useState('');
   const [pagePosition] = React.useState(0);
   const scrollRef = React.useRef<HTMLDivElement>(null);

   const handleNavItemSelect = (name: string) => {
      setSelectedNavItem(name);
      if (scrollRef.current) {
         scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <NavStyle style={{animation: `${isVisible ? 'enterMenu 0.5s forwards' : ''}`}}>
         <ul className={`nav_list ${isVisible ? 'isVisible' : ''}`}>
            <NavItem
               isSelected={selectedNavItem === t('Header.home')}
               setIsSelected={() => handleNavItemSelect(t('Header.home'))}
               pagePosition={pagePosition}
               name={t('Header.home')}
            />
            <NavItem
               isSelected={selectedNavItem === t('Header.aboutme')}
               setIsSelected={() => handleNavItemSelect(t('Header.aboutme'))}
               pagePosition={pagePosition}
               name={t('Header.aboutme')}
            />
            <NavItem
               isSelected={selectedNavItem === t('Header.habilities')}
               setIsSelected={() => handleNavItemSelect(t('Header.habilities'))}
               pagePosition={pagePosition}
               name={t('Header.habilities')}
            />
            <NavItem
               isSelected={selectedNavItem === t('Header.projects')}
               setIsSelected={() => handleNavItemSelect(t('Header.projects'))}
               pagePosition={pagePosition}
               name={t('Header.projects')}
            />
            {/* <NavItem
               isSelected={selectedNavItem === 'depoimentos'}
               setIsSelected={() => handleNavItemSelect('depoimentos')}
               pagePosition={pagePosition}
               name='depoimentos'
            /> */}
            <NavItem
               isSelected={selectedNavItem === ''}
               setIsSelected={() => handleNavItemSelect('')}
               pagePosition={pagePosition}
               name=''
            />
         </ul>
         <div ref={scrollRef}></div>
      </NavStyle>
   );
};

export default Nav;
