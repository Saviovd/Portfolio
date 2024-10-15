/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from 'react-icons/lib';
import { TitleStyle } from './styles';
import { motion } from 'framer-motion';

interface ITitleProps {
   text: string;
   color?: string;
   icon?: IconType | any;
   className?: string;
}

const Title = ({ text, icon, className }: ITitleProps) => {
   return (
      <>
         <TitleStyle
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
         >
            {icon ? icon : ''}
            <motion.h2 className='title'>{text}</motion.h2>
         </TitleStyle>
      </>
   );
};

export default Title;
