import { NavItemStyle } from './navItemStyles';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface INavItemProps {
   name: string;
   isSelected?: boolean;
   setIsSelected: () => void;
   pagePosition: number;
}

const NavItem = ({ name, isSelected, setIsSelected, pagePosition }: INavItemProps) => {
   const [isInView, setIsInView] = React.useState(false);

   React.useEffect(() => {
      const handleScroll = () => {
         setIsSelected()
         const element = document.getElementById(name);
         if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const isVisible = top - 210 <= pagePosition && bottom - 210 >= 0 ;
            setIsInView(isVisible);
         }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [name, pagePosition, isSelected, setIsSelected]);

   return (
      <NavItemStyle data-glitch glitchText={name} className={`${isInView || isSelected  ? '' : ''}`}>
            <ScrollLink
               onClick={setIsSelected}
               className={isInView || isSelected  ? 'selected-item' : ''}
               to={`${name}`}
               smooth={true}
               spy={true}
               duration={500}
               offset={typeof window !== 'undefined' && window.innerWidth < 768 ? -100 : -150}>
               {name}
            </ScrollLink>
      </NavItemStyle>
   );
};

export default NavItem;
