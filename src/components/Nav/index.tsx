import React from 'react';
import NavItem from './NavItem';
import { NavStyle } from './styles';
import { useTranslation } from 'react-i18next';
import LanguageBar from '../Languages';
import { motion } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';

interface INavProps {
   isActive: boolean;
}

const Nav = ({ isActive }: INavProps) => {
   const { t } = useTranslation();

   const [selectedNavItem, setSelectedNavItem] = React.useState('');
   const scrollRef = React.useRef<HTMLDivElement>(null);

   const { width } = useWindowSize();
   const handleNavItemSelect = (name: string) => {
      setSelectedNavItem(name);
      if (scrollRef.current) {
         scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const navVariants = {
      hidden: { opacity: 0, x: width < 1024 ? '120%' : 0 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '120%' },
   };

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
               transition={{ duration: width < 1024 ? 0.5 : 0.2 }}
            >
               <NavItem
                  isSelected={selectedNavItem === t('Header.home')}
                  setIsSelected={() => handleNavItemSelect(t('Header.home'))}
                  name={t('Header.home')}
               />
               <NavItem
                  isSelected={selectedNavItem === t('Header.aboutme')}
                  setIsSelected={() => handleNavItemSelect(t('Header.aboutme'))}
                  name={t('Header.aboutme')}
               />
               <NavItem
                  isSelected={selectedNavItem === t('Header.habilities')}
                  setIsSelected={() =>
                     handleNavItemSelect(t('Header.habilities'))
                  }
                  name={t('Header.habilities')}
               />
               <NavItem
                  isSelected={selectedNavItem === t('Header.projects')}
                  setIsSelected={() =>
                     handleNavItemSelect(t('Header.projects'))
                  }
                  name={t('Header.projects')}
               />
               <NavItem
                  isSelected={selectedNavItem === t('Header.testimonials')}
                  setIsSelected={() =>
                     handleNavItemSelect(t('Header.testimonials'))
                  }
                  name={t('Header.testimonials')}
               />
               <NavItem
                  isSelected={selectedNavItem === ''}
                  setIsSelected={() => handleNavItemSelect('')}
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
