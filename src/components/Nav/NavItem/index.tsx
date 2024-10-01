import { NavItemStyle } from './styles';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface INavItemProps {
   name: string;
   isSelected?: boolean;
   setIsSelected: () => void;
   to: string
}

const NavItem = ({ name, isSelected, setIsSelected, to }: INavItemProps) => {
   const [isInView, setIsInView] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsSelected();
         const element = document.getElementById(to);
         if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const isVisible = top - 400 <= 0 && bottom - 400 >= 0;
            setIsInView(isVisible);
         }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [to, isSelected, setIsSelected]);

   return (
      <NavItemStyle>
         <ScrollLink
            onClick={setIsSelected}
            className={isInView || isSelected ? 'selected-item' : ''}
            to={`${to}`}
            smooth={true}
            spy={true}
            duration={500}
            offset={0}
         >
            {name}
         </ScrollLink>
      </NavItemStyle>
   );
};

export default NavItem;
