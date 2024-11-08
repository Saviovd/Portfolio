import { IButtonProps } from '@/types/button';
import { ButtonStyle } from './styles';
import React from 'react';

const Button = ({
   content,
   icon,
   className,
   onClick,
}: IButtonProps) => {
   return (
      <ButtonStyle
         onClick={onClick}
         className={className}
      >
         {icon}
         {content}
      </ButtonStyle>
   );
};

export default Button;
