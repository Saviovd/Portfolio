import { IButtonProps } from '@/types/button';
import { ButtonStyle } from './styles';
import React from 'react';

const Button = ({
   content,
   icon,
   className,
   strColor,
   onClick,
}: IButtonProps) => {
   return (
      <ButtonStyle
         style={{
            color: strColor || 'white',
         }}
         onClick={onClick}
         className={className}
      >
         {icon}
         {content}
      </ButtonStyle>
   );
};

export default Button;
