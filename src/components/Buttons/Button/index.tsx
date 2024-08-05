import { IButtonProps } from '@/types/button';
import { ButtonStyle } from './styles';
import React from 'react';

const Button = ({
   content,
   icon,
   className,
   strColor,
   cursor,
   textTransform,
   onClick,
}: IButtonProps) => {
   return (
      <ButtonStyle
         style={{
            color: strColor || 'white',
            textTransform:
               (textTransform as React.CSSProperties['textTransform']) ||
               'none',
            cursor: cursor || '',
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
