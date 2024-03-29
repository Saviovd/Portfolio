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

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const handleScroll = () => {
      setIsSelected()
      const element = document.getElementById(name);
      if (element) {
         const { top, bottom } = element.getBoundingClientRect();
         const isVisible = top - 220 <= pagePosition && bottom - 220 >= 0 ;
         setIsInView(isVisible);
      }
   };
   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [name, pagePosition, isSelected, handleScroll]);

   return (
      <NavItemStyle data-glitch glitchText={name} className={`${isInView || isSelected  ? 'selected' : ''}`}>
            <ScrollLink
               onClick={setIsSelected}
               className={isInView || isSelected  ? 'selected' : ''}
               to={`${name}`}
               smooth={true}
               spy={true}
               duration={500}
               offset={typeof window !== 'undefined' && window.innerWidth < 768 ? -80 : -150}>
               {name}
            </ScrollLink>
      </NavItemStyle>
   );
};

export default NavItem;
