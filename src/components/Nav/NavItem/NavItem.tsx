import Link from 'next/link';
import { NavItemStyle } from './navItemStyles';
import React from 'react';

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
         const isVisible = top <= pagePosition && bottom >= 0 ;
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
         <Link onClick={setIsSelected} className={isInView || isSelected  ? 'selected' : ''} href={`#${name}`}>
            {name}
         </Link>
      </NavItemStyle>
   );
};

export default NavItem;
