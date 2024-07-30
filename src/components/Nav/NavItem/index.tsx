import { NavItemStyle } from './styles';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface INavItemProps {
   name: string;
   isSelected?: boolean;
   setIsSelected: () => void;
}

const NavItem = ({ name, isSelected, setIsSelected }: INavItemProps) => {
   const [isInView, setIsInView] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSelected();
         const element = document.getElementById(name);
         if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const isVisible = top - 400 <= 0 && bottom - 230 >= 0;
            setIsInView(isVisible);
         }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [name, isSelected, setIsSelected]);

   return (
      <NavItemStyle data-glitch>
         <ScrollLink
            onClick={setIsSelected}
            className={isInView || isSelected ? 'selected-item' : ''}
            to={`${name}`}
            smooth={true}
            spy={true}
            duration={500}
            offset={-50}
         >
            {name}
         </ScrollLink>
      </NavItemStyle>
   );
};

export default NavItem;
