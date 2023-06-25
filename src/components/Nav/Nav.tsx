import React from 'react';
import NavItem from './NavItem/NavItem';
import { NavStyle } from './navStyles';

interface INavProps {
   isVisible: boolean
}

const Nav = ({isVisible}: INavProps) => {
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
               isSelected={selectedNavItem === 'home'}
               setIsSelected={() => handleNavItemSelect('home')}
               pagePosition={pagePosition}
               name='home'
            />
            <NavItem
               isSelected={selectedNavItem === 'sobre mim'}
               setIsSelected={() => handleNavItemSelect('sobre mim')}
               pagePosition={pagePosition}
               name='sobre mim'
            />
            <NavItem
               isSelected={selectedNavItem === 'habilidades'}
               setIsSelected={() => handleNavItemSelect('habilidades')}
               pagePosition={pagePosition}
               name='habilidades'
            />
            <NavItem
               isSelected={selectedNavItem === 'projetos'}
               setIsSelected={() => handleNavItemSelect('projetos')}
               pagePosition={pagePosition}
               name='projetos'
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
