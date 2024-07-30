import React from 'react';
import NavItem from './NavItem';
import { NavStyle } from './styles';
import { useTranslation } from 'react-i18next';
import LanguageBar from '../Languages';
import { motion } from 'framer-motion';

interface INavProps {
   isActive: boolean;
}

const Nav = ({ isActive }: INavProps) => {
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

   const navVariants = {
      hidden: { opacity: 0, x: '120%' },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '120%' },
   };

   const navTransition = { duration: 0.5 };

   return (
      <NavStyle>
         {isActive && (
            <motion.ul
               key='nav'
               className={`nav_list`}
               initial='hidden'
               animate='visible'
               exit='exit'
               variants={navVariants}
               transition={navTransition}
            >
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
                  setIsSelected={() =>
                     handleNavItemSelect(t('Header.habilities'))
                  }
                  pagePosition={pagePosition}
                  name={t('Header.habilities')}
               />
               <NavItem
                  isSelected={selectedNavItem === t('Header.projects')}
                  setIsSelected={() =>
                     handleNavItemSelect(t('Header.projects'))
                  }
                  pagePosition={pagePosition}
                  name={t('Header.projects')}
               />
               <NavItem
                  isSelected={selectedNavItem === t('Header.testimonials')}
                  setIsSelected={() =>
                     handleNavItemSelect(t('Header.testimonials'))
                  }
                  pagePosition={pagePosition}
                  name={t('Header.testimonials')}
               />
               <NavItem
                  isSelected={selectedNavItem === ''}
                  setIsSelected={() => handleNavItemSelect('')}
                  pagePosition={pagePosition}
                  name=''
               />
               <LanguageBar />
            </motion.ul>
         )}
         <div ref={scrollRef}></div>
      </NavStyle>
   );
};

export default Nav;
