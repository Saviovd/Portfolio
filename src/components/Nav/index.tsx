import React from 'react';
import NavItem from './NavItem';
import { NavStyle } from './styles';
import { motion } from 'framer-motion';
import useWindowSize from '@/hooks/useWindowSize';
import data from '@/data/navigation.json';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import ButtonLink from '../Buttons/ButtonLink';
import { MdOutlineFileDownload } from 'react-icons/md';

const { navigation } = data;

interface INavProps {
   isActive: boolean;
}

const Nav = ({ isActive }: INavProps) => {
   const locale = i18next.language as Locale;

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
      hidden: { opacity: 0, x: width < 1024 ? '-120%' : 0 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: '-120%' },
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
               transition={{ duration: 0.5, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            >
               {navigation.map((item, i) => (
                  <NavItem
                     key={i}
                     to={item.to}
                     isSelected={selectedNavItem === item.title[locale]}
                     setIsSelected={() => handleNavItemSelect(item.to)}
                     name={item.title[locale]}
                  />
               ))}
               <ButtonLink
                  fontSize={2}
                  className='cv-btn'
                  content='Download CV'
                  download={true}
                  _blank={false}
                  icon={<MdOutlineFileDownload />}
                  border='1px solid rgba(var(--primary-blue))'
                  url={`/documents/Sávio Almeida - ${locale !== 'es' ? locale : 'en'}.pdf`}
               />
            </motion.ul>
         )}
         <div ref={scrollRef}></div>
      </NavStyle>
   );
};

export default Nav;
